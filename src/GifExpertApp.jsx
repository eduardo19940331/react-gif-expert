import React, { useState } from 'react'
import { AddCategory, GifGrid } from './components';

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) {
            alert("Categoria existente!!");
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
