import { ReactComponent as BathSvg } from 'assets/images/bath2.svg';
import "./bath.scss"

interface Props {
  fraction?: number;
}

const Bath = ({ fraction = 1 }: Props) => (
  <div className="bath">
    <BathSvg className="bath-back" />
    <BathSvg className="bath-front" style={{ 
      // clip: `rect(${fraction * 100}%, 0, 0, 0)`
      clipPath: `inset(${100 - fraction * 100}% 0px 0px 0px)`
    }}/>
  </div>
)

export default Bath