import { getNodeText } from "@testing-library/dom";
import React from "react";
import { BottomNavButton } from "../components/BottomNavButton";


export const BottomNavigation = props => {
    
    let nextStage = props.stageOrder + 1;
    let previousStage = props.stageOrder - 1;
    const stages = ['antigas-civilizacoes', 'idade-media', 'idade-moderna', 'revolucao-industrial', 'inicio-seculo-xx', 'guerra-fria', 'atualidade'];






    if (props.firstPageStart) {
        return (
            <nav className='bottomNavigation'>
                <div>
                    <BottomNavButton direction='backwards' toHome/>
                    <h3>Retornar a página principal</h3>
                </div>
                <BottomNavButton direction='forwards'/>
            </nav>
        );} else if (props.firstPage) {
            return (
                <nav className='bottomNavigation'>
                    <div>
                    <BottomNavButton direction='backwards' previousStage={stages[previousStage]} />
                    <h3>Estágio anterior</h3>
                    </div>
                    <BottomNavButton direction='forwards'/>
                </nav>
        );} else if (props.lastPage) {
            return (
                <nav className='bottomNavigation'>
                    <BottomNavButton direction='backwards'/>
                    <div>
                        <h3>Próximo estágio</h3>
                        <BottomNavButton direction='forwards' nextStage={stages[nextStage]} />
                    </div>
                </nav>
        );} else if (props.lastPageEnd) {
            return (
                <nav className='bottomNavigation'>
                    <BottomNavButton direction='backwards'/>
                    <div>
                        <h3>Retornar a página principal</h3>
                        <BottomNavButton direction='forwards' toHome/>
                    </div>
                </nav>
        );} else {
            return (
                <nav className='bottomNavigation'>
                    <BottomNavButton direction='backwards'/>
                    <BottomNavButton direction='forwards'/>
                </nav>
            );}
};