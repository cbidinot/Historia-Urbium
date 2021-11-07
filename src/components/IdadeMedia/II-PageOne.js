import React from "react";
import { idadeMediaText } from "../../resources/texts";
import guerra from '../../resources/images/guerra100anos.jpg';
import peste from '../../resources/images/peste.png';

export const IIPageOne = props => {

    return (
        <>
        <h1 className='stageTitle'>II. Idade Média</h1>
        <section className='grid2x2'>
            <figure style={{gridArea: '1 / 1 / 2 / 2'}} className='stageFigure'>
                <img src={guerra} ></img>
                <figcaption>Guerra dos Cem Anos</figcaption>
            </figure>
            <figure style={{gridArea: '2 / 1 / 3 / 2'}} className='stageFigure'>
                <img src={peste} ></img>
                <figcaption>Traje médico na época da peste bubônica</figcaption>
            </figure>
            <p className='stageParagraph' style={{gridArea: '1 / 2 / 3 / 3'}}>{idadeMediaText.pageOne}</p>
        </section>
        </>
    );
};