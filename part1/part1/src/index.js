import React from 'react';
import ReactDOM from 'react-dom/client';
import AppUnicafe from './part1/unicafe/AppUnicafe';
import reportWebVitals from './reportWebVitals';
import AppAnnecdotes from './part1/anecdotes/AppAnecdotes';
import App from './part1/courseinfo/App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <AppAnnecdotes />
    </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();