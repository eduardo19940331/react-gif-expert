import React, { useState } from 'react'
import { AddCategory, GifGrid } from './components';

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Pice']);

    const onAddCategory = ( newCategory ) => {
        if (categories.includes(newCategory)) {
            return;
        }
        setCategories([newCategory, ...categories]);
    };


    return (
        <>
            <h1>Gif Expert App</h1>

            <AddCategory
                onNewCategory={(event) => onAddCategory(event)}
            />

            {
                categories.map(( category ) =>
                    (
                        <GifGrid key={category} category={category} />
                    )
                )
            }

        </>
    )
}

export default GifExpertApp
