import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import reportWebVitals from './reportWebVitals';
// 1. import `ChakraProvider` component
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom';
import {Provider} from "react-redux"
import { store } from './Redux/store';
const root = ReactDOM.createRoot(document.getElementById('root'));

const breakpoints = {
 tablet :'55em',
 mobile:'39em'
}

const theme = extendTheme({ breakpoints})


root.render(
  
  <BrowserRouter>
  <Provider store={store} >
  <ChakraProvider theme={theme} >
    <App />
  </ChakraProvider>
  </Provider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
