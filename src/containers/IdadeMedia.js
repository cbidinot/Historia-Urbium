import React, { useState, useEffect } from "react";
import { Route, useParams } from "react-router";
import { BottomNavButton } from "../components/BottomNavButton";
import { IIPageOne } from '../components/IdadeMedia/II-PageOne';
import { IIPageTwo } from "../components/IdadeMedia/II-PageTwo";
import { BottomNavigation } from "./BottomNavigation";


export const IdadeMedia = props => {

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
            <article className='idadeMedia'>

                <Route path='/estagios/idade-media/1'>
                    <IIPageOne/>
                </Route>
                <Route path='/estagios/idade-media/2' >
                    <IIPageTwo/>
                </Route>

            </article>
            <BottomNavigation lastPage={isLastPage} firstPage={isFirstPage} stageOrder={1}/>
        </>
    );
};