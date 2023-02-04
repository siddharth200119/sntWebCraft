import React from "react"
import Navbar from "./Navbar"
import "./Header.css"

function Header() {

    document.getElementsByTagName("body")[0].onresize = function() {
        const navItems = document.getElementsByClassName("navbar-item");
        if(window.innerWidth < 600){
            for(var i = 0; i < navItems.length; i++){
                navItems.item(i).style.display = "none"
            }
        }else{
            for(var i = 0; i < navItems.length; i++){
                navItems.item(i).style.display = "block"
            }
        }
    }

    return(
        <div className="header">
            <Navbar />
        </div>
    )
}

export default Header;