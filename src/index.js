import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import { ThemeProvider } from './Context';

ReactDOM.render(
  <>
  <BrowserRouter>
  <ThemeProvider>
  <App></App>
  </ThemeProvider>
    
    </BrowserRouter>
  </>,document.getElementById('root')
);