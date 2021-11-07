import React from "react";
import { NavLink } from "react-router-dom";

export const LinkButton = props => {

    
    return (
        <NavLink to={props.to}>
            <span>{props.content}</span>
        </NavLink>
    );
}