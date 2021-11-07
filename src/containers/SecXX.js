import React, { useState, useEffect } from "react";
import { Route, useParams } from "react-router";
import { BottomNavigation } from "./BottomNavigation";

import { VPageOne } from "../components/SecXX/V-PageOne";
import { VPageTwo } from "../components/SecXX/V-PageTwo";

export const SecXX = props => {

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
            <article className='secXX'>
                <Route path='/estagios/inicio-seculo-xx/1'>
                    <VPageOne/>
                </Route>
                <Route path='/estagios/inicio-seculo-xx/2'>
                    <VPageTwo/>
                </Route>
            </article>
            <BottomNavigation lastPage={isLastPage} firstPage={isFirstPage} stageOrder={4}/>
        </>
    );
};