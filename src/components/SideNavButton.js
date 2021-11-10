import React from "react";
import hamburgermenu from '../resources/vectors/hamburger-menu.svg'

export const SideNavButton = props => {
    

    return <img src={hamburgermenu} className='sideNavButton' onClick={props.onClick} className={props.style} ></img>;
}