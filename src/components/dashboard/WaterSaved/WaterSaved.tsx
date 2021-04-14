import React, { useEffect, useMemo, useState } from "react";
import { useWaterStore } from "../../../store/water";
import Widget, { WidgetBody, WidgetHeader } from "../Widget";
import Odometer from "./Odometer/Odometer";
import "./water-saved.scss"

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
    return Math.max(totalOutgoing - totalIncoming, 0);
  }, [totalIncoming, totalOutgoing])

  const bathtubs = useMemo(()  => {
    return Math.ceil(diff /  LITERS_IN_BATHTUB);
  }, [diff]);

  return (
    <Widget loading={loading}>
      <WidgetHeader>
        <span className="title">Opgevangen water</span>
      </WidgetHeader>
      <WidgetBody>
          {diff.toFixed(1)}L
          <Odometer
            size={42}
            number={diff}
            speed={500}
            digitsBeforeDecimal={3}
            digitsAfterDecimal={2}
            decimalChar=","
          />
      </WidgetBody>
    </Widget>
  )
}

export default WaterSaved;