import React from "react";
import { atualidadeText } from "../../resources/texts";

export const VIIPageTwo = props => {

    return (
        <>
            <h1 className='stageTitle'>Taipé</h1>
            <section className='grid2x2'>
                <p className='stageParagraph' style={{gridArea: '1 / 1 / 3 / 2'}}>{atualidadeText.pageTwo}</p>

            </section>
        </>
    );
};