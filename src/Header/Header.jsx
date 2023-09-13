
import './Header.css'
function Header() {
  return (
    <div className='container'>
      <nav>
         <div>
        <h1>sunnyside</h1>   </div>



        <div > <ul className='btn'>
          <li>About</li>
          <li>Services</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul> 
        
        
        </div>
        
       
      </nav>
      <h1 className='h1-c'> WE ARE CREATIVES</h1>
      <img className='img-naranja' src="./src/assets/desktop/image-header.jpg"></img>
    </div>
  )
}

export default Header