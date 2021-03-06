import React from 'react';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import './navbar.css';

export default function NavBar() {
    return (
        <div className="container-fluid my-nav">
            <div className="row">
                <div className="col">
                    <NavLink class="btn btn-sm btn-info" key={"1"} to={"/#id1"}>{"Mappa"}</NavLink>
                </div>
                <div className="col">
                    <NavLink class="btn btn-sm btn-info" key={"2"} to={"/#id2"}>{"Referente"}</NavLink>
                </div>
                <div className="col">
                    <NavLink class="btn btn-sm btn-info" key={"3"} to={"/#id3"}>{"Viaggio"}</NavLink>
                </div>
                <div className="col">
                    <NavLink class="btn btn-sm btn-info" key={"4"} to={"/#id4"}>{"Info"}</NavLink>
                </div>
            </div>
        </div>
    )
}