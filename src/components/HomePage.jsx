import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
    return (
        <div className='home-header'>
            <a href='/' className='home-logo'>My Beer App</a>
            <h1 >Welcome to the Beer App!</h1>
            <ul>
                <li><Link to="/beers">Beers</Link></li>
                <li><Link to="/random-beer">Random Beer</Link></li>
                <li><Link to="/new-beer">New Beer</Link></li>
            </ul>
        </div>
    )
}

export default HomePage;