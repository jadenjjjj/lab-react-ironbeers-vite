import React, { useState } from 'react';
import axios from 'axios';

function NewBeerForm() {
    const [name, setName] = useState('')
    const [tagline, setTagline] = useState('')
    const [description, setDescription] = useState('');
    const [firstBrewed, setFirstBrewed] = useState('');
    const [brewersTips, setBrewersTips] = useState('')
    const [attenuationLevel, setAttenuationLevel] = useState('')
    const [contributedBy, setContributedBy] = useState('') 

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('https://ih-beers-api2.herokuapp.com/beers/new', {
            name,
            tagline,
            description,
            first_brewed: firstBrewed,
            brewers_tips: brewersTips,
            attenuation_level: attenuationLevel,
            contributed_by: contributedBy
        })
            .then(response => {
                console.log("new beer created: ", response.data)
                // reset the form fields after successful submission
                setName('')
                setTagline('')
                setDescription('')
                setFirstBrewed('')
                setBrewersTips('')
                setAttenuationLevel('')
                setContributedBy('')
            })
            .catch(error => console.log(error))
    }

    return (
        <div>
            <h2>Create a new beer</h2>
            <form>
                <label>Name</label>
                <input type="text" value={name} onChnange={(event) => setName(event.target.value)} />

                <label>Tagline</label>
                <input type="text" value={tagline} onChange={(event) => setTagline(event.target.value)} />

                <label>Description</label>
                <input type="text" value={description} onChange={(event) => setDescription(event.target.value)} />
            
                <label>First Brewed</label>
                <input type="text" value={firstBrewed} onChange={(event) => setFirstBrewed(event.target.value)} />

                <label>Brewers Tips</label>
                <input type="text" value={brewersTips} onChange={(event) => setBrewersTips(event.target.value)} />

                <label>Attenuation Level</label>
                <input type="number" value={attenuationLevel} onChange={(event) => setAttenuationLevel(event.target.value)} />

                <label>Contributed By</label>
                <input type="number" value={contributedBy} onChnange={(event) => setContributedBy(event.target.value)} />
            
                <button type="submit">Create</button>
            </form>
        </div>
    )
}

export default NewBeerForm;