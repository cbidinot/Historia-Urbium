import React, { useState, useEffect } from "react";
import { Route, useParams } from "react-router";
import { BottomNavigation } from "./BottomNavigation";

import { VIPageOne } from "../components/GuerraFria/VI-PageOne";
import { VIPageTwo } from "../components/GuerraFria/VI-PageTwo";

export const GuerraFria = props => {

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
            <article className='guerraFria'>
                <Route path='/estagios/guerra-fria/1'>
                    <VIPageOne/>
                </Route>
                <Route path='/estagios/guerra-fria/2'>
                    <VIPageTwo/>
                </Route>
            </article>
            <BottomNavigation lastPage={isLastPage} firstPage={isFirstPage} stageOrder={5}/>
        </>
    );
}