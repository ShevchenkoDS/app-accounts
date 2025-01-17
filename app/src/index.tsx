import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './index.scss';
import AboutUsPage from './pages/AboutUsPage';
import AccountDeleteForm from './pages/AccountDeleteForm';
import AccountEditForm from './pages/AccountEditForm';
import AccountsPage from './pages/AccountsPage';
import ProfilePage from './pages/ProfilePage';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/accounts" element={<AccountsPage />} />
        <Route path="/accounts/edit/:id" element={<AccountEditForm />} />
        <Route path="/accounts/delete/:id" element={<AccountDeleteForm />} />
        <Route path="/profile/:id" element={<ProfilePage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="*" element={<AccountsPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
