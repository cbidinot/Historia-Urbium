import React from "react";
import { ErasNavBar } from "./ErasNavBar";
import { introText } from "../resources/texts";

export const Home = props => {

    return (
        <div className='homeMain'>
            <h1>Historia Urbium</h1> 
            <p>{introText}</p>
            <h2>Para começar, clique em um estágio:</h2>
            <ErasNavBar/>
        </div>
    );
}