import React from "react";

function NavBtn(){

    function handleClick(){
        const navItems = document.getElementsByClassName("navbar-item");
        if(navItems.item(0).style.display === "none"){
            for(var i = 0; i < navItems.length; i++){
                navItems.item(i).style.display = "block"
            }
        }else{
            for(var i = 0; i < navItems.length; i++){
                navItems.item(i).style.display = "none"
            }
        }
        console.log(navItems)
    }

    return(
    <div className="NavBtn">
        <button onClick={handleClick}></button>
    </div>
    )
}

export default NavBtn;