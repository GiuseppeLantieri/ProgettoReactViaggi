import React from 'react';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import './navbar.css';

export default function NavBar({navlinks}) {
    return (
        <div className="container-fluid my-nav">
            <div className="row w-100 justify-content-center">
                {navlinks.map(link=>{
                    return(
                        <div className="col-3 text-center">
                            <NavLink class="btn btn-sm btn-info w-100" key={"1"} to={"/#id1"}>MAPPA</NavLink>
                        </div>
                    )
                })
                }
                {/* 
                <div className="col-3 text-center">
                    <NavLink class="btn btn-sm btn-info w-100" key={"1"} to={"/#id1"}>MAPPA</NavLink>
                </div>
                <div className="col-3 text-center">
                    <NavLink class="btn btn-sm btn-info w-100" key={"2"} to={"/#id2"}>REFERENTE</NavLink>
                </div>
                <div className="col-3 text-center">
                    <NavLink class="btn btn-sm btn-info w-100" key={"3"} to={"/#id3"}>VIAGGIO</NavLink>
                </div>
                <div className="col-3 text-center">
                    <NavLink class="btn btn-sm btn-info w-100" key={"4"} to={"/#id4"}>INFO</NavLink>
                </div>
                */}
            </div>
        </div>
    )
}