import "./App.css";
import { useState } from "react";
import ProfileImage from "./Profile-image/Profile-image";
import AboutMe from "./About-me/About-me";
import Navbar from "./Navbar/Navbar";
import InfoSection from "./Info-section/Info-section";
import Projectsection from "./ProjectsSection/Projects-section";
import SkillCircle from "./Skills/SkillCircle";

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>

    <Navbar />

        <div className="PresentationCard">
          <div className="image">
            <div>
              <ProfileImage src="/HdV-Imagen.jpeg" alt="ProfileImage" />
            </div>
          </div>
          <div className="Name">
                <h1>
                  <span>Sebastian</span> Ledesma Montoya
                </h1>
                <h2>Desarrollador de software Junior</h2>
          </div>
        </div>

        <AboutMe/>


        

        <InfoSection />

      <div className="Perfiltecnico">
            <h1>Perfil Técnico</h1>
            <hr />
            <p>
              Desarrollador de software especializado en la construcción de
              soluciones técnicas sólidas, donde combino principios de
              arquitectura limpia y Domain-Driven Design (DDD) para crear
              sistemas escalables y bien organizados. Mi experiencia abarca la
              implementación de mecanismos de seguridad como autenticación y
              autorización con JWT, así como el diseño de validaciones
              directamente desde el núcleo del dominio para garantizar
              consistencia en las reglas de negocio. Disfruto del proceso de
              modelar entidades, agregados y contratos con precisión, asegurando
              que cada componente cumpla su función. Me apasiona escribir código
              que no solo funcione, sino que también sea mantenible, seguro y,
              sobre todo, adaptado a las necesidades reales del proyecto.
            </p>
            <hr className="mt-3" />
      </div>

          {/* <br />

          <br />

          <div className="skills-wrapper">
            <SkillCircle name="React" percentage={90} />
            <SkillCircle name="Python" percentage={75} />
            <SkillCircle name=".NET" percentage={80} />
            <SkillCircle name="Node.js" percentage={70} />
          </div>

          <div className="Title mt-3 mb-3">
            <h1>Proyectos</h1>
          </div>

          <Projectsection />

          <br /> */}

      <footer className="Footer">
        <p>Developed in React by Sebastian</p>
      </footer>
    </>
  );
}

export default App;
