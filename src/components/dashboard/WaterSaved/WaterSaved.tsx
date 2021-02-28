import React, { useEffect, useMemo, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTint, faBath } from '@fortawesome/fontawesome-free-solid'
import { useWaterStore } from "../../../store/store";
import Widget from "../Widget";

const LITERS_IN_BATHTUB = 80;

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
    return totalOutgoing - totalIncoming;
  }, [totalIncoming, totalOutgoing])

  const bathtubs = useMemo(()  => {
    return Math.ceil(diff /  LITERS_IN_BATHTUB);
  }, [diff]);

  return (
    <Widget loading={loading}>
      <div className="row">
        <div className="col-xs-6">
          <div className="widget-head">
           <span className="title">Opgevangen water</span>
          </div>
          <div className="row">
            <h1 className="col-xs-6">
              {diff.toFixed(1)}L
            </h1>
            <h1 className="col-xs-6">
              <FontAwesomeIcon icon="tint" color="rgb(66, 133, 244)" />
            </h1>
          </div>
        </div>
        <div className="col-xs-6">
          <div className="widget-head">
           <span className="title">Dat zijn</span>
          </div>
          <div className="row">
            <h1 className="col-xs-6">
              {bathtubs}
            </h1>
            <h1 className="col-xs-6">
              <FontAwesomeIcon icon="bath" color="rgb(66, 133, 244)" />
            </h1>
          </div>
          <div>
            Badkuipen
          </div>
        </div>
       </div>
      <div className="widget-head">
      </div>
      <div className="widget-chart-container">
      </div>
    </Widget>
  )
}

export default WaterSaved;