import React from "react";
import { idadeModernaText } from "../../resources/texts";


export const IIIPageOne = props => {

    return (
        <>
        <h1 className='stageTitle'>III. Idade Moderna</h1>
        <section className='grid2x2'>

            <div className='groupDiv'>
                <p className='stageParagraph' style={{border:'0', boxShadow: 'none', background: '0'}}>{idadeModernaText.pageOne}</p>
                <ul className='stageList'>
                    {idadeModernaText.listPoints.map((value, index) => {
                        const content = idadeModernaText.listContent[index];
                        return (
                            <>
                                <h3>{value}</h3>
                                <li key={index + 1}>{content}</li>
                            </>
                        );
                    })}
                </ul>
            </div>
            
            <p className='stageParagraph' style={{gridArea: '2 / 1 / 3 / 2'}}>{idadeModernaText.pageOne2}</p>
        </section>
        </>
    );
}