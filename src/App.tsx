import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Redirect, Route, Switch } from 'react-router';
import Login from './components/Login';
import Photo from './components/Photo';
import Search from './components/Search';
import PhotoDetail from './components/PhotoDetail';


function App() {
  return (
    <>
    <div className="ms-Grid" dir="ltr">
    <Redirect to="/login" />
    <Route path="/login" component={Login} />
    <Switch>
     <Route path="/photo/edit/:photoId" exact component={PhotoDetail} />
     <Route path="/photo" component={Photo} />
    </Switch>
    <Route path="/search" component={Search} />
    </div>
    </>
  );
}

export default App;
