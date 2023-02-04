import React from "react"
import NavbarItems from "./NavbarItems"
import NavbarItem from "./NavbarItem"
import NavBtn from "./NavBtn"

function Navbar(){
    return(
        <div className="navbar">
            <div className="nav-section">
            <NavBtn />
            <div className = "navItems">
                {NavbarItems.map(function(item){
                    return(
                            <NavbarItem key={item.key} name={item.name} type={item.type} url={item.url} dropdownItems={item.dropdownItems}/>
                        )
                })}
            </div>
            </div>
        </div>
    )
}

export default Navbar