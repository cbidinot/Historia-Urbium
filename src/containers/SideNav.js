import React, { useState } from "react";
import { SideNavButton } from "../components/SideNavButton";
import { SideNavPanel } from "../components/SideNavPanel";

export const SideNav = props => {
    const [toggleNav, setToggleNav] = useState(false);

    const toggleNavPanel = () => {
        setToggleNav(!toggleNav);
    };

    const displayPanel = {visibility: toggleNav ? 'visible' : 'hidden', left: toggleNav ? '0' : '-40vh' };
    const rotateButton = {transform: toggleNav ? 'rotate(0.25turn)' : 'rotate(0)'};

    return (
        <>
            <SideNavButton onClick={toggleNavPanel} style={rotateButton} />
            <SideNavPanel style={displayPanel}/>
        </>
    ); 
};