import './App.css';
import React, {Suspense} from 'react';
import 'xp.css';
import { getWallpaper } from './utils/changeWallpaper';
const TaskBar = React.lazy(() => import('./components/TaskBar/TaskBar'))
const Home = React.lazy(() => import('./components/Content/Home'));

const App = () => {

  getWallpaper();

  return (
    <Suspense fallback={<div>Loading component</div>}>
      <div className="main-container">
        <Home />
        <TaskBar/>
      </div>
    
    </Suspense>
  );
}

export default App;
