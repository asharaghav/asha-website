import React, {useState} from "react";
import "./App.css";
import Menu from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';


function NavBar() {
    // Burger is displayed until the user does not click
    const [open, setOpen] = useState(false);

    return (
    <div>
        <nav>
            <div className="logo"></div>
                <ul className="nav-links" style={{transform: open ? "translateX(0px)" : ""}}>
                    <li><Link to="/"><a>Home</a></Link></li>
                    <li><Link to="/music"><a>Music</a></Link></li>
                    <li><Link to="/blog"><a>Blog</a></Link></li>
                    <li><Link to="/projects"><a>Projects</a></Link></li>
                    <li><Link to="/contact"><a>Contact</a></Link></li>

{/* 
                    <li><a>Blog</a></li>
                    <li><a>Projects</a></li>
                    <li><a>Contact</a></li> */}
                </ul>
            <Menu className="burger" onClick={() => setOpen(!open)}/>
        </nav>

    </div>);
}

export default NavBar;