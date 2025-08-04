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

      <div className="Project1">
        <h1>Biblioteca Digital</h1>
        <p>
          Lideré el desarrollo completo de un proyecto interno para la
          digitalización y gestión de la biblioteca empresarial. Diseñando la
          base de datos desde cero, modelando la lógica de negocio siguiendo una
          arquitectura DDD y desarrollando tanto el backend (con .NET 8, Entity
          Framework, y una autenticación JWT) como el frontend completo
          (Angular), incluyendo interfaces, validaciones, alertas y una completa
          experiencia de usuario. El sistema incluye funcionalidades como
          préstamos, reservas, control de libros físicos y digitales, envío
          automático de notificaciones por correo electrónico, y administración
          de usuarios con distintos niveles de acceso. Asumí el liderazgo
          técnico del proyecto, desde el análisis inicial, cubriendo todo el
          ciclo de desarrollo.
        </p>
        <div className="flex justify-center">
          <button
            onClick={handleClick}
            className="relative overflow-hidden mt-3 text-white bg-blue-700 hover:bg-blue-800 active:scale-95 transition-transform duration-100 focus:outline-none focus:ring-0 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 group"
          >
            Visitar proyecto
          </button>
        </div>
      </div>

      <div className="Project2">
        <h1>Gestión de préstamos estudiantiles</h1>
        <p>En proceso...</p>
      </div>

      <div className="Project3">
        <h1>Reserva de alojamientos</h1>
        <p>En proceso...</p>
      </div>
    </div>
  )
}

export default Projectsection
