import '../Header/Footer.css'


function Footer() {
  return (
    <>
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
                  <img src="../src/assets/icon-facebook.svg" alt="facebook" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="../src/assets/icon-instagram.svg" alt="instagram" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="../src/assets/icon-twitter.svg" alt="twiter" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="../src/assets/icon-pinterest.svg" alt="Pintrest" />
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
