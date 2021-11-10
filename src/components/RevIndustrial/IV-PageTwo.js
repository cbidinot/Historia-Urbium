import React from "react";
import { revIndustrialText } from "../../resources/texts";

export const IVPageTwo = props => {

    return (
        <>
            <h1 className='stageTitle'>Londres</h1>
            <section className='grid2x2'>
                <p className='stageParagraph doubleBottom' >{revIndustrialText.pageTwo}</p>
            </section>
        </>
    );
}