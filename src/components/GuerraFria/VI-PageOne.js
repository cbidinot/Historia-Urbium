import React from "react";
import { guerraFriaText } from "../../resources/texts";

export const VIPageOne = props => {

    return (
        <>
            <h1 className='stageTitle'>VI. Guerra Fria</h1>
            <section className='grid2x2'>
                <p className='stageParagraph leftStack'>{guerraFriaText.pageOne}</p>
            </section>
        </>
    );
};