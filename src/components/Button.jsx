import React from 'react';
import PropTypes from 'prop-types';

export default function Button(props){
    return(
        <button onClick={props.onClick} className={props.className} {...props}>{props.children}</button>
    );
}

Button.propTypes = {
    className: PropTypes.string
};