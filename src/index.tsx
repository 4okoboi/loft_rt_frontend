import React, {Children} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./App.css";
import "./main.css";
import "./index.css";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import store from "./redux/redux-store";
import {Provider} from "react-redux";


const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>
);

