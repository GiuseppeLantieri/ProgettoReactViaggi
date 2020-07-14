import React from 'react';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import './navbar.css';

export default function NavBar() {
    return (
        <div className="container-fluid my-nav p-1">
            <div className="row">
                <div className="col-3 text-center">
                    <NavLink class="btn btn-sm btn-info w-100" key={"1"} to={"/#id1"}>{"LINK1"}</NavLink>
                </div>
                <div className="col-3 text-center">
                    <NavLink class="btn btn-sm btn-info w-100" key={"2"} to={"/#id2"}>{"LINK2"}</NavLink>
                </div>
                <div className="col-3 text-center">
                    <NavLink class="btn btn-sm btn-info w-100" key={"3"} to={"/#id3"}>{"LINK3"}</NavLink>
                </div>
                <div className="col-3 text-center">
                    <NavLink class="btn btn-sm btn-info w-100" key={"4"} to={"/#id4"}>{"LINK4"}</NavLink>
                </div>
            </div>
        </div>
    )
}