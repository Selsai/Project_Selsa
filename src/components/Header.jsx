import logo from "/src/assets/man-3262834_960_720.webp";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <img src={logo} alt="Logo" className="logo" />
        <nav>
          <ul className="nav-list">
            <li>
              <a href="/">Accueil</a> 
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
