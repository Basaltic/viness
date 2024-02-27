import './main.css';
import 'ui/globals.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './app/app';

import './common/i18n/i18n-init';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
);
