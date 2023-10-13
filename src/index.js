import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from "@chakra-ui/react";
import LoginPageContextProvider from './Context/LoginPageContextProvider';
import CountContextProvider from './Context/CountContextProvider';


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <LoginPageContextProvider>
    <CountContextProvider>
      <ChakraProvider>
        <BrowserRouter>
          <Provider store={store}>
            <App />
          </Provider>
        </BrowserRouter>
      </ChakraProvider>
    </CountContextProvider>
  </LoginPageContextProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();