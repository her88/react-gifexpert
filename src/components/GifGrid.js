import React from 'react';
import { GifItem } from './GifItem';

import { useFetchGifs } from "../hooks/useFetchGifs"

export const GifGrid = ({ category }) => {    

    // data: images para renombrar data a images
    const { data: images, loading } = useFetchGifs( category );

    return (
        <>
            <h3 className="animate__animated animate__fadeIn"> {category} </h3>

            { loading && <p className="animate__animated animate__flash">Loading...</p>}

            {<div className="card-grid">
                {
                    images.map(img =>
                        <GifItem key={img.id} {...img} />
                    )
                }
            </div>}
        </>
    )
}
