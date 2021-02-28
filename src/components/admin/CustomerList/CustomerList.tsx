import { CustomerListData } from "models/customer";
import React from "react";
import { useWaterStore } from "store/store";
import CustomerRow from "./CustomerRow";
import './styles/customerList.scss';

interface Props {
  data: CustomerListData[];
  onLogout: () => void;
}

const CustomerList = (props: Props) => {
  const { data, onLogout } = props;
  const setCustomerId = useWaterStore((data) => data.setCustomerId);
  const customerId = useWaterStore((data) => data.customerId);

  return (
    <>
      <table className="table table-striped table-hover customer-list">
        <thead>
          <tr>
            <th scope="col" style={{width: 32}}>#</th>
            <th scope="col">Name</th>
            <th scope="col">Last data</th>
          </tr>
        </thead>
        <tbody>
          {data.map((c) => 
            <CustomerRow key={c.id} data={c} onClick={() => setCustomerId(c.id)} selected={customerId === c.id}/>
          )}
        </tbody>  
      </table>
      <div className="form-group">
        <button className="w-100 btn btn-success" onClick={onLogout} >
          Logout
        </button>
      </div>
    </>
  )
}
export default CustomerList;
