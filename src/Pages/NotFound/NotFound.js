import './NotFound.css';
import React from 'react';
import { Link } from 'react-router-dom';
import notfound from '../../images/404.jpg';

const NotFound = () => {
    return (
        <div>
            <img style={{ width: '90%' }} src={notfound} alt="" />
            <br />
            <Link to="/">
                <button>Go Back</button>
            </Link>
        </div>
    );
};

export default NotFound;