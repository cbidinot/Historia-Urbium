import React from "react";
import { atualidadeText } from "../../resources/texts";

export const VIIPageOne = props => {

    return (
        <>
            <h1 className='stageTitle'>VII. Atualidade</h1>
            <section className='grid2x2'>
                <p className='stageParagraph' style={{gridArea: '1 / 1 / 2 / 3'}}>{atualidadeText.pageOne}</p>
                <div id='divList2'>
                    <ul className='stageList'>
                        <h3>Tigre Asiáticos:</h3>
                        {atualidadeText.tigres.map(value => <li>{value}</li>)}
                    </ul>
                    <ul className='stageList'>
                        <h3>Novos Tigres Asiáticos:</h3>
                        {atualidadeText.novosTigres.map(value => <li>{value}</li>)}
                    </ul>
                </div>
            </section>
        </>
    );
}