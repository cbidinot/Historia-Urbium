import React from "react";
import { antigasCivText } from "../../resources/texts";
import coliseu from '../../resources/images/coliseu.jpg';

export const IPageTwo = props => {

    return (
        <>
            <h1 className='stageTitle' >Roma</h1>
            <section className='grid2x2'>
                <p className='stageParagraph leftStack'>{antigasCivText.pageTwo}</p>
                <figure className='stageFigure iRightStack'>
                    <img src={coliseu}></img>
                    <figcaption>O Coliseu, famoso monumento romano</figcaption>
                </figure>
            </section>
        </>
    );
};