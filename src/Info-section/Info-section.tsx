import './Info-Section.css'

function InfoSection(){

    return(
          <div className="InfoContainer">
        <div className="JobExperience">
          <h1>Experiencia Laboral</h1>
          <hr />   
          <h2 className="mt-3"> • Asesor comercial • </h2>
          <p><span>Empresa:</span> OneContact S.A.S </p>
          <p><span>Jefe inmediato:</span> Julio Cesar Amariles Velez </p>
          <p><span>Teléfono:</span> 323 343 6949</p>
          <p className="mb-3"><span>Periodo:</span> Septiembre 2024 - Diciembre 2025</p>
          <br />
          <hr />
          <h2 className="mt-3"> • Desarrollador de Software • </h2>
          <p><span>Empresa:</span> Integral S.A Ingenieros consultores</p>
          <p><span>Jefe inmediato:</span> Luis Alejandro Peláez Gómez </p>
          <p><span>Teléfono:</span> (604) 511 54 00</p>
          <p><span>Periodo:</span> Diciembre 2025 - Junio 2025</p>
        </div>
        <div className="RightColumn">
            <div className="ExtraSection">
            <h1>Formación Académica</h1>
            <hr />
            <h2 className="text-white">2025 Técnico en Análisis y desarrollo de software</h2>
            <p>Centro de formación integral para el trabajo (CEFIT)</p>
          </div>
          <div className="References">
            <h1>Referencias Personales</h1>
            <hr />
            <h2 className="mt-3"><span>Nombre:</span> Johan Sebastian Giraldo Cañas </h2>
            <h2><span>Correo: </span> agiraldojohan@gmail.com </h2>
            <h2 className="mb-3"><span>Cel:</span> 301 666 7319 </h2>
            <hr />
            <h2 className="mt-3"><span>Nombre:</span> Astrid Montoya Perez </h2>
            <h2><span>Correo:</span> astrid_m_p@hotmail.com </h2>
            <h2 className="mb-4"><span>Cel:</span> 312 841 0531 </h2>
          </div>
        </div>
      </div>
    )
}

export default InfoSection