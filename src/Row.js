import axios from './axios';
import React, { useEffect, useState } from 'react';
import './Row.css';

function Row({ title, fetchUrl, isPrime = false, isLargeRow = false }) {

    const [movies, setMovies] = useState([]);

    const base_url = "https://image.tmdb.org/t/p/original/"

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);

            return request;
        }
        fetchData();
    }, [fetchUrl])

    console.log(movies);

    return (
        <div className="row">
            {isPrime ? (<img className="row__logo" src="https://m.media-amazon.com/images/G/01/digital/video/global/prime-logo-large-v4._CB509553088_.png" alt="Available with Prime"/>) : (<div></div>)}
            <h2>{title}</h2>
            <div className="row__posters">
                {movies.map(
                    (movie) => 
                    ((isLargeRow && movie.poster_path) || (!isLargeRow && movie.backdrop_path)) && (
                    <img 
                        className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                        key={movie.id}
                        src={`${base_url}${
                            isLargeRow ? movie.poster_path : movie.backdrop_path
                        }`} alt={movie.name} 
                    /> 
                )
            )}
        </div>
    </div>
    )
}

export default Row
