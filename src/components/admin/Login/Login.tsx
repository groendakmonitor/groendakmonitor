// import { API_URL } from "api";
import { setAuthToken } from "authentication";
import { useState } from "react";
import img from './styles/groendak.jpg';

const Login = () => {

  const [password, setPassword] = useState<string>("safehouse ominous overdrive")

  const handleLogin = () => {
    fetch(`${process.env.REACT_APP_API_URL}/login`, {
      method: 'post',
      headers: [['Content-Type', 'application/json']],
      body: JSON.stringify({
        password
      })
    }).then((response) => {
      if(response.status === 401) {
        console.warn("WRONG PW")
      } else {
        response.text().then((response) => {
          setAuthToken(response);

        });
      }
    })
  }

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="col col-md-4 user-form py-4 d-flex flex-column">
        <div className="card">
          <img src={img} className="card-img-top" />
          <div className="card-body">
            <h3 className="text-center">Log in to groendakmonitor</h3>
            <form>
              <div className="mt-5">
                <div className="form-group">
                  <label className="form-label text-start w-100">
                    Password
                    <input type="password" className="form-control mt-2" onChange={(e) => {setPassword(e.currentTarget.value)}} value={password} />              
                  </label>
                </div>
              </div>
            </form>
            <div className="form-group">
              <button className="w-100 btn btn-success" onClick={handleLogin} >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>  
    </div>
  )
}

export default Login;