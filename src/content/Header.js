import logo from "./assets/Logo.svg"
import Nav from "./Nav"
import "./styles/Header.css"


const Header = () => {
  return (
    <div className="Header">
    <img src={logo} alt="logo" className="logo"></img>
    <Nav />
    </div>
  )
}

export default Header