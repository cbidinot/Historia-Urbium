import React, { useState, useEffect } from "react";
import { Route, useParams } from "react-router";
import { BottomNavigation } from "./BottomNavigation";

import { IIIPageOne } from "../components/IdadeModerna/III-PageOne";
import { IIPageTwo } from "../components/IdadeMedia/II-PageTwo";
import { IIIPageTwo } from "../components/IdadeModerna/III-PageTwo";

export const IdadeModerna = props => {

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
            <article className='idadeModerna'>
                <Route path='/estagios/idade-moderna/1'>
                    <IIIPageOne/>
                </Route>
                <Route path='/estagios/idade-moderna/2'>
                    <IIIPageTwo/>
                </Route>
            </article>

            <BottomNavigation lastPage={isLastPage} firstPage={isFirstPage} stageOrder={2}/>
        </>
    );
};