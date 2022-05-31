import React from 'react';

const Locations = ({location}) => {
    return (
        <div className='locationBox'>
            <h2>{location.id} - {location.name}</h2>
            <div className='locationDetails'>
                <p>Type: {location.type}</p>
                <p>Dimension: {location.dimension}</p>
                <p>Residents number: {location.residents?.length}</p>
            </div>
        </div>
    );
};

export default Locations;