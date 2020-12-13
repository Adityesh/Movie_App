import React, {useEffect, useState} from 'react';
import Draggable from 'react-draggable';
import movieIcon from '../../assets/movie.png'
import showIcon from '../../assets/tv.png';
import actorIcon from '../../assets/actor.png';
import Movies from './Movies/Movies';
import Shows from './Shows/Show';
import People from './People/People';
import './Home.css';
import { getDate, getTime } from '../../utils/dateTime';
const LandingMovie = React.lazy(() => import('./LandingMovie'));
const LandingShow = React.lazy(() => import('./LandingShow'));

const Home = ({setClock, openClock}) => {
    const [movie, setMovie] = useState(false);
    const [shows, setShows] = useState(false);
    const [actor, setActor] = useState(false);
    const [date, setDate] = useState('');
    const [time, setTime] = useState({});

    const openMovieModal = () => {
        if(shows || actor) {
            setShows(false);
        }

        setMovie(true);
    }

    const openShowModal = () => {
        if(movie || actor) {
            setMovie(false);
        }

        setShows(true);
    }

    const openActorModal = () => {
        if(shows || movie) {
            setActor(false);
        }

        setActor(true);
    }




    useEffect(() => {
        setDate(getDate());
        let interval = setInterval(() => {
            setTime(getTime());
        }, 1000)
        return (() => {
            clearInterval(interval);
        })
    }, [time])
    

    
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
            <Draggable bounds="parent">
                <div style={{ display: 'inline-block', margin : '20px'}} id="show" onClick={openActorModal}>
                    <img src={actorIcon} height={48} width={48} alt="Actor Icon" draggable="false" className="show"/>
                    <p style={{color : "white"}} className="show">People</p>
                </div>
            </Draggable>
            <Draggable bounds="parent">
                <div className="clock-container" style={{ display: openClock ? 'inline-block' : 'none', margin : '20px'}}>
                    <span className="close-button" onClick={() => setClock(false)}>X</span>
                    <p className="date">{date}</p>
                    <p className="time">{time.hours ? time.hours : '00'} <span className="blink">:</span> {time.minutes ? time.minutes : '00'} <span className="blink">:</span> {time.seconds ? time.seconds : '00'}
                    {time.ampm ? ' ' + time.ampm : ' PM'}</p>
                </div>
            </Draggable>
            <Draggable bounds="parent">
                <div style={{display : 'inline-block', margin : '20px'}} className="landing-container">
                    <p style={{textAlign : 'center', fontSize : '15px', fontWeight : 'bold'}}>Movie of the week</p>
                    <LandingMovie />
                </div>
            </Draggable>
            <Draggable bounds="parent">
                <div style={{display : 'inline-block', margin : '20px', top : '290px'}} className="landing-container">
                    <p style={{textAlign : 'center', fontSize : '15px', fontWeight : 'bold'}}>Show of the week</p>
                    <LandingShow />
                </div>
            </Draggable>
            <Movies isVisible={movie} closeModal={setMovie}/>
            <Shows isVisible={shows} closeModal={setShows}/>
            <People isVisible={actor} closeModal={setActor} />
            
        </div>
    )
}

export default Home;