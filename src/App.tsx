import "./App.css";
import ProfileImage from "./Profile-image/Profile-image";
import AboutMe from "./About-me/About-me";
import InfoSection from "./Info-section/Info-section";
import Perfiltecnico from "./PerfilTecnico/Perfiltecnico";
import Projectsection from "./ProjectsSection/Projects-section";
import Skills from "./Skills/Skills";

function App() {
  return (
    <>
      <div className="Container">
        {/* <Navbar /> */}

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

        <AboutMe />

        <InfoSection />

        <Perfiltecnico />

        <Skills />

        <Projectsection />

        <div className="FooterSection">
          
        </div>
      </div>
      <footer className="Footer">
        <div className="Contacts">
          <div onClick={() => window.location.href = 'mailto:sebastianledesmamontoya12@gmail.com?subject=Consulta&body=Hola%20Sebastian,%20estamos%20interesados%20en%20conocer%20más%20sobre%20tu%20perfil%20profesional.'} className="Icons email">
            <i className="fa-regular fa-envelope"></i>
          </div>
          <div onClick={() => window.location.href = 'https://wa.me/573016358391?text=Hola%20Sebastián,%20estamos%20interesados%20en%20conocer%20más%20sobre%20tu%20perfil%20profesional.'} className="Icons whatsapp">
            <i className="fa-brands fa-whatsapp"></i>
          </div>
          <div onClick={() => window.location.href = 'https://github.com/Sledesma1208'} className="Icons github">
            <i className="fa-brands fa-github"></i>
          </div>
        </div>
        <p>Developed in React by Sebastian</p>
      </footer>
    </>
  );
}

export default App;
