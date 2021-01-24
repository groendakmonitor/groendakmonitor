import React, { useMemo } from "react";
import classNames from "classnames";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTint, faHandHolding } from '@fortawesome/fontawesome-free-solid'
import { useWaterStore } from "../../../store/store";
import  { ReactComponent as LeafSvg } from "../../../images/leaf.svg";

const Saturation = () => {

  const totalIncoming = useWaterStore(store => store.getTotalIncoming());
  const totalOutgoing = useWaterStore(store => store.getTotalOutgoing());

  const saturation = useMemo(() => {
    return totalIncoming / totalOutgoing * 100;
  }, [totalIncoming, totalOutgoing])

  return (
    <div className={`widget widget-tile be-loading ${classNames({"be-loading-active": isNaN(saturation)})}`}>
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
      <div className="be-spinner">
        <svg width="40px" height="40px" viewBox="0 0 66 66" xmlnsName="http://www.w3.org/2000/svg">
          <circle fill="none" strokeWidth={4} strokeLinecap="round" cx={33} cy={33} r={30} className="circle" />
        </svg>
      </div>
    </div>
  )
}

export default Saturation;