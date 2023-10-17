import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import Videos from './components/Videos';


function App() {
  return (
    <Router>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/videos' element={<Videos></Videos>}></Route>
      </Routes>
      <Footer></Footer>
    </Router>
  );
}

export default App;
