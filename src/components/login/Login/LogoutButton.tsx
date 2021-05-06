import { useCustomerStore } from "store/customer";
import './styles/logout.scss'

const LogoutButton = () => {
  const handleLogout = useCustomerStore((data) => data.clear);

  return (
    <button className="btn logout" onClick={handleLogout}>×</button>
  )
}

export default LogoutButton