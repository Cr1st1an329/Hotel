import React from "react"
import "./Footer.css"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container grid'>
          <div className='box'>
            <h2>Nosotros</h2>
            <p>Tu hogar lejos de casa, nuestro placer es servirte.</p>
            <br />
            <p>Bienvenido a Hotel J-C, donde la elegancia se encuentra con la comodidad para brindarte una experiencia única en hospitalidad. Situado en el corazón de una vibrante ciudad, nuestro hotel es el destino perfecto para aquellos que buscan un alojamiento de lujo y servicios de primera clase.</p>
            <div className='icon flex_space'>
              <i className='fab fa-facebook-f'></i>
              <i className='fab fa-twitter'></i>
              <i className='fab fa-linkedin'></i>
              <i className='fab fa-instagram'></i>
              <i className='fab fa-pinterest'></i>
              <i className='fab fa-youtube'></i>
            </div>
          </div>

          <div className='box'>
            <h2>Conoce nuestros servicios</h2>
            <ul>
              <li>
                <Link to='/'>Inicio</Link>
              </li>
              <li>
                <Link to='/about'>Nosotros</Link>
              </li>
              <li>
                <Link to='/gallery'>Galeria</Link>
              </li>
              <li>
                <Link to='/destinations'>Destinos</Link>
              </li>
              <li>
                <Link to='/blog'>Blog</Link>
              </li>
              <li>
                <Link to='/testimonial'>Testimonios</Link>
              </li>
              <li>
                <Link to='/contact'>Contactanos</Link>
              </li>
            </ul>
          </div>

          <div className='box post'>
            <h2>Comentarios</h2>
            <ul>
              <li>
                <p>Increíble experiencia en Hotel J-C. Desde la atención del personal hasta las lujosas habitaciones, todo superó nuestras expectativas. ¡Definitivamente volveremos!</p>
                <label className='fa fa-calendar-alt'></label>
                <span>10 Nov 2021</span>
              </li>
              <li>
                <p>Una joya en hospitalidad. Hotel J-C ofrece un ambiente elegante y acogedor. La calidad del servicio y las instalaciones de primera clase hacen de cada estancia una experiencia inolvidable.</p>
                <label className='fa fa-calendar-alt'></label>
                <span>01 Oct 2020</span>
              </li>
              <li>
                <p>¡Excelente elección de alojamiento! Hotel J-C combina a la perfección la comodidad moderna con un toque clásico. El personal amable y las instalaciones de calidad hicieron que nuestro viaje fuera aún más especial.</p>
                <label className='fa fa-calendar-alt'></label>
                <span>25 Oct 2023</span>
              </li>
            </ul>
          </div>

          <div className='box'>
            <h2>Comentarios</h2>
            <p>Deja tu comentario</p>

            <input type='text' name='' id='' />
            <input type='text' className='primary-btn' value='SUBSCRIBE' />
          </div>
        </div>
      </footer>
      <div className='legal'>
        <p>© 2022 All Rights Reserved.</p>
      </div>
    </>
  )
}

export default Footer
