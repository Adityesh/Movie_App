import React, {useState, useEffect} from 'react';
import Loader from '../../../Loader/Loader';
import { fetchShows, imageUrl } from '../../../../utils/fetchShows'
import '../../Movies/MovieComponents/Movie.css';
import Pagination from '../../../Pagination';
const ShowDetails = React.lazy(() => import('./ShowDetails'))

const OnAir = () => {
    const [isLoading, setLoading] = useState(false);
    const [results, setResults] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState(1);

    // Movie Details Component
    const [isVisible, setVisible] = useState(false);
    const [showImage, setShowImage] = useState('');
    const [showId, setShowId] = useState('');

    

    useEffect(() => {
        setLoading(true)
        fetchShows('/tv/on_the_air', page).then(({error, message, result, totalPages}) => {
            setResults(result);
            setTotalPage(totalPages);
            setLoading(false);
        }).catch((err) => {
            console.log(err);
        })

    }, [page])

    const fetchNewPage = () => {
        setLoading(true)
        fetchShows('/tv/on_the_air', page).then(({error, message, result}) => {
            setResults(result);
            setLoading(false);
        }).catch((err) => {
            console.log(err);
        })
    }

    const openShowDetailsModal = (image, id) => {
        setVisible(true);
        setShowId(id);
        setShowImage(image);
    }

    
    return(
        <div className="movies">
            
            {isLoading ? <Loader /> : null}
            <div className="movie-container">
            
            {results.length !== 0 ? results.map((show, index) => {
                return (
                    <div key={index} className="movie-element" onClick={() => openShowDetailsModal(show.poster_path, show.id)}>
                        <img src={imageUrl(show.poster_path)} className="movie-pic" alt="poster for Show" />
                        <p >{show.name} - {show.first_air_date.substring(0,4)}</p>
                        
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

            <ShowDetails
            
            showId={showId}
            showImage={showImage}
            setVisible={setVisible}
            isVisible={isVisible}
            />


            
        </div>
    )
}

export default OnAir;