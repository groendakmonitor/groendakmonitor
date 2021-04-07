import { CustomerListData } from "models/customer";
import React from "react";
import { useCustomerStore } from "store/customer";
import CustomerRow from "./CustomerRow";
import './styles/customerList.scss';

interface Props {
  data: CustomerListData[];
  onLogout: () => void;
}

const CustomerList = (props: Props) => {
  const { data, onLogout } = props;
  const fetchCustomerData = useCustomerStore((data) => data.fetchCustomerData);
  const customerId = useCustomerStore((data) => data.customerId);

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
            <CustomerRow key={c.id} data={c} onClick={() => fetchCustomerData(c.id)} selected={customerId === c.id}/>
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
