import React from "react";
import { antigasCivText } from "../../resources/texts";
import map from '../../resources/images/earlyciv.png';
import agricultura from '../../resources/images/agricultura.jpg'

export const IPageOne = props => {



    return (
        <>
        <h1 className='stageTitle'>I. Antigas Civilizações</h1>
        <section className='grid2x2'>
            <figure className='stageFigure iTopLeft'>
                <img src={map} ></img>
                <figcaption>Berços da civilização</figcaption>
            </figure>
            <figure className='stageFigure iTopRight'>
                <img src={agricultura}></img>
                <figcaption>Registros de agricultura no Antigo Egito</figcaption>
            </figure>
            <p className='stageParagraph doubleBottom'>{antigasCivText.pageOne}</p>
        </section>
        </>
    );
}