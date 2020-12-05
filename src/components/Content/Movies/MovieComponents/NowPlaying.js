import React, {useState, useEffect} from 'react';
import Loader from '../../../Loader/Loader';
import { fetchMovies } from '../../../../utils/fetchMovies';
import Pagination from '../../../Pagination';

const NowPlaying = () => {
    const [isLoading, setLoading] = useState(false);
    const [results, setResults] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState(1);

    useEffect(() => {
        setLoading(true)
        fetchMovies('/movie/now_playing', page).then(({error, message, result}) => {
            setResults(result);
            setTotalPage(result.total_page);
            setLoading(false);
        })

    }, [page])

    const fetchNewPage = () => {
        setLoading(true)
        fetchMovies('/movie/now_playing', page).then(({error, message, result}) => {
            setResults(result);
            setLoading(false);
        })
    }

    

    return(
        <div>
            {isLoading ? <Loader /> : null}
            {results.length !== 0 ? results.map((movie, index) => {
                return <div>{movie.original_title} --- {movie.release_date}</div>
            }) : null}
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