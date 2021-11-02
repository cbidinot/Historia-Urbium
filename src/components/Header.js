import { render } from "@testing-library/react";
import React from "react";
import header from '../resources/header.svg'
import { SideNav } from "../containers/SideNav";

export const Header = props => {

    return (

        <header className='header'>
            <SideNav/>
            <img src={header} className='topLogo'/>
       
        </header>
    );
}