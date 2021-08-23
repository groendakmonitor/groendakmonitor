import Widget, { WidgetBody, WidgetHeader } from "../Widget";
import { ReactComponent as Bee } from 'assets/images/bee.svg';
import { useEffect, useState } from "react";
import { getAuthHeader } from "misc/authentication";
import { BiodiversityData } from "models/biodiversity";
import './biodiversity.scss';

type DatePoint = BiodiversityData & { 
  date?: Date
  distance?: number
  before?: boolean
}

const Biodiversity = () => {
  const [data, setData] = useState<BiodiversityData[]>()
  const [today, setToday] = useState<Date>(new Date(2021, 10, 5))

  useEffect(() => {
    fetch(`${process.env.REACT_APP__API_URL}/biodiversity`, {
      method: 'get',
      headers: [['Content-Type', 'application/json'], getAuthHeader()],
    })
    .then((response) => response.json())
    .then((response: BiodiversityData[]) => {
      setData(response.sort((a, b) => a.date_month - b.date_month));
    })
  }, []);

  useEffect(() => {
    if (!data) return;
    const datePointsRaw: DatePoint[] = [
      { ...data[data.length -1], date: new Date(today.getFullYear() - 1, data[data.length -1].date_month, data[data.length -1].date_day)}, // wrap around
      ...data,
      { ...data[0], date: new Date(today.getFullYear() + 1, data[0].date_month, data[0].date_day) } // wrap arouund
    ]
    const datePoints = datePointsRaw.reduce<DatePoint[]>((acc, value) => {
      if (!value.date) {
        value.date = new Date(today.getFullYear(), value.date_month, value.date_day);
      }
      value.distance = today.getTime() - value.date.getTime(); // distance between this date point and today
      acc.push(value)
      return acc
    }, []);
    const sorted = datePoints.sort((a, b) => (a.distance ?? 0) - (b.distance ?? 0));
    console.log(sorted)
    const last = sorted.find(dp => dp.distance !== undefined && dp.distance >= 0);
    if (!last?.date) return;
    const next = sorted[sorted.indexOf(last) - 1];
        if (!next.date) return;
    const distanceBetweenLastAndNext = next.date.getTime() - last.date.getTime();
    const distanceBetweenLastAndNow = today.getTime() - last.date.getTime();
    const fraction =  distanceBetweenLastAndNow / distanceBetweenLastAndNext;
    const biodiversity = lerp(last.biodiversity, next.biodiversity, fraction)

    console.log('fraction ', fraction)
    console.log('biodiversity ', biodiversity)
    return
  }, [data, today])

  return (
    <Widget className="biodiversity">
      <WidgetHeader>
        <span className="title">Biodiversiteit</span>
      </WidgetHeader>
      <WidgetBody>
        <div className="row">
          <div className="col-6">
            Per week
          </div>
          <div className="col-6">
            <Bee className="bee"/>
          </div>
        </div>
      </WidgetBody>
    </Widget>
  )
}

export default Biodiversity;

const lerp = (start:number, end: number, amt: number) => {
  return (1-amt)*start+amt*end
}