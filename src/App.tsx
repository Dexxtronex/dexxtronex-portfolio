import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { Routes, Route } from 'react-router-dom'
import { Layout } from './components/layouts/Layout';
import Home from './pages/home/Home';
function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}/>
      </Route>  
    </Routes>
  );
}

export default App;
