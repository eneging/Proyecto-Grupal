import './Footer.css'
import facebook from './icon-facebook.svg'
import instagram from './icon-instagram.svg'
import twiter from './icon-twitter.svg'
import pintrest from './icon-pinterest.svg'
import cone from './image-gallery-cone.jpg'
import milkbottles from './image-gallery-milkbottles.jpg'
import orange from './image-gallery-orange.jpg'
import sugarcubes from './image-gallery-sugarcubes.jpg'
function Footer() {
  return (
    <>

    <div className='ctn-footer'>
      <img className='img-footer'src={milkbottles}></img>
      <img className='img-footer'src={orange}></img>
      <img className='img-footer'src={cone}></img>
      <img className='img-footer'src={sugarcubes}></img>
    </div>
      <div className="footer">
        <footer>
          <div>
            <h1 className="titulo">sunnyside</h1>
          </div>
          <div>
            <ul className="about">
              <li>About</li>
              <li>Services</li>
              <li>Projects</li>
            </ul>
          </div>
          <div>
            <ul className="redes">
              <li>
                <a href="#">
                  <img src={facebook} alt="facebook" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={instagram} alt="instagram" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={twiter} alt="twiter" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={pintrest} alt="Pintrest" />
                </a>
              </li>
            </ul>
          </div>
          
        </footer>
      </div>
    </>
  );
}

export default Footer;
