
import './App.css'

import Main2 from './Header/Main2'
import imgfresa from "./assets/desktop/image-graphic-design.jpg";
import imgnaranja from "./assets/desktop/image-photography.jpg";


import Footer from './Header/Footer'

import './Header/Main.jsx'
import Main from './Header/Main.jsx'




function App() {
 

  return (
    <>

      



      <Main></Main>
      <Main2 fnImg1= {imgfresa} fnImg2= {imgnaranja} ></Main2>
   

      <h1>hola , mundo</h1>
      
      <Footer></Footer>



    </>
  )
}

export default App
