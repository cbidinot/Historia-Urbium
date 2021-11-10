import React from "react";
import { guerraFriaText } from "../../resources/texts";

export const VIPageTwo = props => {

    return (
        <>
            <h1 className='stageTitle'>Berlim</h1>
            <section className='grid2x2'>
                <p className='stageParagraph doubleBottom' >{guerraFriaText.pageTwo}</p>
            </section>
        </>
    );
};