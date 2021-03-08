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
      <div className="widget-header">
        <span className="title">Opgevangen water</span>
      </div>
      <div className="widget-body display-4 water-saved text-center">
          {diff.toFixed(1)}L
      </div>
    </Widget>
  )
}

export default WaterSaved;