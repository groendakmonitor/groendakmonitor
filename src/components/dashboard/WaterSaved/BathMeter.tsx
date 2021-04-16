import React, { useMemo } from 'react';
import Bath from './Bath';

const LITERS_IN_BATHTUB = 80;
const MAX_TUBS = 12;

interface Props {
  diff: number;
}

const BathMeter = ({ diff }: Props) => {
  const bathtubs = useMemo(()  => {
    return diff /  LITERS_IN_BATHTUB;
  }, [diff]);

  const fractionalBathtub = useMemo(() => {
    return bathtubs - Math.floor(bathtubs)
  }, [bathtubs])

  return (
    <>
      <div className="text-nowrap text-truncate">{bathtubs.toFixed(1)}  badkuipen</div>
      <div className="bath-meter">
        <Bath fraction={fractionalBathtub} />
        {[...Array(Math.min(Math.floor(bathtubs), MAX_TUBS-1))].map((_, index: number) => (
          <Bath key={index} />
        ))}
      </div>
    </>
  )
}

export default BathMeter