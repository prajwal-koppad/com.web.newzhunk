import "./NavBar.css";
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
      <nav className="navbar" >
            <div className="navbar-container">
                <Link className="navbar-brand" to="/">Zenora</Link>
                <div className="navbar-menu">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="" to="/business">Business</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="" to="/entertainment">Entertainment</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="" to="/health">Health</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="" to="/science">Science</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="" to="/sports">Sports</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="" to="/technology">Technology</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </>
  );
};

export default NavBar;
