import React from 'react';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import './navbar.css';

export default function NavBar({ navlinks }) {
    return (
        <nav className="navbar sticky-top navbar-expand navbar-light my-nav">
            <div className="navbar-brand" to="#">Navbar</div>
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav mr-auto">
                    
                    {navlinks.map((link, i) => {
                        return (
                            <li key={i} className="nav-item">
                                <NavLink className="nav-link" key={i + 1} 
                                to={"/#" + link.id}><span className="tiny-text">{link.nome}</span></NavLink>
                            </li>
                        )
                    })}
                </ul>
                <button className="btn btn-sm btn-outline-danger my-2 my-sm-0">Logout</button>
            </div>
        </nav>
    )
}