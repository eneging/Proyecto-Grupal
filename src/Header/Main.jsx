import './Main.css'

function Main({fnImg1, fnImg2}) {
  return (
    <div className="todo">

<div className='container-1'>
     
     
      <div className="todo1">


        <h2>Transform your brand</h2>

        <h4>We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through visuals that do most of the marketing for you.</h4>
        
        <h3>LEARN MORE</h3>
      </div>


      <div className="todo2">
      <img src={fnImg1} />
      </div>

</div>


<div className='container-2'>
      

      <div className="todo3">
      <img src={fnImg2} />
      </div>

      <div className="todo1">
        <h2>Stand out to the right audience</h2>
        <h4>Using a collaborative formula of designers, researchers, photographers, videographers, and copywrites, we'll build and extend your brand in digital places</h4>
        <h3>LEARN MORE</h3>
      </div>

      </div>
      
    </div>


  )
}

export default Main