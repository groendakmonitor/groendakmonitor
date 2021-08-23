import './progressBar.scss';
 
interface Props {
  value: number;
  className?: string
}

const ProgressBar = (props: Props) => {
  const {
    value,
    className = ""
  } = props;
  return (
    <div className={`my-progress-bar ${className}`}>
      <div className="bar col p-0 ">
        <div className="track h-100" style={{ width: `${value}%`}}/>
      </div>
      <div className="label ml-2">
        {value.toFixed(1)}%
      </div>
    </div>
  )
}

export default ProgressBar