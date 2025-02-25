// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// // import App from './App.jsx'
// import App from './exercise-3-class/App.jsx'  // mới chạy đúng file app đặt trong đúng thư mục

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )


import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
//import App from './exercise-3-functional/App.jsx';
import App from './exercise-3-class/App.jsx'
import './index.css';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
