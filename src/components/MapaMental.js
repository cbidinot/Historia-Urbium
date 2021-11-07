import React from "react";
import mapa_mental from '../resources/vectors/mapa_mental.svg';
import { GoBack } from "./GoBack";

export const MapaMental = props => {

    return (
        <>
            <h1 className='stageTitle'>Mapa Mental</h1>
            <img className='mapaMental' src={mapa_mental} alt='Mapa mental'/>
            <GoBack/>
        </>
    );
};