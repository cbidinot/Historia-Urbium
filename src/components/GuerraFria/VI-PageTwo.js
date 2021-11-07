import React from "react";
import { guerraFriaText } from "../../resources/texts";

export const VIPageTwo = props => {

    return (
        <>
            <h1 className='stageTitle'></h1>
            <section className='grid2x2'>
                <p className='stageParagraph' style={{gridArea: '2 / 1 / 3 / 3'}}>{guerraFriaText.pageTwo}</p>
            </section>
        </>
    );
};