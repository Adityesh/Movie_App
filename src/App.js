import './App.css';
import React, {Suspense} from 'react';
import 'xp.css'
const TaskBar = React.lazy(() => import('./components/TaskBar/TaskBar'))


const App = () => {
  return (
    <Suspense fallback={<div>Loading component</div>}>
    
      <TaskBar/>
    
    </Suspense>
  );
}

export default App;
