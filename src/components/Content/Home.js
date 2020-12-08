import React, {useState} from 'react';
import Draggable from 'react-draggable';
import movieIcon from '../../assets/movie.png'
import showIcon from '../../assets/tv.png';
import Movies from './Movies/Movies';
import Shows from './Shows/Show';
import './Home.css';



const Home = () => {
    const [movie, setMovie] = useState(false);
    const [shows, setShows] = useState(false);

    const openMovieModal = () => {
        if(shows) {
            setShows(false);
        }

        setMovie(true);
    }

    const openShowModal = () => {
        if(movie) {
            setMovie(false);
        }

        setShows(true);
    }
    


    return (
        <div style={{ height: '100vh', width: '100%', position : 'relative'}}>
            <Draggable bounds="parent">
                <div style={{ display: 'inline-block', margin : '20px'}} id="movie" onClick={openMovieModal}>
                    <img src={movieIcon} height={48} width={48} alt="Movie Icon" draggable="false" className="movie"/>
                    <p style={{color : "white"}} className="movie">Movies</p>
                </div>
            </Draggable>
            <Draggable bounds="parent">
                <div style={{ display: 'inline-block', margin : '20px'}} id="show" onClick={openShowModal}>
                    <img src={showIcon} height={48} width={48} alt="Movie Icon" draggable="false" className="show"/>
                    <p style={{color : "white"}} className="show">TV Shows</p>
                </div>
            </Draggable>
            <Movies isVisible={movie} closeModal={setMovie}/>
            <Shows isVisible={shows} closeModal={setShows}/>
            
        </div>
    )
}

export default Home;