import React from "react";
import { secXXText } from "../../resources/texts";

export const VPageTwo = props => {

    return (
        <>
            <h1 className='stageTitle'>Nova Iorque</h1>
            <section className='grid2x2'>
                <p className='stageParagraph' style={{gridArea: '1 / 2 / 3 / 3'}}>{secXXText.pageTwo}</p>
            </section>
        </>
    );
};