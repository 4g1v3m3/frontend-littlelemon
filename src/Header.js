import logo from "./assets/Logo.svg"
import './App.css';
import Nav from "./content/Nav"


const Header = () => {
  return (
    <div className="Header">
    <img src={logo}></img>
    <Nav />
    </div>
  )
}

export default Header