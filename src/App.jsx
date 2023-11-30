import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Routes/Home';
import Contact from './Routes/Contact';
import Detail from './Routes/Detail';
import Favs from './Routes/Favs';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import { MyProvider } from './Context';
const App = () => {

  return (
    <MyProvider>
    <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/contacto" element={<Contact />} />
          <Route path="/home" element={<Home />} />
          <Route path="/dentista/:id" element={<Detail />} />
          <Route path="/favs" element={<Favs />} />
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
    </BrowserRouter>
    </MyProvider>
  );
} 

export default App;
