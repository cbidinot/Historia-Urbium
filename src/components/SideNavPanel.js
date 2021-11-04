import React from "react";
import { LinkButton } from "./LinkButton";

export const SideNavPanel = props => {


    return (
        <nav className='sideNav' style={props.style}>
                <LinkButton exact to='/home' content='Home' />
            <h3 id='estagiosMarker'>Estágios</h3>
                <LinkButton to='/estagios/antigas-civilizacoes' content='I. Antigas Civilizações' />
                <LinkButton to='/estagios/idade-media' content='II. Idade Média' />
                <LinkButton to='/estagios/idade-moderna' content='III. Idade Moderna' />
                <LinkButton to='/estagios/revolucao-industrial' content='IV. Revolução Industrial' />
                <LinkButton to='/estagios/inicio-seculo-xx' content='V. Início do Século XX' />
                <LinkButton to='/estagios/guerra-fria' content='VI. Guerra Fria' />
                <LinkButton to='/estagios/atualidade' content='VII. Atualidade' />
            <h3>Extras</h3>
                <LinkButton to='/extras/glossario' content='Glossário' />
                <LinkButton to='/extras/mapa-mental' content='Mapa Mental' />
        </nav>
    ); 
};