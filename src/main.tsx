import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';
import { ThemeProvider } from './context/ThemeContext';
import { ToastProvider } from './context/ToastContext';
import './styles/global.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <HelmetProvider>
            <ThemeProvider>
                <ToastProvider>
                    <HashRouter>
                        <App />
                    </HashRouter>
                </ToastProvider>
            </ThemeProvider>
        </HelmetProvider>
    </React.StrictMode>
);
