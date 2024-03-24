import './main.css';
import 'ui/globals.css';

import { createRoot } from 'react-dom/client';
import { App } from './app/app';

import './common/i18n/i18n-init';

const container = document.getElementById('root');
container && createRoot(container).render(<App />);
