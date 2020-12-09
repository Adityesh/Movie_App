import React, {useState, useEffect} from 'react';
import Loader from '../../../Loader/Loader';
import './Movie.css';
import { fetchMovies, imageUrl } from '../../../../utils/fetchMovies';
import Pagination from '../../../Pagination';
const MovieDetails = React.lazy(() => import('./MovieDetails'));

const Popular = () => {
    const [isLoading, setLoading] = useState(false);
    const [results, setResults] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState(1);

    // Movie Details Component
    const [isVisible, setVisible] = useState(false);
    const [movieImage, setMovieImage] = useState('');
    const [movieId, setMovieId] = useState('');

    

    useEffect(() => {
        setLoading(true)
        fetchMovies('/movie/popular', page).then(({error, message, result, totalPages}) => {
            setResults(result);
            setTotalPage(totalPages);
            setLoading(false);
        }).catch((err) => {
            console.log(err);
        })

    }, [page])

    const fetchNewPage = () => {
        setLoading(true)
        fetchMovies('/movie/popular', page).then(({error, message, result}) => {
            setResults(result);
            setLoading(false);
        }).catch((err) => {
            console.log(err);
        })
    }

    const openMovieDetailsModal = (image, id) => {
        setVisible(true);
        setMovieId(id);
        setMovieImage(image);
    }

    

    return(
        <div className="movies">
            {isLoading ? <Loader /> : null}
            <div className="movie-container">
            
            {results.length !== 0 ? results.map((movie, index) => {
                return (
                    <div key={index} className="movie-element" onClick={() => openMovieDetailsModal(movie.poster_path, movie.id)}>
                        <img src={imageUrl(movie.poster_path)} className="movie-pic" alt="poster for Movie" />
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
            <MovieDetails 
                movieId={movieId}
                movieImage={movieImage}
                setVisible={setVisible}
                isVisible={isVisible}
            />
        </div>
    )
}

export default Popular;