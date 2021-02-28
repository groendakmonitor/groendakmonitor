import { CustomerData, CustomerListData } from "models/customer";

interface Props {
  data: CustomerListData;
  selected?: boolean;

  onClick: (customer: CustomerData) => void
}

const CustomerRow = (props: Props) => {
  const { data, selected, onClick } = props;
  const date = data.last_water ? new Date(data.last_water).toLocaleString() : "-";

  return (
    <tr onClick={() => onClick(data)} className={selected ? "selected" : ""}>
      <td>
        <span className="d-block badge badge-info">ID: {data.id}</span>
      </td>
      <td>{data.name}</td>
      <td>{date}</td>
    </tr>
  )
}
export default CustomerRow;

