import React from "react";
import { idadeMediaText } from "../../resources/texts";
import rialto from '../../resources/images/rialto.jpg'

export const IIPageTwo = props => {

    return (
        <>
        <h1 className='stageTitle'>Veneza</h1>
        <section className='grid2x2'>
            <figure className='stageFigure iTopLeft'>
                <img src={rialto} ></img>
                <figcaption>Cidade de Veneza atualmente</figcaption>
            </figure>
            <figure className='stageFigure iTopRight'>
                <img src='https://i.pinimg.com/originals/4a/f6/4f/4af64f37243cdd341265456c99737d67.png' ></img>
                <figcaption>Bandeira de Veneza</figcaption>
            </figure>
            <p className='stageParagraph doubleBottom'>{idadeMediaText.pageTwo}</p>
        </section>
        </>
    );
};