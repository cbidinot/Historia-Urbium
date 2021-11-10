import React, { useState, useEffect } from "react";
import { Redirect, Route, useParams } from "react-router";
import { IPageOne } from "../components/AntigasCiv/I-PageOne";
import { IPageTwo } from "../components/AntigasCiv/I-PageTwo";
import { BottomNavigation } from "./BottomNavigation";

export const AntigasCiv = props => {

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
        <article className='antigasCiv'>

            <Route path='/estagios/antigas-civilizacoes/1'>
                <IPageOne/>
            </Route>
            <Route path='/estagios/antigas-civilizacoes/2'>
                <IPageTwo/>
            </Route>
        </article>
        <BottomNavigation lastPage={isLastPage} firstPageStart={isFirstPage} stageOrder={0}/>
        </>
    );
};