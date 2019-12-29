import React from "react"
import Header from "./components/header.js"
import Memegenerator from "./components/memegenertor.js"
import Footer from "./components/footer.js"
import "./App.css"
function App(){
   
    return(
        <div className="container">
        <Header />
        <Memegenerator />
        <Footer />        
       
        </div>
    )
}


export default App
