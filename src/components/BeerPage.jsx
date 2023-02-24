import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function BeerPage() {
    const [beer, setBeer] = useState({});
    const { id } = useParams();

    useEffect(() => {
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
            .then(response => setBeer(response.data));
    }, [id]);

    return (
        <div>
            <img src={beer.image_url} alt={beer.name} />
            <h2>{beer.name}</h2>
            <p>{beer.tagline}</p>
            <p>First brewed: {beer.first_brewed}</p>
            <p>Attenuation level: {beer.attenuation_level}</p>
            <p>Description: {beer.description}</p>
            <p>Contributed by: {beer.contributed_by}</p>
        </div>
    )
}

export default BeerPage;