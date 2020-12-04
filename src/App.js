import './App.css';
import React, {Suspense} from 'react';

const Nav = React.lazy(() => import('./components/Nav/Nav'))


const App = () => {
  return (
    <Suspense fallback={<div>Loading component</div>}>
    
      <Nav/>
    
    </Suspense>
  );
}

export default App;
