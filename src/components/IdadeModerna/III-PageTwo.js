import React from "react";
import { idadeModernaText } from "../../resources/texts";

export const IIIPageTwo = props => {

    return (
        <>
            <h1 className='stageTitle'>Lisboa</h1>
            <section className='grid2x2'>
                <p className='stageParagraph' style={{gridArea: '1 / 2 / 3 / 3'}}>{idadeModernaText.pageTwo}</p>
            </section>
        </>
    );
};