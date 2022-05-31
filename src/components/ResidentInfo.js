import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ResidentInfo = ({url}) => {

    const [character, setCharacter] = useState()
    const [ status, setStatus ] =useState("green")

    useEffect (() => {
        axios.get(url)
            .then(res => setCharacter(res.data));

            if(character?.status === "Alive"){
                setStatus("green")
            }else if(character?.status === "Dead") {
                setStatus("red")
            } else {
                setStatus("grey")
            }
    }, [url, character?.status])


    return (
        <section className='item-info'>
            <img src={character?.image || 'https://via.placeholder.com/300x300/111217/FFFFFF/?text=Loading...'} alt="" />
            <h4 className='status'>
                <span className={`status-circle ${status}`}></span>
                {character?.status}
            </h4>
            <article className='item-detail'>
                <h3>{character?.name}</h3>
                <p>Specie: {character?.species}</p>
                <p>Origin: {character?.origin.name}</p>
                <p>Episodes: {character?.episode.length}</p>
            </article>
        </section>
    );
};

export default ResidentInfo;