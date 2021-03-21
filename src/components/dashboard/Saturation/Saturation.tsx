import React, { useMemo } from "react";
import { useWaterStore } from "../../../store/store";
import Widget, { WidgetBody, WidgetHeader } from "../Widget";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './saturation.scss';

const Saturation = () => {

  const totalIncoming = useWaterStore(store => store.getTotalIncoming());
  const totalOutgoing = useWaterStore(store => store.getTotalOutgoing());

  const saturation = useMemo(() => {
    return totalIncoming / totalOutgoing * 100;
  }, [totalIncoming, totalOutgoing])

  return (
    <Widget loading={isNaN(saturation)}>
      <WidgetHeader>
        <span className="title">Verzadiging</span>
      </WidgetHeader>
      <WidgetBody>
        {!isNaN(saturation) && (
          <CircularProgressbar 
            className="saturation-chart" 
            value={saturation} 
            text={`${saturation.toFixed(1)}%`} 
          />
        )}
      </WidgetBody>
    </Widget>
  )
}

export default Saturation;