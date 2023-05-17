import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import NotFound from './components/NotFound';
import Layouts from './components/Layouts'
import './index.css';
import reportWebVitals from './reportWebVitals';




export default function App(){
  return <BrowserRouter>
  <Routes>
    <Route path='/weather-app' element={<Layouts/>}>
      <Route index element={<Home/>} />
      <Route path='/weather-app/about' element={<About />} />
      <Route path='/weather-app/contact' element={<Contact />} />
      <Route path='/weather-app/*' element={<NotFound />} />
    </Route>
  </Routes>
  
  </BrowserRouter>
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
