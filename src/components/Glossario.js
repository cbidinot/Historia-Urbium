import React from "react";
import { glossario } from "../resources/texts";
import { GoBack } from "./GoBack";

export const Glossario = props => {

    return (
        <>
            <h1 className='stageTitle'>Glossário</h1>
            <ul className='glossario'>
                {glossario.keys.map((value, index) => {
                    const content = glossario.content[index];
                    return (
                        <div>
                            <h3>{value}</h3>
                            <li>{content}</li>
                        </div>
                    );
                })}
            </ul>
            <GoBack/>
        </>
    );
}