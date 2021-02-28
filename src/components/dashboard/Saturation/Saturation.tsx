import React, { useMemo } from "react";
import { useWaterStore } from "../../../store/store";
import  { ReactComponent as LeafSvg } from "../../../images/leaf.svg";
import Widget from "../Widget";

const Saturation = () => {

  const totalIncoming = useWaterStore(store => store.getTotalIncoming());
  const totalOutgoing = useWaterStore(store => store.getTotalOutgoing());

  const saturation = useMemo(() => {
    return totalIncoming / totalOutgoing * 100;
  }, [totalIncoming, totalOutgoing])

  return (
    <Widget loading={isNaN(saturation)}>
      <div className="widget-head">
        <span className="title">Verzadiging</span>
      </div>
      <div className="row">
        <h1 className="col-xs-6">
         <LeafSvg />
        </h1>
        <h1 className="col-xs-6">
          {isNaN(saturation) ? "" : `${saturation.toFixed(1)}%`}
        </h1>
      </div>
      <div className="widget-head">
      </div>
      <div className="widget-chart-container">
      </div>
    </Widget>
  )
}

export default Saturation;