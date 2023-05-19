import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { SignUp } from './pages/SignUp';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/cadastrar' element={<SignUp />} >
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
