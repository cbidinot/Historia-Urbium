import React from "react";
import { atualidadeText } from "../../resources/texts";

export const VIIPageTwo = props => {

    return (
        <>
            <h1 className='stageTitle'>Taipé</h1>
            <section className='grid2x2'>
                <p className='stageParagraph leftStack'>{atualidadeText.pageTwo}</p>

            </section>
        </>
    );
};