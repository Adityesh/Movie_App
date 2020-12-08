import './App.css';
import React, {Suspense, useEffect, useState} from 'react';
import Loader from './components/Loader/Loader';
import 'xp.css';
import { getWallpaper } from './utils/changeWallpaper'
const TaskBar = React.lazy(() => import('./components/TaskBar/TaskBar'))
const Home = React.lazy(() => import('./components/Content/Home'));


const App = () => {
  const[openClock, setClock] = useState(true);

  const [imagePath, setImagePath] = useState('');
  useEffect(() => {
    getWallpaper()
    .then(({imagePath}) => {
      setImagePath(imagePath)
    })
    .catch(err => {
      console.log(err);
    })
  }, [])

  return (
    <Suspense fallback={<div className="component-loader"><Loader /></div>}>
      <div className="main-container" style={{background : `url(${imagePath})`}}>
        <Home setClock={setClock} openClock={openClock}/>
        <TaskBar setClock={setClock} openClock={openClock}/>
      </div>
    
    </Suspense>
  );
}

export default App;
