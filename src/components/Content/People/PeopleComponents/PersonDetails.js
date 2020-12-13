import React, { useEffect, useState } from 'react';
import { fetchPeopleDetails, imageUrl } from '../../../../utils/fetchPeople';
import Loader from '../../../Loader/Loader';


const PersonDetails = ({ personId, personImage, setVisible, isVisible }) => {
    const [person, setPerson] = useState({});
    const [isLoading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        setPerson({});
        fetchPeopleDetails(personId)
            .then((personDetails) => {
                setPerson(personDetails)
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setLoading(false);
            })

    }, [personId])


    return (

        <div className="movie-details-container window" style={{ display: isVisible ? 'block' : 'none' }}>

            <div className="title-bar">
                <div className="title-bar-text">{person.name}</div>
                <div className="title-bar-controls">

                    <button aria-label="Close" onClick={() => setVisible(false)}></button>
                </div>
            </div>

            {isLoading ? 
            
            <div className="movie-loader">
            <Loader />
        </div>
            
            : null}
                
            

        </div>

    )
}

export default PersonDetails;


