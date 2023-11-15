import React from "react"
import "./download.css"

const Download = () => {
  return (
    <>
      <section className='download top'>
        <div className='container flex_space'>
          <div className='row'>
            <h3>Descarga la app</h3>
            <h1>Obtén esta aplicación Templete para tu móvil</h1>
            <ul>
              <li>&#10003; Encuentra hotel cercano</li>
              <li>&#10003; Obtenga confirmación sin papel</li>
              <li>&#10003; Realice cambios cuando y donde quiera</li>
              <li>&#10003; 24/7 atención al cliente</li>
              <li>&#10003; Sin comisiones de reserva ni de tarjeta de crédito</li>
            </ul>
            <div className='img flex'>
              <img src='/images/appstore-button.png' alt='' />
              <img src='/images/google-play-button.png' alt='' />
            </div>
          </div>
          <div className='row row2'>
            <img src='/images/app-image-1.png' alt='' className='image' />
          </div>
        </div>
      </section>
    </>
  )
}

export default Download
