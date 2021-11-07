import React from "react";
import { secXXText } from "../../resources/texts";

export const VPageOne = props => {

    return (
        <>
            <h1 className='stageTitle'>V. Início do Século XX</h1>
            <section className='grid2x2'>
                <p className='stageParagraph' style={{gridArea: '1 / 1 / 3 / 2'}}>{secXXText.pageOne}</p>
            </section>
        </>
    );
};