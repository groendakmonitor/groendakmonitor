import { CSSProperties } from "react"

interface Props {
  digit: string,
  speed?: number,
  animate?: boolean,
  fraction?: number,
}

const Digit = ({ 
  digit, 
  animate, 
  speed = 0,
  fraction = 0
}: Props) => {

  const style: CSSProperties = {
    transform: `translateY(-${parseInt(digit, 10) + fraction}em)`
  }
  
  if (animate) {
    style.animationName = `slide${digit}`
    style.animationTimingFunction = 'linear'
    style.animationIterationCount = 1
    style.animationDuration = `${speed}ms`
  }
  return (
    <div className={'digit'} >
      <div className="digit-inner" style={style} >
        <div>0</div>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
        <div>8</div>
        <div>9</div>
        <div>0</div>
      </div>
    </div>
  )
}

// Digit.propTypes = {
//   digit: React.PropTypes.string.isRequired,
//   speed: React.PropTypes.number.isRequired,
//   animate: React.PropTypes.bool,
// }

export default Digit