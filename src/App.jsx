import { useState } from "react"
import './App.css'
import Shortner from "./Shortner"
import BackgroundAnimate from "./BackgroundAnimate"
import  LinkResult  from "./LinkResult"
import Footer from "./Footer"
function App() {
  const [inputValue,setInputValue]=useState("");
  return (
    <>
    <div className="container">
      <Shortner setInputValue={setInputValue}/>
      <BackgroundAnimate/>
      <LinkResult inputValue={inputValue}/>
    </div>
      <Footer/>
      </>
  )
}

export default App
