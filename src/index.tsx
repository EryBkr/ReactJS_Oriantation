import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeIcons } from '@fluentui/font-icons-mdl2';
import { BrowserRouter as Router } from 'react-router-dom';
import 'alertifyjs/build/css/alertify.css';
import rootReducer from './store';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';



const store=createStore(rootReducer,applyMiddleware(thunk));


//Fluent UI Icon seti
initializeIcons();

ReactDOM.render(
  
  <Provider store={store}>
    <Router>
        <App />
    </Router>
 </Provider>
 ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
