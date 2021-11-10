import React, { useState } from "react";
import { SideNavButton } from "../components/SideNavButton";
import { SideNavPanel } from "../components/SideNavPanel";

export const SideNav = props => {
    const [toggleNav, setToggleNav] = useState(false);

    const toggleNavPanel = () => {
        setToggleNav(!toggleNav);
    };

    const displayPanel = `sideNav ${toggleNav ? 'sideNavActive' : 'sideNavUnactive'}`;
    const rotateButton = `sideNavButton ${toggleNav ? 'sideNavButtonActive' : 'sideNavButtonUnactive'}`;

    return (
        <>
            <SideNavButton onClick={toggleNavPanel} style={rotateButton} />
            <SideNavPanel style={displayPanel}/>
        </>
    ); 
};