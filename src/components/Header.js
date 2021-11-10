import React from "react";
import header from '../resources/vectors/header.svg'
import { SideNav } from "../containers/SideNav";
import { Link } from "react-router-dom";

export const Header = props => {

    return (

        <header className='header'>
            <SideNav/>
            <div className='spacer'></div>
            <div className='headerFlex'>
                <Link to='/home' className='topLogo'>
                    <img src={header}/>
                </Link>
            </div>
            
            
        </header>
    );
}