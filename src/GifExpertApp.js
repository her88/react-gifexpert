import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Dragon Ball']);

    /*const handleAdd = () => {
        // setCategories([ ...categories, 'Power Rangers']);
        setCategories( cats => [ 'ALALA', ...cats ]);
    }*/

    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory setCategories={setCategories} />
            <hr></hr>

            <ol>
                {
                    categories.map(category => (
                        <GifGrid key={category} category={category} />
                    ))
                }
            </ol>
        </>
    )
}
