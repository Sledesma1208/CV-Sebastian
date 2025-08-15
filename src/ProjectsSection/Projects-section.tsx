import type { MouseEvent } from "react";
import "./Projects-section.css";

function Projectsection() {
  function handleClick(e: MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    alert(
      "Los proyectos en estos momentos se encuentran en proceso de versionamiento público debido a que algunos quedaron en repositorios privados.\nSin embargo, puedes contactarme para más información."
    );
  }

  return (
    <div className="ProjectsContainer relative">
      <div className="ProjectsTitle">
        <h1>PROYECTOS</h1>
      </div>
    <div className="ProjectsSection relative">
      <div className="Project1">
        <h1>Biblioteca Digital </h1>
        <span>• .Net(C#) & AngularJS •</span>
        <p>
          App para gestionar libros, préstamos y usuarios de una biblioteca
          física y digital
        </p>
        <a href="#" onClick={handleClick}>
          Ver mas
        </a>
      </div>

      <div className="Project2">
        <h1>Préstamos estudiantiles</h1>
        <span>• Django y ReactJS •</span>
        <p>
          Créditos rápidos y accesibles para que los estudiantes aseguren
          educación.
        </p>
        <a href="#" onClick={handleClick}>
          Ver mas
        </a>
      </div>

      <div className="Project3">
        <h1>Reserva de alojamientos</h1>
        <span>• Java y VueJS •</span>
        <p>
          Plataforma para reservar hospedajes según tus necesidades y
          preferencias.
        </p>
        <a href="#" onClick={handleClick}>
          Ver mas
        </a>
      </div>
    </div>
    </div>
  );
}

export default Projectsection;
