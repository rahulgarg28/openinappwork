import React from 'react'
import { BrowserRouter as Router, Route, BrowserRouter, Routes } from "react-router-dom";
import Sign_in from './component/signin/Sign_in';
import Upload from './component/upload/Upload';



import './App.css'
import './component/signin/Sign_in.scss'
import './component/upload/Upload.scss'
import './component/Mediaq.scss'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route  path='/' element={<Sign_in />}></Route>
      <Route  path='/upload' element={<Upload />}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
