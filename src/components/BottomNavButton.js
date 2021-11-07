import React from "react";
import { Link, useParams, useRouteMatch } from "react-router-dom";
import leftArrow from "../resources/vectors/leftarrow.svg"

export const BottomNavButton = props => {

    const { path, url } = useRouteMatch();
    let { page } = useParams();

    let destination = path.replace(':page', "");
   let pageNumber = parseInt(page);
   
   if (props.toHome && props.direction == 'forwards') {
       return (
        <Link to={'/home'} >
            <img src={leftArrow} style={{transform: 'rotate(180deg)', float: 'right'}}/>
        </Link>
       );
   } else if (props.toHome && props.direction == 'backwards') {
        return (
            <Link to={'/home'} >
                <img src={leftArrow} style={{float: 'left'}}/>
            </Link>
        );}

    if (props.nextStage) {
       return (
        <Link to={`/estagios/${props.nextStage}/1`} >
            <img src={leftArrow} style={{transform: 'rotate(180deg)', float: 'right'}}/>
        </Link>
       );
   } else if (props.previousStage) {
        return (
            <Link to={`/estagios/${props.previousStage}/1`} >
                <img src={leftArrow} style={{float: 'left'}}/>
            </Link>
        );}
   
   if (props.direction == 'forwards') {
        return (
            <Link to={`${destination}${pageNumber + 1}`} >
                <img src={leftArrow} style={{transform: 'rotate(180deg)', float: 'right'}}/>
            </Link>
        );
    } else if (props.direction == 'backwards' ) {
        return (
            <Link to={`${destination}${pageNumber - 1}`}>
                <img src={leftArrow} style={{float: 'left'}} />
            </Link>
        );
    };
}