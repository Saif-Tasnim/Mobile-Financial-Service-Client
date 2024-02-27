import React from 'react';
import error from '../../assets/error_compo.gif';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='flex justify-center items-center h-screen flex-col bg-slate-100 gap-10'>
            <img src={error} alt="error"  className='w-1/3 rounded'/>
            <Link to='/' className='text-head-2 text-pending font-bold underline'>Back To Home</Link>
        </div>
    );
};

export default ErrorPage;