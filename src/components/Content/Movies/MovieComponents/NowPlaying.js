import React, {useState, useEffect} from 'react';
import Loader from '../../../Loader/Loader';
import './Movie.css';
import { fetchMovies } from '../../../../utils/fetchMovies';
import Pagination from '../../../Pagination';

const NowPlaying = () => {
    const [isLoading, setLoading] = useState(false);
    const [results, setResults] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState(1);

    const imageUrl = (path) => {
        const fullPath = `https://image.tmdb.org/t/p/w185${path}`;
        return fullPath;
    }

    useEffect(() => {
        setLoading(true)
        fetchMovies('/movie/now_playing', page).then(({error, message, result, totalPages}) => {
            setResults(result);
            setTotalPage(totalPages);
            setLoading(false);
        }).catch((err) => {
            console.log(err);
        })

    }, [page])

    const fetchNewPage = () => {
        setLoading(true)
        fetchMovies('/movie/now_playing', page).then(({error, message, result}) => {
            setResults(result);
            setLoading(false);
        }).catch((err) => {
            console.log(err);
        })
    }

    

    return(
        <div>
            <p>Page {page} of {totalPage}</p>
            {isLoading ? <Loader /> : null}
            <div className="movie-container">
            
            {results.length !== 0 ? results.map((movie, index) => {
                return (
                    <div key={index} className="movie-element">
                        <img src={imageUrl(movie.poster_path)} alt="image for Movie" />
                        <p>{movie.title} - {movie.release_date.substring(0,4)}</p>
                        
                        </div>
                )
            }) : null}
            </div>
            

            <Pagination 
            totalPages={totalPage} 
            currentPage={page}
            setPage={setPage}
            fetchMovies={fetchNewPage}
            />
        </div>
    )
}

export default NowPlaying;