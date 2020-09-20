
import React from 'react';
import './App.css';
import Feed from './Components/Feed';
import Header from './Components/Header';
import Login from './Components/Login';
import Sidebar from './Components/Sidebar';
import Widgets from './Components/Widgets';
import { useStateValue } from './Components/StateProvider'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {

  //User 
  const [{ user }, dispatch] = useStateValue();

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
