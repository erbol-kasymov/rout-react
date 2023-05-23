import React from 'react';
import { Link } from 'react-router-dom';

export const Contacts = () => {
    return(
        <div>
            <h1>Contacts page</h1>
            <Link to={'/about'}>
                <button>About link</button>
            </Link>
            <Link to={'/'}>
                <button>Home link</button>
            </Link>
        </div>
    )
}