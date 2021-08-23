import './season.scss';
 
interface Props {
  name: string;
  className?: string
}

const Season = (props: Props) => {
  const {
    name,
    className = ""
  } = props;
  return (
    <div className={`season ${className} d-flex p-0`}>
      <div className="icon col ">
      </div>
      <div className="label">
        {name}
      </div>
    </div>
  )
}

export default Season