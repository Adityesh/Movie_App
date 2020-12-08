import React, {useState} from 'react';
import { getSearchMovies, imageUrl } from '../../../../utils/fetchMovies';
const MovieDetails = React.lazy(() => import('./MovieDetails'));

const SearchMovie = () => {

    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    // Movie Details Component
    const [isVisible, setVisible] = useState(false);
    const [movieImage, setMovieImage] = useState('');
    const [movieId, setMovieId] = useState('');

    const handleChange = async (query) => {
        setQuery(query);

        try {
            const {result} = await getSearchMovies(query);
            setResults(result);
        } catch(err) {
            console.log(err);
        }

    }

    const openMovieDetailsModal = (image, id) => {
        setVisible(true);
        setMovieId(id);
        setMovieImage(image);
    }

    

    return(
        <div className={'search-container'}>
            <div className="field-row search-box">
                <label htmlFor="search">Search for movies</label>
                <input id="search" type="text" onChange={(e) => handleChange(e.target.value)} value={query}/>
                <div className="search-results" style={{overflow : results.length === 0 ? 'hidden' : null}}>
                    {results.map ? results.map((movie, index) => {
                        return <div className={'result'} onClick={() => openMovieDetailsModal(movie.poster_path, movie.id)}>
                            <p className="movie-name">{movie.title} {movie.release_date ? '(' + movie.release_date.substring(0,4) + ')' : null}</p>
                            <img src={imageUrl(movie.poster_path)} alt="movie_poster"/>
                            
                        </div>
                    }) : 'N/A'}
                </div>
            </div>

            <MovieDetails 
                movieId={movieId}
                movieImage={movieImage}
                setVisible={setVisible}
                isVisible={isVisible}
            />
        </div>
    )
}

export default SearchMovie;