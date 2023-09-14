import Header from './Header/Header'
import './App.css'

import Main2 from './Header/Main2'
import imgfresa from "./assets/desktop/image-graphic-design.jpg";
import imgnaranja from "./assets/desktop/image-photography.jpg";
import naranja from './assets/desktop/image-header.jpg'
import huevo from './assets/desktop/image-transform.jpg'
import copa from './assets/desktop/image-stand-out.jpg'
import Footer from './Header/footer/Footer'
import './Header/Main.jsx'
import Main from './Header/Main.jsx'
import Comentario from './Header/comentario/Comentario';




function App() {
 

  return (
    <>

      <Header fnImg1= {naranja}></Header>
      <Main fnImg1= {huevo} fnImg2= {copa}></Main>
      <Main2 fnImg1= {imgfresa} fnImg2= {imgnaranja} ></Main2>

     
       
      
      <Comentario></Comentario>
      <Footer></Footer>



    </>
  )
}

export default App
