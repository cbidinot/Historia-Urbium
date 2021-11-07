import React from "react";
import { LinkButton } from "./LinkButton";


export const ErasNavBar = props => {

    return (
        <nav className='erasNavBar'>
            <LinkButton to='estagios/antigas-civilizacoes/1' content='I. Antigas Civilizações' ></LinkButton>
            <LinkButton to='estagios/idade-media/1' content='II. Idade Média' ></LinkButton>
            <LinkButton to='estagios/idade-moderna/1' content='III. Idade Moderna' ></LinkButton>
            <LinkButton to='estagios/revolucao-industrial/1' content='IV. Revolução Industrial' ></LinkButton>
            <LinkButton to='estagios/inicio-seculo-xx/1' content='V. Início do Século XX' ></LinkButton>
            <LinkButton to='estagios/guerra-fria/1' content='VI. Guerra Fria' ></LinkButton>
            <LinkButton to='estagios/atualidade/1' content='VII. Atualidade' ></LinkButton>
        </nav>
    );
};