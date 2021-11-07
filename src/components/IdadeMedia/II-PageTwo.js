import React from "react";
import { idadeMediaText } from "../../resources/texts";
import rialto from '../../resources/images/rialto.jpg'

export const IIPageTwo = props => {

    return (
        <>
        <h1 className='stageTitle'>Veneza</h1>
        <section className='grid2x2'>
            <figure style={{gridArea: '1 / 1 / 2 / 2'}} className='stageFigure'>
                <img src={rialto} ></img>
                <figcaption>Cidade de Veneza atualmente</figcaption>
            </figure>
            <figure style={{gridArea: '1 / 2 / 2 / 3'}} className='stageFigure'>
                <img src='https://i.pinimg.com/originals/4a/f6/4f/4af64f37243cdd341265456c99737d67.png' ></img>
                <figcaption>Bandeira de Veneza</figcaption>
            </figure>
            <p className='stageParagraph' style={{gridArea: '2 / 1 / 3 / 3'}}>{idadeMediaText.pageTwo}</p>
        </section>
        </>
    );
};