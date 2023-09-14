import './Comentario.css'
import emily from './image-emily.jpg'
import jennie from './image-jennie.jpg'
import thomas from './image-thomas.jpg'
function Comentario() {
  return (
    <>
      <div className="container13">
        <div className="container12" >
          <h1 className='h1'>CLIENT TESTIMONIAL</h1>
          <div className="container10">



            <div className="card">

              <div className='content-card'>
                <img className="img" src={emily}  ></img>
                <p>we put our trust in Sunnyside and they
                  deliverd, making sure our needs were met
                  and deadlines were always hit.
                </p>
                <div>
                  <h3>Emily R.</h3>
                  <p>Marketing Director</p>
                </div>
              </div>

            </div>


            <div className='card'>



              <div className='content-card'>

                <img className='img' src={thomas}></img>

                <p>Sunnyside's  enthusiam coupled with their
                  keen interest in our brand's success made it
                  a satisfying and enjoyable experience.
                </p>
                <div>
                  <h3>Thomas S.</h3>
                  <p>Chief Operating Officer</p>

                </div>
              </div>

            </div>


            <div className='card'>


              <div className='content-card'>
                <img className='img' src={jennie}></img>
                <p>incredible end result! Our sales increased
                  over 400% when we werked with Sunnyside.
                  Highly recommended!
                </p>
                <div>
                  <h3>Jennie F.</h3>
                  <p>Business Owner</p></div>
              </div>
            </div>




          </div>
        </div>
      </div>
    </>
  )
}

export default Comentario
