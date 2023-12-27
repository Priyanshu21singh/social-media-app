import React from 'react';
import './App.css';

import Sidebar from './components/sidebar/Sidebar';
import Feed from './components/feed/Feed';

function App() {
  return (

    <div style={{ display: 'flex' }}>
    
    <Sidebar/>
    <Feed/>
   
   </div>
    );
}

export default App;
  {/*   
    <div style={{ display: 'flex' }}>
    
     <Sidebar/>
     <Feed/>
    
    </div>
   
  */}