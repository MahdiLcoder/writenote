import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png"
export default function Header() {
  return (
    <header>
      <Link to="/" className="logo">
        <img src={logo} alt="logo" />
        <span>WriteNote</span>
      </Link>
      <nav className="nav">
        <NavLink to="/" className="link" end>Home</NavLink>
        {/* <NavLink to="/create" className="link">Create</NavLink> */}
        <button className="auth"><i className="bi bi-google"></i> Login</button>
        {/* <button className="auth"><i className="bi bi-box-arrow-right"></i> Logout</button> */}
      </nav>
    </header>
  )
}
