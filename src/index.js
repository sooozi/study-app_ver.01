import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import "./fonts/Font.css";
import reportWebVitals from './reportWebVitals';
// import GlobalStyle from './style/GlobalStyle';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      {/* <GlobalStyle /> */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
