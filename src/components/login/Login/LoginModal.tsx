
import { setAuthToken } from "misc/authentication";
import { useState } from "react";
import { useCustomerStore } from "store/customer";
import img from './styles/groendak.jpg';
import './styles/login-modal.scss'


const Login = () => {

  const [name, setName] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [error, setError] = useState<string>()
  const fetchCustomerData = useCustomerStore((data) => data.fetchCustomerData);

  const handleLogin = () => {
    setError(undefined);

    fetch(`${process.env.REACT_APP__API_URL}/get-user-id`, {
      method: 'post',
      headers: [['Content-Type', 'application/json']],
      body: JSON.stringify({
        name,
        password
      })
    }).then((response) => response.json())
      .then((response) => {
      if(response.success === false) {
        setError(response.message)
      } else {
        fetchCustomerData(response.id)
        setAuthToken(response.token);
    }});
  }

  return (
    <div className="modal fade show d-block login-modal" role="dialog" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Login</h5>
          </div>
          <div className="modal-body">
            <form>
              <div className="mt-5">
                <div className="form-group">
                  <label className="form-label text-start w-100">
                    Name
                    <input type="text" className="form-control mt-2" onChange={(e) => {setName(e.currentTarget.value)}} value={name} />              
                  </label>
                </div>
                <div className="form-group">
                  <label className="form-label text-start w-100">
                    Password
                    <input type="password" className="form-control mt-2" onChange={(e) => {setPassword(e.currentTarget.value)}} value={password} />              
                  </label>
                </div>
              </div>
            </form>
            { error && (
              <div className="form-group">
                <div className="alert alert-danger">
                  {error}
                </div>
              </div>

            )}
            <div className="form-group">
              <button className="w-100 btn btn-login" onClick={handleLogin} >
                Login
              </button>
            </div>
            <img src={img} alt={"dak"} className="card-img-top" />
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default Login;