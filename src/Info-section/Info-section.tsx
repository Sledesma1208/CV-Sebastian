import "./Info-Section.css";

function InfoSection() {
  return (
    <div className="InfoContainer">
      <div className="JobExperience">
        <h2 className="mt-3"> • Asesor comercial • </h2>
        <p>
          <span>Empresa:</span> OneContact S.A.S{" "}
        </p>
        <p>
          <span>Jefe inmediato:</span> Julio Cesar Amariles Velez{" "}
        </p>
        <p>
          <span>Teléfono:</span> 323 343 6949
        </p>
        <p className="mb-3">
          <span>Periodo:</span> Septiembre 2024 - Diciembre 2025
        </p>
        <br />

        <h2 className="mt-3"> • Desarrollador de Software • </h2>
        <p>
          <span>Empresa:</span> Integral S.A Ingenieros consultores
        </p>
        <p>
          <span>Jefe inmediato:</span> Luis Alejandro Peláez Gómez{" "}
        </p>
        <p>
          <span>Teléfono:</span> (604) 511 54 00
        </p>
        <p>
          <span>Periodo:</span> Diciembre 2025 - Junio 2025
        </p>
      </div>
      <div className="JobExperience2">
        <h1>Experiencia laboral</h1>
      </div>

        <div className="Schooling2">
          <h1>Estudios</h1>
        </div>
        <div className="Schooling">
          <h2>
            2025 • Técnico en Análisis y desarrollo de software
          </h2>
          <p>Centro de formación integral para el trabajo (CEFIT)</p>
          <br />
          <h2>
            Nivel de Ingles
          </h2>
          <p>A2 Certificado (C1 en proceso...)</p>
        </div>
    </div>
  );
}

export default InfoSection;
