import React, { useState, useEffect } from "react";
import { Route, useParams } from "react-router";
import { BottomNavigation } from "./BottomNavigation";

import { IVPageOne } from "../components/RevIndustrial/IV-PageOne";
import { IVPageTwo } from "../components/RevIndustrial/IV-PageTwo";

export const RevIndustrial = props => {

    const [ isLastPage, setIsLastPage ] = useState(false);
    const [ isFirstPage, setIsFirstPage ] = useState(true);
    let { page } = useParams();

    useEffect(() => {
        if (page == 1) {
            setIsFirstPage(true);
        } else {setIsFirstPage(false);};
        if (page == 2) {
            setIsLastPage(true);
        } else { setIsLastPage(false);};
    }, [page]);

    return (
        <>
            <article className='revIndustrial'>
                <Route path='/estagios/revolucao-industrial/1'>
                    <IVPageOne/>
                </Route>
                <Route path='/estagios/revolucao-industrial/2'>
                    <IVPageTwo/>
                </Route>
            </article>
            <BottomNavigation lastPage={isLastPage} firstPage={isFirstPage} stageOrder={3}/>
        </>
    );
}