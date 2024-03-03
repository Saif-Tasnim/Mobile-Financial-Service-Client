import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '../Icon/Icon';

const Reverse = () => {
    return (
        <Link to="/dashboard" className='text-cancel'>
           <Icon.Undo2 /> 
        </Link>
    );
};

export default Reverse;