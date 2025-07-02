import React from 'react'
import PropTypes from 'prop-types';
import { isString } from '../utils/validators';
import { validateProps } from '../utils/validateProps';

export const GifItem = ({image:{title, url, id}}) => {
    
    validateProps({title, url}, {title: isString, url: isString});

    return (
        <div className='card'>
            <img src={url} alt={title}/>
            <p>{title}</p>
        </div>
    )
}

GifItem.protoTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
}
