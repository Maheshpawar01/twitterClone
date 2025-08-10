import React from 'react'
import './App.css'
import Body from './components/Body'
import {Toaster} from "react-hot-toast"

function App() {
  return (
    <>
  <div className="">
    <Body/>
    <Toaster position="top-right"/>
  </div>
    </>
  )
}

export default App
