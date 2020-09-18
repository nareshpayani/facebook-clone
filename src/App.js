import React from 'react';
import './App.css';
import Feed from './Components/Feed';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';

function App() {
  return (

    // We are going to BEM naming convention

    <div className="app">
      <Header/>

      <div className="app__body">
      <Sidebar/>
      <Feed/>
      </div>
      
    </div>
  );
}

export default App;
