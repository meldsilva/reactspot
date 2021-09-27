import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./App"
import {BrowserRouter as Router} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
    <React.Fragment>
     <Router>
        <App />
    </Router>
    </React.Fragment>,
    document.getElementById('root')
);
