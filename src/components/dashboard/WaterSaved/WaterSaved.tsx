import React, { useEffect, useMemo, useState } from "react";
import { useWaterStore } from "../../../store/water";
import Widget, { WidgetBody, WidgetHeader } from "../Widget";
import BathMeter from "./BathMeter";
import Odometer from "./Odometer/Odometer";
import "./water-saved.scss"


const WaterSaved = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const stopLoading = () => setLoading(false);
    const timeout = setTimeout(stopLoading, 1000);
    
    return () => clearTimeout(timeout);
  }, []);

  
  const totalIncoming = useWaterStore(store => store.getTotalIncoming());
  const totalOutgoing = useWaterStore(store => store.getTotalOutgoing());

  const diff = useMemo(() => {
    return Math.max(totalIncoming - totalOutgoing, 0);
  }, [totalIncoming, totalOutgoing])

  // const [diff, setDiff ] = useState(0)

  return (
    <Widget loading={loading} className="water-saved d-flex flex-column">
      <WidgetHeader>
        <span className="title">Water</span>
        {/* <input type="number" style={{ width: 130}} value={diff} onChange={e => setDiff(parseFloat(e.target.value))}></input> */}
      </WidgetHeader>
      <WidgetBody className="flex-grow-1">
        <div className="row no-gutters h-100">
          <div className="col-6 d-flex flex-column box">
            <div className="flex-fill p-2">
              opgevangen
            </div>
            <div className="d-flex justify-content-center pb-2">
              <Odometer
                // className="align-self-end"
                size={24}
                number={diff}
                speed={500}
                digitsBeforeDecimal={Math.max(3, diff.toFixed().length)}
                digitsAfterDecimal={1}
                decimalChar=","
              />
              <span className="pl-2">L</span>
            </div>
          </div>
          <div className="col-6 pl-2">
            <BathMeter diff={diff} />
          </div>
        </div>
      </WidgetBody>
    </Widget>
  )
}

export default WaterSaved;