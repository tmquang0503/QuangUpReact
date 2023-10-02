import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import store from './store';
import { Provider } from 'react-redux';
import ScrollToTop from './components/Include/ScrollToTop ';
import Notification from './components/Include/Notification';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <BrowserRouter>
            <ScrollToTop />
            <App />
        </BrowserRouter>
        <Notification />
    </Provider>
);
