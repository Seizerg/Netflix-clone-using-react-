import { directive } from "@babel/types"
import React from "react"
import "./Navbar.css"
function Navbar(){
    return <navbar>
        <div class="left column">
            <img className="head-logo" src="https://assets.brand.microsites.netflix.io/assets/493f5bba-81a4-11e9-bf79-066b49664af6_cm_1440w.png?v=30" alt="Netflix"/>
            <ul className="menu">
                <li><a>Home</a></li>
                <li><a>TV Shows</a></li>
                <li><a>Movies</a></li>
                <li><a>New and Popular</a></li>
                <li><a>My list</a></li>
            
            </ul>
        </div>
        <div className="right column">
             <img className="logo" src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="Account"/>
        </div>
        </navbar>
}
export default Navbar;