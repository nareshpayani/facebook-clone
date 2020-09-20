
import React from 'react';
import './App.css';
import Feed from './Components/Feed';
import Header from './Components/Header';
import Login from './Components/Login';
import Sidebar from './Components/Sidebar';
import Widgets from './Components/Widgets';

function App() {

  //User 
  const user = null;

  return (

    // We are going to BEM naming convention

    <div className="app">
        { !user ? ( <Login/>) : (

          <>
           <Header/>
          <div className="app__body">
            <Sidebar/>
            <Feed/>
            <Widgets />
          </div>
          </>

        )}
     
      
    </div>
  );
}

export default App;
