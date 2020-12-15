import React, {useState, useEffect} from 'react';
import image from '../../assets/windows.png'
import shutdown from '../../assets/shutdown1.png';
import restart from '../../assets/restart.png'
import tvIcon from '../../assets/menu-tv.png';
import movieIcon from '../../assets/menu-movie.png';
import personIcon from '../../assets/menu-person.png';
import timeIcon from '../../assets/time.png';

import './TaskBar.css'

const TaskBar = ({actor, shows, movie, setMovie, setActor, setShows, setClock, movieModal, setMovieModal, showModal, setShowModal}) => {
    const [date, setDate] = useState("00:00 AM");
    const [isClicked, setClicked] = useState(false);

    const getTimeString = () => {
        let currentDate = new Date();
        let hours = currentDate.getHours();
        let minutes = currentDate.getMinutes().toString().length < 2 ? `0${currentDate.getMinutes()}` : currentDate.getMinutes();
        let ampm = hours >= 12 ? 'PM' : 'AM';
        return hours + ":" + minutes + " " + ampm;
    }
    
    useEffect(() => {

        const time = setInterval(() => {
            const timeString = getTimeString();
            
            setDate(timeString);
        },1000)

        return () => {
            clearInterval(time);
        }
        
    })

    
    return(
        <div className="title-bar taskbar">
            <div className="start-menu" style={{display : isClicked ? 'block' : 'none'}}>
                <div className="menu-header title-bar">
                    Menu Header
                </div>
                <div className="menu-body">
                    <div className="menu-left">
                        <li onClick={() => {setShows(true);setClicked(!isClicked)}}>
                            <img src={tvIcon} alt="tv icon"/>
                            <p>TV Shows</p>
                        </li>
                        <li onClick={() => {setMovie(true);setClicked(!isClicked)}}>
                            <img src={movieIcon} alt="movie icon"/>
                            <p>Movies</p>
                        </li>
                        <li onClick={() => {setActor(true);setClicked(!isClicked)}}>
                            <img src={personIcon} alt="person icon"/>
                            <p>Actors/Actresses</p>
                        </li>
                        <li onClick={() => {setMovieModal(true);setClicked(!isClicked)}}> 
                            <p>Movie of the week</p>
                        </li>
                        <li onClick={() => {setShowModal(true);setClicked(!isClicked)}}>
                            <p>Show of the week</p>
                        </li>
                    </div>
                    <div className="menu-right">
                    <li onClick={() => {setClock(true);setClicked(!isClicked)}}>
                            <img src={timeIcon} alt="movie icon"/>
                            <p>Date/Time</p>
                    </li>
                    </div>
                </div>

                <div className="menu-footer title-bar">
                    <div className="footer-buttons" onClick={() => window.location.reload()}>
                    <img height={28} width={28} src={restart} alt="Restart button"/>
                    <span> Restart</span>
                    </div>
                    <div className="footer-buttons" onClick={() => window.close()}>
                    <img height={28} width={28} src={shutdown} alt="Shutdown button"/>
                    <span> Shutdown</span>
                    </div>
                </div>
            </div>
            <div className="taskbar-left">
                <div className="taskbar-start" onClick={() => setClicked(!isClicked)} style={{opacity : isClicked ? '1' : '0.8'}}>
                <img src={image} height={18} width={18} alt={'Windows icon'}/>
                <span>start</span>
                </div>
            </div>
            <div className="taskbar-right">
                <span className="taskbar-date">
                    {date}
                </span>
            </div>
        </div>
    )
}

export default TaskBar;

        