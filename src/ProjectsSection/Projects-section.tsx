import { useState } from 'react'
import './Projects-section.css'

function Projectsection() {
  const [showAlert, setShowAlert] = useState(false)

  const handleClick = () => {
    setShowAlert(true)
    setTimeout(() => {
      setShowAlert(false)
    }, 7500)
  }

  return (
    <div className="ProjectsSection relative">
      {showAlert && (
        <div className="SuccessAlert">
          Este proyecto fue desarrollado originalmente para una empresa privada y<br />
           entregado como parte de sus operaciones internas. <br />
          Actualmente me encuentro trabajando en una versión pública para su visualización.
        </div>
      )}

      <div className='ProjectsTitle'>
      <h1>Proyectos</h1>
      </div>

      <div className="Project1">
        <h1>Biblioteca Digital </h1>
        <span>• .Net(C#) & AngularJS •</span>
        <p>
          App para gestionar libros, préstamos y usuarios de una biblioteca física y digital<br />
        </p>
        <a href="">Ver mas</a>
      </div>

      <div className="Project2">
        <h1>Préstamos estudiantiles</h1>
        <span>• Django y ReactJS •</span>
        <p>Créditos rápidos y accesibles para que los estudiantes aseguren educación.</p>
        <a href="">Ver mas</a>
      </div>

      <div className="Project3">
        <h1>Reserva de alojamientos</h1>
        <span>• Java y VueJS •</span>
        <p>Plataforma para reservar hospedajes según tus necesidades y preferencias.</p>
        <a href="">Ver mas</a>        
      </div>

    </div>
  )
}

export default Projectsection
