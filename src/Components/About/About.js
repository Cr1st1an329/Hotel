import React from "react"
import "./About.css"
import AboutCard from "./AboutCard"
import HeadTitle from "../../Common/HeadTitle/HeadTitle"

const About = () => {
  return (
    <>
      <HeadTitle />

      <section className='about top'>
        <div className='container'>
          <AboutCard />
        </div>
      </section>

      <section className='features top'>
        <div className='container aboutCard flex_space'>
          <div className='row row1'>
            <h1>
            Elegancia  <span>Moderna</span>
            </h1>
            <p>Hotel J-C combina a la perfección la elegancia clásica con las comodidades modernas. Nuestras habitaciones y suites están diseñadas para proporcionar un espacio tranquilo y lujoso, con detalles cuidadosamente seleccionados que crean un ambiente acogedor y sofisticado.</p>
            <button className='secondary-btn'>
              Conoce Más <i className='fas fa-long-arrow-alt-right'></i>
            </button>
          </div>
          <div className='row image'>
            <img src='/images/feature-img-1.jpg' alt='' />
            <div className='control-btn'>
              <button className='prev'>
                <i className='fas fa-play'></i>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
