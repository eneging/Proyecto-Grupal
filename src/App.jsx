import Header from './Header/Header'
import './App.css'

import Main2 from './Header/Main2'
import imgfresa from "./assets/desktop/image-graphic-design.jpg";
import imgnaranja from "./assets/desktop/image-photography.jpg";
import naranja from './assets/desktop/image-header.jpg'

import Footer from './Header/Footer'

import './Header/Main.jsx'
import Main from './Header/Main.jsx'




function App() {
 

  return (
    <>

      <Header fnImg1= {naranja}></Header>
      <Main></Main>
      <Main2 fnImg1= {imgfresa} fnImg2= {imgnaranja} ></Main2>

     
       
      
      
      <Footer></Footer>



    </>
  )
}

export default App
