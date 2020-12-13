import React, {useState} from 'react';
import { getSearchPeople, imageUrl } from '../../../../utils/fetchPeople';
const PersonDetails = React.lazy(() => import('./PersonDetails'));

const SearchPerson = () => {

    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    // Movie Details Component
    const [isVisible, setVisible] = useState(false);
    const [personImage, setPersonImage] = useState('');
    const [personId, setPersonId] = useState('');

    const handleChange = async (query) => {
        setQuery(query);

        try {
            const {result} = await getSearchPeople(query);
            setResults(result);
        } catch(err) {
            console.log(err);
        }

    }

    const openPersonDetailsModal = (image, id) => {
        setVisible(true);
        setPersonId(id);
        setPersonImage(image);
    }


    return(
        <div className={'search-container'}>
            <div className="field-row search-box">
                <label htmlFor="search">Search for movies</label>
                <input id="search" type="text" onChange={(e) => handleChange(e.target.value)} value={query}/>
                <div className="search-results" style={{overflow : results.length === 0 ? 'hidden' : null}}>
                    {results.map ? results.map((person, index) => {
                        return <div className={'result'} onClick={() => openPersonDetailsModal(person.profile_path, person.id)}>
                            <p className="movie-name">{person.name ? person.name : null}</p>
                            <img src={imageUrl(person.profile_path || null)} alt="actor poster"/>
                            
                        </div>
                    }) : 'N/A'}
                </div>
            </div>

            <PersonDetails 
                personId={personId}
                personImage={personImage}
                setVisible={setVisible}
                isVisible={isVisible}
            />
        </div>
    )
}

export default SearchPerson;