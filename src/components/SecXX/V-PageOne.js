import React from "react";
import { secXXText } from "../../resources/texts";

export const VPageOne = props => {

    return (
        <>
            <h1 className='stageTitle'>V. Início do Século XX</h1>
            <section className='grid2x2'>
                <p className='stageParagraph leftStack' >{secXXText.pageOne}</p>
            </section>
        </>
    );
};