import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import { Dashboard } from './Pages/Dashboard';
import { Drives } from './Pages/Drives';
import Login from './Pages/Login';
import { MyFiles } from './Pages/MyFiles';
import { Register } from './Pages/Register';
import { SharedFiles } from './Pages/SharedFiles';
import { Verify } from './Pages/Verify';
import { Update } from './Pages/Update';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/myfiles" element={<MyFiles />} />
          <Route path="/drives" element={<Drives />} />
          <Route path="/sharedfiles" element={<SharedFiles />} />
          <Route path="/verify" element={<Verify />} />
          <Route path="/update" element={<Update />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
