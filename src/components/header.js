import {Link}  from "react-router-dom";
import Cart from "./cart";
function header(){
    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-info">
                <div className="container">
                    <label className="navbar-brand">
                        Webeducatorz
                    </label>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/" className="nav-link"> Home </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-link"> About </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact" className="nav-link"> Contact </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/" className="nav-link">  
                                <Cart />
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}
export default header;