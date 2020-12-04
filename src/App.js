import './App.css';
import React, {Suspense} from 'react';
import 'xp.css'
const TaskBar = React.lazy(() => import('./components/TaskBar/TaskBar'))
const Home = React.lazy(() => import('./components/Content/Home'));

const App = () => {
  return (
    <Suspense fallback={<div>Loading component</div>}>
      <Home />
      <TaskBar/>
    
    </Suspense>
  );
}

export default App;
