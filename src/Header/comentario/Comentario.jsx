import './Comentario.css'
import emily from './image-emily.jpg'
import jennie from './image-jennie.jpg'
import thomas from './image-thomas.jpg'
function Comentario() {
  return (
    <div className="container10">
   
          
    <div className="card">
        <h1> CLIENT TESTIMONIALS</h1>
        <div>
         <img  className="img" src={emily}  ></img>
         <p>parrafo</p>

        <h3></h3>
         <p>d</p>

        </div>

        </div>



        <div className='card'>


        <h1> CLIENT TESTIMONIALS</h1>
        <div>
         <img className='img'  src={jennie}></img>
         <p>parrafo</p>

        <h3></h3>
         <p>c</p></div>

        </div>


        <div className='card'>


        <h1> CLIENT TESTIMONIALS</h1>
        <div>
         <img className='img' src={thomas}></img>
         <p>parrafo</p>

        <h3></h3>
         <p>c</p></div>

        </div>

       
        
        </div>
  )
}

export default Comentario
