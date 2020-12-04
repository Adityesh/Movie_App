import React, {useState, useEffect} from 'react';
import image from '../../assets/windows.png'
import shutdown from '../../assets/shutdown1.png';
import restart from '../../assets/restart.png'
import './TaskBar.css'

const TaskBar = () => {
    const [date, setDate] = useState("00:00 AM");
    const [isClicked, setClicked] = useState(false);

    const getTimeString = () => {
        let currentDate = new Date();
        let hours = currentDate.getHours();
        let minutes = currentDate.getMinutes().toString().length < 2 ? `0${currentDate.getMinutes()}` : currentDate.getMinutes();
        let ampm = hours >= 12 ? 'PM' : 'AM';
        return hours + ":" + minutes + " " + ampm;;
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

                    </div>
                    <div className="menu-right">

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

        