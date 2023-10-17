import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import Videos from './components/Videos';
import Upload from './components/Upload';
import Login from './components/Login';
import SignUp from './components/SignUp';


function App() {
  return (
    <Router>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/videos' element={<Videos></Videos>}></Route>
        <Route path='/upload' element={<Upload></Upload>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
      </Routes>
      <Footer></Footer>
    </Router>
  );
}

export default App;
