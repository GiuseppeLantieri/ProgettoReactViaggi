import React, { useContext } from 'react';
import './header.css';
import MyContext from '../../MyContext';
import { NavHashLink as NavLink } from 'react-router-hash-link';

function Header() {
    const contesto = useContext(MyContext);
    return (
        <header className="cover" style={{ backgroundImage: `url(${contesto.image})` }}>
            <div className="cover-filter"></div>
            
                <div className="cover-copy-section">
                    <div className="cover-copy">

                        <h1>Per {contesto.nomeCliente}</h1>
                        <h2 className="my-3">{contesto.titolo}</h2>
                        <NavLink className="btn btn-primary rounded-0 cover-button px-3 mt-3" key={"3"} to={"/#id3"}>SCOPRI DI PIÙ</NavLink>

                    </div>
                </div>
            

        </header>
    )
}

export default Header

