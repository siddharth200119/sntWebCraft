import React from "react"
import "./home.css"
function Feature(props) {

    return(
        <div style={{backgroundImage: `url(${props.image})`}} className="feature">
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
        </div>
    )
}

export default Feature;