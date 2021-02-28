// import { API_URL } from "api";
import { setAuthToken } from "misc/authentication";
import { useState } from "react";
import img from './styles/groendak.jpg';

interface Props {
  onLogin: () => void;
}

const Login = ({ onLogin }: Props) => {

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
          onLogin();
          setAuthToken(response);
        });
      }
    })
  }

  return (
    <div>
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
      <img src={img} alt={"dak"} className="card-img-top" />
    </div>

  )
}

export default Login;