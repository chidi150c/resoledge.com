
import React from 'react';
import { createRoot } from "react-dom/client";
import AppRouter from './MyComponents/AppRouter';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

const root = document.getElementById("root");
const app = (
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
);

// Use createRoot to render the app
const rootElement = createRoot(root);
rootElement.render(app);

