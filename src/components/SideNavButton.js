import React from "react";
import hamburgermenu from '../resources/hamburger-menu.svg'

export const SideNavButton = props => {
    
    

    return <img src={hamburgermenu} className='sideNavButton' onClick={props.onClick} style={props.style} ></img>;
}