import React from "react";
import { idadeMediaText } from "../../resources/texts";
import guerra from '../../resources/images/guerra100anos.jpg';
import peste from '../../resources/images/peste.png';

export const IIPageOne = props => {

    return (
        <>
        <h1 className='stageTitle'>II. Idade Média</h1>
        <section className='grid2x2'>
            <figure  className='stageFigure iTopLeft'>
                <img src={guerra} ></img>
                <figcaption>Guerra dos Cem Anos</figcaption>
            </figure>
            <figure  className='stageFigure iBottomLeft'>
                <img src={peste} ></img>
                <figcaption>Traje médico na época da peste bubônica</figcaption>
            </figure>
            <p className='stageParagraph rightStack'>{idadeMediaText.pageOne}</p>
        </section>
        </>
    );
};