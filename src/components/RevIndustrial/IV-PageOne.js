import React from "react";
import { revIndustrialText } from "../../resources/texts";

export const IVPageOne = props => {

    return (
        <>
            <h1 className='stageTitle'>IV. Revolução Industrial</h1>
            <section className='grid2x2'> 
                <p className='stageParagraph pTopLeft'>{revIndustrialText.pageOne1}</p>
                <p className='stageParagraph pBottomRight'>{revIndustrialText.pageOne2}</p>
            </section>
        </>
    );
};