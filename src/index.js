import { ColorModeScript } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import './index.css';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

const theme = extendTheme({
  colors: {
    brand: {
      primaryColor: 'red',
      // primaryColor: '#1967D2',
      primaryColorRGBA: 'rgba(25, 103, 210, 0.07)',
      secondaryColor: '#34A853',
      secondaryColorlinearGradient:
        'linear-gradient(90deg, rgba(255,255,255,1) 50%, rgba(255, 0, 0, 0.1) 100%)',
    },
  },
});

root.render(
  <StrictMode>
    <ColorModeScript />
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ChakraProvider>
  </StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorker.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
