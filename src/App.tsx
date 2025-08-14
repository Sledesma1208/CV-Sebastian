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
          <h1>Contacto</h1>
          <div className="FooterContact">
            <table>
              <tr>
                <th>Email</th>
                <th>Celular</th>
                <th>GitHub</th>
              </tr>
              <tr>
                <td>
                  <a
                    href="mailto:sebastianledesmamontoya12@gmail.com?subject=Consulta&body=Hola%20Sebastian,%20estamos%20interesados%20en%20conocer%20más%20sobre%20tu%20perfil%20profesional."
                    target="_blank"
                  >
                    sebastianledesmamontoya12@gmail.com
                  </a>
                </td>
                <td>
                  <a
                    href="https://wa.me/573016358391?text=Hola%20Sebastián,%20estamos%20interesados%20en%20conocer%20más%20sobre%20tu%20perfil%20profesional."
                    target="_blank"
                  >
                    +57 301 635 8391
                  </a>
                </td>
                <td>
                  <a href="https://github.com/Sledesma1208">@Sledesma1208</a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="mailto:sledesmam@gmail.com?subject=Consulta&body=Hola%20Sebastian,%20estamos%20interesados%20en%20conocer%20más%20sobre%20tu%20perfil%20profesional.">
                    sledesmam@gmail.com
                  </a>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
      <footer className="Footer">
        <p>Developed in React by Sebastian</p>
      </footer>
    </>
  );
}

export default App;
