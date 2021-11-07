import React from "react";
import { antigasCivText } from "../../resources/texts";
import map from '../../resources/images/earlyciv.png';
import agricultura from '../../resources/images/agricultura.jpg'

export const IPageOne = props => {



    return (
        <>
        <h1 className='stageTitle'>I. Antigas Civilizações</h1>
        <section className='grid2x2'>
            <figure style={{gridArea: '1 / 1 / 2 / 2'}} className='stageFigure'>
                <img src={map} ></img>
                <figcaption>Berços da civilização</figcaption>
            </figure>
            <figure style={{gridArea: '1 / 2 / 2 / 3'}} className='stageFigure'>
                <img src={agricultura}></img>
                <figcaption>Registros de agricultura no Antigo Egito</figcaption>
            </figure>
            <p style={{gridArea: '2 / 1 / 3 / 3'}} className='stageParagraph'>{antigasCivText.pageOne}</p>
        </section>
        </>
    );
}