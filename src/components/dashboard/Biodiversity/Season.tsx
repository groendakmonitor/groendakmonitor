import './season.scss';
 
interface Props {
  name: string;
  className?: string
}

const mapping = {
  spring: "Voorjaar",
  summer: "Zomer",
  autumn: "Najaar",
  winter: "Winter",
}

const Season = (props: Props) => {
  const {
    name,
    className = ""
  } = props;
  return (
    <div className={`season ${className} d-flex p-0`}>
      <div className={`icon mt-1 icon-${name}`}>
      </div>
      <div className="ml-1 label">
        {mapping[name as keyof typeof mapping]}
      </div>
    </div>
  )
}

export default Season