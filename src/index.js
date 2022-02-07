import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CompanyForm from './components/Company/CompanyForm';
import CompanyList from './components/Company/CompanyList';
import Navbar from './components/Navbar/Navbar';
import './index.css';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <BrowserRouter>
    <Navbar />
      <div className="container my-4">
        <Routes>
            <Route path="/" element={<CompanyList />}/>
            <Route path="/CompanyForm" element={<CompanyForm />} />
            <Route path="/updateCompany/:id" element={<CompanyForm />} />
       </Routes>
     </div>
    </BrowserRouter>,
    document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
