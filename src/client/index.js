import React from 'react';
import ReactDOM from 'react-dom';
import {createRoot} from 'react-dom/client';

import App from './App.tsx';

import './styles.css';

const rootElement = document.getElementById('app');
const root = createRoot(rootElement);

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,);