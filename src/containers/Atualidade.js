import React, { useState, useEffect } from "react";
import { Route, useParams } from "react-router";
import { BottomNavigation } from "./BottomNavigation";

import { VIIPageOne } from "../components/Atualidade/VII-PageOne";
import { VIIPageTwo } from "../components/Atualidade/VIII-PageTwo";

export const Atualidade = props => {

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
            <article className='atualidade'>
                <Route path='/estagios/atualidade/1'>
                    <VIIPageOne/>
                </Route>
                <Route path='/estagios/atualidade/2'>
                    <VIIPageTwo/>
                </Route>
            </article>
            <BottomNavigation lastPageEnd={isLastPage} firstPage={isFirstPage} stageOrder={6}/>
        </>
    );
}