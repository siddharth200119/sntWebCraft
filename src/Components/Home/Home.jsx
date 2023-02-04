import React from "react"
import "./home.css"
import Feature from "./Feature";
import Features from "./Features"
function Home() {

    return(
        <div className="home">
            <div className="title">
                <h1>SPACE-Y</h1>
                <h2>Expolring where it all started</h2>
            </div>
            <div className="features">
            {Features.map(function(feature){
                    return(
                            <Feature title={feature.title} subtitle={feature.subtitle} image={feature.image}></Feature>
                        )
                })}
            </div>
        </div>
    )
}

export default Home;