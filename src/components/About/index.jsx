import React from 'react';
import { Link } from 'react-router-dom';

export const About = () => {
    return(
        <div>
            <h1>About page</h1>
            <Link to={'/'}>
                <button>Home link</button>
            </Link>
            <Link to={'/contacts'}>
                <button>Contacts link</button>
            </Link>
        </div>
    )
}