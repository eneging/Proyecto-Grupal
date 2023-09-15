import "./Main2.css";
function Main2(props) {
  return (

<div className="container-2frutas">

   
    <div id="principal">
      <div id="img1">
        <img id="imagen" src={props.fnImg1} alt="..." />
        <h2 id="titulo">Graphic Design</h2>
        <p id="description">
          Great design makes you memorable. We deliver artwork that underscores
          your brand message and captures potential clients attention
        </p>
      </div>

</div>

<div>

      <div id="img1">
        <img id="imagen" src={props.fnImg2} alt="..." />
        <h2 id="titulo">Photography</h2>
        <p id="description">
          Increase your credibility by getting the most stunning, high-quality
          photos that improve your business image.
        </p>
      </div>
    </div>
    </div>

  );
}

export default Main2;
