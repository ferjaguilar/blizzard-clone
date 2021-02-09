import { useState } from "react"

const Navbar = () => {

  const [isActive, setisActive] = useState(false);

  const activeNavbar = ():void => {
    setisActive(!isActive);
    console.log(isActive);
  }

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <a href="https://www.blizzard.com/en-us/" className="navbar-item">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Blizzard_Entertainment_Logo.svg" 
            alt="Navbar brand"
          />
        </a>

        <div
          onClick={ () => activeNavbar() }
          role="button" 
          className={`navbar-burger ${isActive ? 'is-active': ''}`} 
          aria-label="menu" 
          aria-expanded="false" 
          data-target="navbarPrincipal"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </div>
      </div>

      <div id="navbarPrincipal" className={`navbar-menu ${isActive ? 'is-active' : ''}`}>
        <div className="navbar-start">
          <a href="https://www.blizzard.com/en-us/" className="navbar-item">GAMES</a>
          <a href="https://www.blizzard.com/en-us/" className="navbar-item">SHOP</a>
          <a href="https://www.blizzard.com/en-us/" className="navbar-item">NEWS</a>
          <a href="https://www.blizzard.com/en-us/" className="navbar-item">ESPORTS</a>
        </div>

        <div className="navbar-end">
        <a href="https://www.blizzard.com/en-us/" className="navbar-item">Support</a>
        <a href="https://www.blizzard.com/en-us/" className="navbar-item">My Account</a>
        </div>
      </div>
    </nav>
  )
}
export default Navbar