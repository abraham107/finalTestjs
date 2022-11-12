import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// common components
import Header from './views/components/header';
import Footer from './views/components/footer';

// content components
import Home from './views/content/home';
import About from './views/content/about';
import Projects from './views/content/projects';
import Services from './views/content/services';
import Contact from './views/content/contact';

// styles and fonts
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';

// JavaScript libraries
import $ from 'jquery';
import 'jquery/dist/jquery.min.js';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home  displayName='Rich' name={'Rich'} />}></Route>
        <Route path="/home" element={<Home displayName='Rich' name={''} />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/services" element={<Services />}></Route>
        <Route path="/contact" element={<Contact />}></Route>

      </Routes>
      <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
