import React from "react";
import { useHistory, Link } from "react-router-dom";
import leftArrow from "../resources/vectors/leftarrow.svg"

export const GoBack = props => {

    const history = useHistory();

    return(
        <nav className='bottomNavigation'>

            <div>
                <img src={leftArrow} style={{float: 'right', cursor: 'pointer'}} onClick={history.goBack}/>
                <h3>Página anterior</h3>
            </div>
        
            <div>
                <h3>Página principal</h3>
                <Link to='' >
                    <img src={leftArrow} style={{transform: 'rotate(180deg)', float: 'left',}}/>
                </Link>
            </div>
        
        </nav>
    );
}