import React, {useState, useEffect} from 'react';
import Loader from '../../../Loader/Loader';
import './Peep.css';
import { fetchPeople, imageUrl } from '../../../../utils/fetchPeople';
import Pagination from '../../../Pagination';
const PersonDetails = React.lazy(() => import('./PersonDetails'));

const Popular = () => {
    const [isLoading, setLoading] = useState(false);
    const [results, setResults] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState(1);

    // Movie Details Component
    const [isVisible, setVisible] = useState(false);
    const [personImage, setPersonImage] = useState('');
    const [personId, setPersonId] = useState('');

    

    useEffect(() => {
        setLoading(true)
        fetchPeople('/person/popular', page).then(({error, message, result, totalPages}) => {
            setResults(result);
            setTotalPage(totalPages);
            setLoading(false);
        }).catch((err) => {
            console.log(err);
        })

    }, [page])

    const fetchNewPage = () => {
        setLoading(true)
        fetchPeople('/person/popular', page).then(({error, message, result}) => {
            setResults(result);
            setLoading(false);
        }).catch((err) => {
            console.log(err);
        })
    }

    const openPersonDetailsModal = (image, id) => {
        setVisible(true);
        setPersonId(id);
        setPersonImage(image);
    }


    return(
        <div className="movies">
            
            {isLoading ? <Loader /> : null}
            <div className="movie-container">
            
            
            {results.length !== 0 ? results.map((person, index) => {
                return (
                    <div key={index} className="movie-element" onClick={() => openPersonDetailsModal(person.profile_path, person.id)}>
                        <img src={imageUrl(person.profile_path)} className="movie-pic" alt="person for Movie" />
                        <p >{person.name}</p>
                        
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
            <PersonDetails 
                personId={personId}
                personImage={personImage}
                setVisible={setVisible}
                isVisible={isVisible}
            />
        </div>
    )
}

export default Popular;