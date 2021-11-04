import React from "react";
import { LinkButton } from "./LinkButton";


export const ErasNavBar = props => {

    return (
        <nav className='erasNavBar'>
            <LinkButton to='estagios/antigas-civilizacoes' content='I. Antigas Civilizações' ></LinkButton>
            <LinkButton to='estagios/idade-media' content='II. Idade Média' ></LinkButton>
            <LinkButton to='estagios/idade-moderna' content='III. Idade Moderna' ></LinkButton>
            <LinkButton to='estagios/revolucao-industrial' content='IV. Revolução Industrial' ></LinkButton>
            <LinkButton to='estagios/inicio-seculo-xx' content='V. Início do Século XX' ></LinkButton>
            <LinkButton to='estagios/guerra-fria' content='VI. Guerra Fria' ></LinkButton>
            <LinkButton to='estagios/atualidade' content='VII. Atualidade' ></LinkButton>
        </nav>
    );
};