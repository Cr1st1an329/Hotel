import React from "react"
import "./About.css"

const AboutCard = () => {
  return (
    <>
      <div className='aboutCard mtop flex_space'>
        <div className='row row1'>
          <h4>Nosotros</h4>
          <h1>
          Acerca de Nosotros<span> - Hotel J-C</span>
          </h1>
          <p>Bienvenido a Hotel J-C, donde la elegancia se encuentra con la comodidad para brindarte una experiencia única en hospitalidad. Situado en el corazón de una vibrante ciudad, nuestro hotel es el destino perfecto para aquellos que buscan un alojamiento de lujo y servicios de primera clase.</p>
          <button className='secondary-btn'>
            Conoce Más <i className='fas fa-long-arrow-alt-right'></i>
          </button>
        </div>
        <div className='row image'>
          <img src='/images/about-img-1.jpg' alt='' />
          <div className='control-btn'>
            <button className='prev'>
              <i className='fas fa-play'></i>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutCard
