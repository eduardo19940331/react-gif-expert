import React, { useState } from 'react'
import { validateProps } from '../utils/validateProps';
import { isFunction } from '../utils/validators';

export const AddCategory = ({ onNewCategory }) => {

    validateProps({onNewCategory}, {onNewCategory: isFunction});

    const [inputValue, setInputValue] = useState('');

    const onInputChange = (event) => {

        setInputValue(event.target.value);

    };

    const onAddCategory = (event) => {
        event.preventDefault();
        if (inputValue.trim().length <= 1) {
            return;
        }
        onNewCategory( inputValue.trim() );
        setInputValue("");
    };

    return (
        <form onSubmit={ onAddCategory } aria-label="form">
            <input
                type='text'
                placeholder="Buscar GIF's"
                id="textCategory"
                value={ inputValue }
                onChange={ onInputChange }
            />
        </form>
    )
}
