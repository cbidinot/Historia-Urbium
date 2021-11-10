import React from "react";
import { secXXText } from "../../resources/texts";

export const VPageTwo = props => {

    return (
        <>
            <h1 className='stageTitle'>Nova Iorque</h1>
            <section className='grid2x2'>
                <p className='stageParagraph rightStack'>{secXXText.pageTwo}</p>
            </section>
        </>
    );
};