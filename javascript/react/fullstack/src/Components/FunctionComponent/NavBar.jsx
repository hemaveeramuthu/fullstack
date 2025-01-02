// eslint-disable-next-line no-unused-vars
import React from "react";
import{Link} from 'react-router-dom';
var NavBar=()=>{

    return(
        <header>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                   <li> <Link to="/about">About</Link></li>
                   <li> <Link to="/contact">Contact</Link></li>
                   <li> <Link to="/gallery">Gallery</Link></li>
                   <li> <Link to="/useeffect">useEffect</Link></li>
                   <li><Link to="/useref">useRef</Link></li>
                   <li><Link to="/usecontext">useContext</Link></li>
                   <li><Link to="/footer">footerform</Link></li>
                   <li><Link to="/usememo">useMemo</Link></li>
                </ul>
            </nav>
        </header>
    )
}
export default NavBar;
