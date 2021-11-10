import React from "react";
import { atualidadeText } from "../../resources/texts";

export const VIIPageOne = props => {

    return (
        <>
            <h1 className='stageTitle'>VII. Atualidade</h1>
            <section className='grid2x2'>
                <p className='stageParagraph doubleTop' >{atualidadeText.pageOne}</p>
                <div id='divList2' className='pBottomRight'>
                    <ul className='stageList'>
                        <h3>Tigre Asiáticos:</h3>
                        {atualidadeText.tigres.map((value, index) => <li key={index + 1}>{value}</li>)}
                    </ul>
                    <ul className='stageList'>
                        <h3>Novos Tigres Asiáticos:</h3>
                        {atualidadeText.novosTigres.map((value, index) => <li key={index + 1} >{value}</li>)}
                    </ul>
                </div>
            </section>
        </>
    );
}