import React from "react";
import { LinkButton } from "./LinkButton";

export const SideNavPanel = props => {


    return (
        <nav className='sideNav' className={props.style}>
                <LinkButton exact to='/home' content='Home' />
            <h3 id='estagiosMarker'>Estágios</h3>
                <LinkButton to='/estagios/antigas-civilizacoes/1' content='I. Antigas Civilizações' />
                <LinkButton to='/estagios/idade-media/1' content='II. Idade Média' />
                <LinkButton to='/estagios/idade-moderna/1' content='III. Idade Moderna' />
                <LinkButton to='/estagios/revolucao-industrial/1' content='IV. Revolução Industrial' />
                <LinkButton to='/estagios/inicio-seculo-xx/1' content='V. Início do Século XX' />
                <LinkButton to='/estagios/guerra-fria/1' content='VI. Guerra Fria' />
                <LinkButton to='/estagios/atualidade/1' content='VII. Atualidade' />
            <h3>Extras</h3>
                <LinkButton to='/extras/glossario' content='Glossário' />
                <LinkButton to='/extras/mapa-mental' content='Mapa Mental' />
        </nav>
    ); 
};