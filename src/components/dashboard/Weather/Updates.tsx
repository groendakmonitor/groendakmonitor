import { UpdateData } from "models/update";
import { useEffect, useState } from "react";
import './styles/updates.scss';
const INTERVAL_TIME = 5000;

const Updates = () => {
  const [data, setData] = useState<UpdateData[]>()
  const [currentItem, setCurrentItem] = useState(0)

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/updates`, {
      method: 'get',
      headers: [['Content-Type', 'application/json']],
    })
    .then((response) => response.json())
    .then((response) => {
      setData(response);
    });
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      console.log('hi', currentItem)
      setCurrentItem((currentItem + 1) % (data?.length ?? 0))
    }, INTERVAL_TIME)
    return () => clearInterval(interval)
  }, [currentItem, data?.length])

  return (
    <ul className="updates pt-2">
      {data?.map((update, index) => (
        <li key={update.id} className="pl-3" style={ index === 0 ? { marginTop: `-${ currentItem * 77}px`} : undefined }> 
          {update.text}
        </li>
      ))}
    </ul>
  )
}

export default Updates