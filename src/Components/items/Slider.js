import React from 'react'
import { Link } from 'react-router-dom'
const Slider = () => {
  return (
    <>
    <div id="carouselExampleIndicators" className="carousel slide my-3" data-bs-ride="true">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <Link to={"/item/15614654646699"}><img src="https://woker.vteximg.com.br/arquivos/ids/270641/WokerLuquin_DesktopBanner_1920x600.png?v=637836541579200000" className="d-block w-100 imgs__slider" alt="rebook"/></Link>
    </div>
    <div className="carousel-item">
      <Link to={"item/15687945632845"}><img src="https://woker.vteximg.com.br/arquivos/ids/271791/Puma%20Kosmo%20Rider%20Desktop.png?v=637842702624330000" className="d-block w-100 imgs__slider" alt="puma"/></Link>
    </div>
    <div className="carousel-item">
     <Link to={"/item/11111111111111"}> <img src="https://woker.vteximg.com.br/arquivos/ids/209381/WKRConverseChuck70-SliderDesktop.png?v=637601466396230000" className="d-block w-100 imgs__slider" alt="converse"/></Link>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </>
  )
}

export default Slider