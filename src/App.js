import React from 'react';
import './App.css';
import Header from "./components/Header";
import Menu from "./components/Menu";
import {Route, Switch} from 'react-router-dom';
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Projects from "./components/pages/Projects";

function App() {
  return (
    <div>
      <Header/>
      <div className='content-container'>
        <Switch>
          <Route path='/about' component={About}/>
          <Route path='/contact' component={Contact}/>
          <Route path='/projects' component={Projects}/>
        </Switch>
      </div>
    </div>
  );
}

export default App;
