import React from "react";
import { revIndustrialText } from "../../resources/texts";

export const IVPageOne = props => {

    return (
        <>
            <h1 className='stageTitle'>IV. Revolução Industrial</h1>
            <section className='grid2x2'> 
                <p className='stageParagraph' style={{gridArea: '1 / 1 / 2 / 2'}}>{revIndustrialText.pageOne1}</p>
                <p className='stageParagraph' style={{gridArea: '2 / 2 / 3 / 3'}}>{revIndustrialText.pageOne2}</p>
            </section>
        </>
    );
};