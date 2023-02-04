import React from "react";

function NavbarItem(props){
        return(
            <div className="navbar-item">
                <span><a className="navbarItem" href={props.url}>{props.name}</a></span>
            </div>
        )
    
}

export default NavbarItem;