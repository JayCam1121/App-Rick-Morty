import React, { useEffect } from 'react';
import axios from 'axios';
import ResidentInfo from './ResidentInfo';
import Locations from './Locations';

const Content = ({location, setLocation}) => {

    useEffect(() => {
        const random = Math.floor(Math.random() * 126) + 1;
        axios.get(`https://rickandmortyapi.com/api/location/${random}`)
            .then(res => setLocation(res.data))
    }, [setLocation])

    return (
        <div>
            <Locations location={location}/>
            <div className='info'>
            {location.residents?.length === 0 ? <h2>No characters found</h2> : location.residents?.map(resident=>(
                <ResidentInfo url={resident} key={resident}/>
            ))}
            </div>
        </div>
    );
};

export default Content;