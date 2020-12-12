import React, {useState} from 'react';
import { getSearchShows, imageUrl} from '../../../../utils/fetchShows';
const ShowDetails = React.lazy(() => import('./ShowDetails'));

const SearchShow = () => {

    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    // Movie Details Component
    const [isVisible, setVisible] = useState(false);
    const [showImage, setShowImage] = useState('');
    const [showId, setShowId] = useState('');

    const handleChange = async (query) => {
        setQuery(query);

        try {
            const {result} = await getSearchShows(query);
            setResults(result);
        } catch(err) {
            console.log(err);
        }

    }

    const openShowDetailsModal = (image, id) => {
        setVisible(true);
        setShowId(id);
        setShowImage(image);
    }

    
    return(
        <div className={'search-container'}>
            <div className="field-row search-box">
                <label htmlFor="search">Search for shows</label>
                <input id="search" type="text" onChange={(e) => handleChange(e.target.value)} value={query}/>
                <div className="search-results" style={{overflow : results.length === 0 ? 'hidden' : null}}>
                    {results.map ? results.map((show, index) => {
                        return <div className={'result'} onClick={() => openShowDetailsModal(show.poster_path, show.id)}>
                            <p className="movie-name">{show.name} {show.first_air_date ? '(' + show.first_air_date.substring(0,4) + ')' : null}</p>
                            <img src={imageUrl(show.poster_path)} alt="movie_poster"/>
                            
                        </div>
                    }) : 'N/A'}
                </div>
            </div>

            <ShowDetails 
                showId={showId}
                showImage={showImage}
                setVisible={setVisible}
                isVisible={isVisible}
            />
        </div>
    )
}

export default SearchShow;