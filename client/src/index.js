import React from 'react';
import ReactDOM from 'react-dom/client'
import App from "./App"
import { BrowserRouter } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.css';
import { PetProvider } from './petContext';

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <PetProvider>
        <BrowserRouter>
        <App/>
        </BrowserRouter>
        </PetProvider>
    </React.StrictMode>


)