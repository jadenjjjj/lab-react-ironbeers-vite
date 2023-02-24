import React, {useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function BeersPage() {
    const [beers, setBeers] = useState([]);
    
    useEffect(() => {
        axios.get('https://ih-beers-api2.herokuapp.com/beers')
            .then(response => setBeers(response.data)); 
    }, []);

    return (
        <div>
            <h1>All Beers</h1>
            {beers.map(beer => (
                <div key={beer._id}>
                    <img src={beer.image_url} alt={beer.name}/>
                    <h2>{beer.name}</h2>
                    <p>{beer.tagline}</p>
                    <p>Description: {beer.description}</p>
                    <p>Contributed by: {beer.contributed_by}</p>
                    <Link to={`/beers/${beer._id}`}>Details</Link>
                </div>
            ))}
        </div>
    );

}

export default BeersPage;