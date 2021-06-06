import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = (category) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    // Se hace el efecto para que solo se dispare cuando cambie la categoria
    useEffect(() => {
        getGifs(category)
            .then(imgs => {

                setState({
                    data: imgs,
                    loading: false
                });

            })
    }, [category]);

    return state;

}
