import React from "react";
import { antigasCivText } from "../../resources/texts";
import coliseu from '../../resources/images/coliseu.jpg';

export const IPageTwo = props => {

    return (
        <>
            <h1 className='stageTitle' >Roma</h1>
            <section className='grid2x2'>
                <p className='stageParagraph' style={{gridArea: '1 / 1 / 3 / 2'}} >{antigasCivText.pageTwo}</p>
                <figure style={{gridArea: '1 / 2 / 3 / 3'}} className='stageFigure'>
                    <img src={coliseu}></img>
                    <figcaption>O Coliseu, famoso monumento romano</figcaption>
                </figure>
            </section>
        </>
    );
};