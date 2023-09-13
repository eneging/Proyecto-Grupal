
import './Header.css'
function Header({fnImg1}) {
  return (
    <div className='container'>
      <nav>
         <div>
        <h1>sunnyside</h1>   </div>



        <div > <ul className='btn'>
          <li>About</li>
          <li>Services</li>
          <li>Projects</li>
          <li className='btn-n'>Contact</li>
        </ul> 
        
        
        </div>
        
       
      </nav>
      <h1 className='h1-c'> WE ARE CREATIVES</h1>
      <i className="fa-solid fa-arrow-down" id="flecha"></i>
      <img className='img-naranja' src={fnImg1}></img>
    </div>
  )
}

export default Header