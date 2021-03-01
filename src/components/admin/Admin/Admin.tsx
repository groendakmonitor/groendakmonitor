import { clearAuthToken, getAuthHeader, getAuthToken } from "misc/authentication";
import { CustomerListData } from "models/customer";
import React, { useCallback, useEffect, useState } from "react";
import CustomerList from "../CustomerList";
import Login from "../Login";

interface Props {
  onClose: () => void;
}

const Admin = ({ onClose }: Props) => {
  const [authenticated, setAuthenticated] = useState(!!getAuthToken());
  const [data, setData] = useState<CustomerListData[]>();

  const handleLogout = () => {
    clearAuthToken();
    setAuthenticated(false);
    onClose();
  };

  useEffect(() => {
    if (authenticated && getAuthToken()) {
      fetch(`${process.env.REACT_APP_API_URL}/customers`, {
        method: 'get',
        headers: [['Content-Type', 'application/json'], getAuthHeader()],
      })
      .then<CustomerListData[]>((response) => {
        if(response.status === 401) {
          clearAuthToken();
          setAuthenticated(false);
        }
        return response.json()
      }).then((response) => {
        setData(response);
      })
    }
  }, [authenticated]);

  return (
    <div className="modal fade show d-block" role="dialog" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">Admin</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={onClose}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            { !authenticated && <Login onLogin={() => setAuthenticated(true)}/> }
            { authenticated && !data && <>Loading..</>}
            { authenticated && data && <CustomerList data={data} onLogout={handleLogout} /> }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Admin;