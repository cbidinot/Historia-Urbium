import React from "react";
import header from '../resources/vectors/header.svg'
import { SideNav } from "../containers/SideNav";
import { Link } from "react-router-dom";

export const Header = props => {

    return (

        <header className='header'>
            <SideNav/>
            <Link to='/home' className='topLogo'>
                <img src={header}/>
            </Link>
       
        </header>
    );
}