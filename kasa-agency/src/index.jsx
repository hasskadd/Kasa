import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About/About';
import Error from './components/Error';
import Header from './components/Header';
import GlobalStyle from './utils/styles/GlobalStyle';
import Footer from './components/Footer';
import Lodging from './pages/CardPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <GlobalStyle/>
      <Header/>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/Logement/:id' element={<Lodging/>}/>
          <Route path='*' element={<Error/>}/>
      </Routes>
      <Footer/>
    </Router>
    
  </React.StrictMode>
);

