import React, { useState } from 'react'

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = (event) => {

        setInputValue(event.target.value);

    };

    const onAddCategory = (event) => {
        event.preventDefault();
        if (inputValue.trim().length <= 1) {
            alert("Debe escribir una Categoria!!");
            return;
        }
        onNewCategory( inputValue.trim() );
        setInputValue("");
    };

    return (
        <form onSubmit={ onAddCategory }>
            <input type='text' placeholder="Buscar GIF's" id="textCategory" value={ inputValue } onChange={ onInputChange } />
        </form>
    )
}
