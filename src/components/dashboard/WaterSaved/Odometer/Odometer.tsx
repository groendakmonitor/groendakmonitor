import Digit from './Digit'
import "./odometer.scss"

interface Props {
  number: number;
  digitsBeforeDecimal?: number;
  digitsAfterDecimal?: number;
  speed?: number;
  size?: number;
  decimalChar?: string;
  intermediateLastFractalDigit?: boolean
}

const Odometer = ({
    number,
    digitsBeforeDecimal = 4,
    digitsAfterDecimal = 0,
    speed = 100,
    size = 72,
    decimalChar = ".",
    intermediateLastFractalDigit = true
  }: Props) => {
  const integerPartNumber = Math.floor(number);
  const fractionalPartNumber = number - integerPartNumber;

  // Get array of strings for integer part and fractional part
  const integerPartChars = calculateChars(integerPartNumber, digitsBeforeDecimal);
  const fractionalPartChars = calculateChars(fractionalPartNumber, digitsAfterDecimal);

  const odometerStyle = {
    fontSize: `${size}px`, 
    lineHeight: `${size}px`
  }

  return (
    <div className={'odometer'} style={odometerStyle}>
      <div className="integer-part">
        { integerPartChars.map((digit, i) => {
            const place = Math.pow(10, (digitsBeforeDecimal-i-1))
            const animate = (number % place === 0) || place === 1
            return (
              <Digit key={i} digit={digit} animate={animate} speed={speed} />
            )
        })}
      </div>
      {digitsAfterDecimal > 0 && (
        <>
          <div className="decimal-seperator">
            {decimalChar}
          </div>
          <div className="fractional-part">
          { fractionalPartChars.map((digit, i) => {
              const place = 1 / Math.pow(10, i)
              const lastDigit = i === digitsAfterDecimal - 1;
              const animate = (number % place === 0) || lastDigit
              if (lastDigit && intermediateLastFractalDigit) {
                /* Lets say we want to display the 123.4567 with 3 digits before decimal and 2 after decimal
                if we round this down to 3 digits after decimal we get 123.457
                this means the last digit (5) we want to show is 7/10 underway of becoming a 6
                */
              const fraction = parseInt(number.toFixed(digitsAfterDecimal + 1).slice(-1), 10) / 10

              return <Digit key={i} digit={digit} animate={animate} speed={speed} fraction={fraction}/>;
            }
                
            return <Digit key={i} digit={digit} animate={animate} speed={speed} />;
          })}
          </div>
        </>
      )}
    </div>
  )
}

export default Odometer;

/** Returns number as array of string characters */
const calculateChars = (number: number, digits: number) => {
  let chars = number.toString().split('');
  if (number >= 1) {
    // integer part
    if (chars.length > digits) chars = chars.slice(-digits);
    while (chars.length < digits) chars.unshift('0');
  } else {
    // fractional part
    chars = chars.slice(2) // cut off: "0." from the number
    if (chars.length > digits) chars = chars.slice(0, digits);
    while (chars.length < digits) chars.push('0');

  }
  return chars;
}