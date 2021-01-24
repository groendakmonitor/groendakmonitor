import React, { useEffect, useState } from "react";
import classNames from "classnames";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTint } from '@fortawesome/fontawesome-free-solid'

const WaterSaved = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const stopLoading = () => setLoading(false);
    const timeout = setTimeout(stopLoading, 1000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className={`widget widget-tile be-loading ${classNames({"be-loading-active": loading})}`}>
      <div className="row">
        <div className="col-xs-6">
          <div className="widget-head">
           <span className="title">Opgevangen water</span>
          </div>
          <h1 className="col-xs-6">
            5L
          </h1>
          <h1 className="col-xs-6">
            <FontAwesomeIcon icon={faTint} color="rgb(66, 133, 244)" />
          </h1>
        </div>
        <div className="col-xs-6">
          <div className="widget-head">
           <span className="title">Dat zijn</span>
          </div>
        </div>
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

export default WaterSaved;