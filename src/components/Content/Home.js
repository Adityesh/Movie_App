import React, {useEffect, useState} from 'react';
import Draggable from 'react-draggable';
import movie from '../../assets/movie.png'
import show from '../../assets/tv.png';




const Home = () => {
    const [icon, setIcon] = useState('');


    const handleClick = (type) => {
        console.log(type);
    }


    return (
        <div style={{ height: '100vh', width: '100%'}}>
            <Draggable bounds="parent">
                <div style={{ display: 'inline-block', margin : '20px'}} id="movie" onClick={e => handleClick(e.target.className)}>
                    <img src={movie} height={48} width={48} alt="Movie Icon" draggable="false" className="movie"/>
                    <p style={{color : "white"}} className="movie">Movies</p>
                </div>
            </Draggable>
            <Draggable bounds="parent">
                <div style={{ display: 'inline-block', margin : '20px'}} id="show" onClick={e => handleClick(e.target.className)}>
                    <img src={show} height={48} width={48} alt="Movie Icon" draggable="false" className="show"/>
                    <p style={{color : "white"}} className="show">TV Shows</p>
                </div>
            </Draggable>
            
        </div>
    )
}

export default Home;