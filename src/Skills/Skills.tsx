import "./Skills.css";

function Skills() {
  return (
    <div>
      <div className="SkillsSection1">
        <br />
        <div className="SkillsGrid">
          <div className="TechColumn">
            <h2>Front-end</h2>
            <div className="IconsGrid1">
              <div className="IconItem">
                <i className="devicon devicon-html5-plain"></i>
                <span>HTML</span>
              </div>
              <div className="IconItem">
                <i className="devicon devicon-css3-plain"></i>
                <span>CSS</span>
              </div>
              <div className="IconItem">
                <i className="devicon devicon-javascript-plain"></i>
                <span>JavaScript</span>
              </div>
              <div className="IconItem">
                <i className="devicon devicon-typescript-plain"></i>
                <span>TypeScript</span>
              </div>
            </div>
          </div>
          <div className="TitleColumn">
            <h1>¿Qué tecnologías utilizo?</h1>
          </div>
          <div className="TechColumn2">
            <h2>Back-end</h2>
            <div className="IconsGrid1">
              <div className="IconItem">
                <i className="devicon devicon-csharp-plain"></i>
                <span>Csharp</span>
              </div>
              <div className="IconItem">
                <i className="devicon devicon-python-plain"></i>
                <span>Python</span>
              </div>
              <div className="IconItem">
                <i className="devicon devicon-java-plain"></i>
                <span>Java</span>
              </div>
              <div className="IconItem">
                <i className="devicon devicon-php-plain"></i>
                <span>PHP</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="SkillsSection2">
        <div className="SkillsGrid">
          <div className="TechColumn">
            <h2>Libraries & Frameworks</h2>
            <div className="IconsGrid1">
              <div className="IconItem">
                <i className="devicon devicon-dotnetcore-plain"></i>
                <span>.NET</span>
              </div>
              <div className="IconItem">
                <i className="devicon devicon-react-original"></i>
                <span>React</span>
              </div>
              <div className="IconItem">
                <i className="devicon devicon-angularjs-plain"></i>
                <span>AngularJS</span>
              </div>
            </div>
          </div>
          <div className="TechColumn3">
            <h2>Databases</h2>
            <div className="IconsGrid1">
              <div className="IconItem">
                <i className="devicon devicon-microsoftsqlserver-plain"></i>
                <span>SQL Server</span>
              </div>
              <div className="IconItem">
                <i className="devicon devicon-mysql-plain"></i>
                <span>MySQL</span>
              </div>
              <div className="IconItem">
                <i className="devicon devicon-postgresql-plain"></i>
                <span>PostgreSQL</span>
              </div>
            </div>
          </div>
          <div className="TechColumn2">
            <h2>Tools</h2>
            <div className="IconsGrid1">
              <div className="IconItem">
                <i className="devicon devicon-git-plain"></i>
                <span>Git</span>
              </div>
              <div className="IconItem">
                <i className="devicon devicon-github-plain"></i>
                <span>GitHub</span>
              </div>
              <div className="IconItem">
                <i className="devicon devicon-azure-plain"></i>
                <span>Azure</span>
              </div>
              <div className="IconItem">
                <i className="devicon devicon-postman-plain"></i>
                <span>Postman</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
