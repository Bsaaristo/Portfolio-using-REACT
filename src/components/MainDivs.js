import react from "react";

class MainDivs extends react.Component {
  render() {
    return (
      <body className="is-preload">
        <div id="wrapper">
          <nav id="nav">
            <ul>
              <li>
                <a href="#intro" className="active">
                  <strong>Introduction</strong>
                </a>
              </li>
              <li>
                <a href="#first">
                  <strong>Work History</strong>
                </a>
              </li>
              <li>
                <a href="#second">
                  <strong>Education</strong>
                </a>
              </li>
              <li>
                <a href="#cta">
                  <strong>Skills</strong>
                </a>
              </li>
              <li>
                <a href="#footer">
                  <strong>Contact</strong>
                </a>
              </li>
            </ul>
          </nav>

          <div id="main">
            <section id="intro" className="main special">
              <div className="spotlight">
                <div className="content">
                  <header className="major">
                    <h2>About</h2>
                  </header>
                  <p>

                  </p>
                </div>
              </div>
            </section>

            <section id="first" className="main special">
              <header className="major">
                <h2>Work History</h2>
              </header>
              <ul className="features">
                <li>
                  <h3>
                    <a href="Https://cirrusaircraft.com" target="_blank">
                      <strong>Cirrus Aircraft | Duluth, MN</strong>
                    </a>
                  </h3>
                  <h3></h3>
                  <p>
                    Read and interpret maintenance manuals, Service bulletins,
                    Schematics and other specifications to determine the
                    feasibility and method of repairing or replacing
                    malfunctioning or damaged components. Provide{" "}
                    <strong>Quality Assurance</strong> to ensure all completed
                    work is exceptional.{" "}
                  </p>
                </li>
                <li>
                  <h3>
                    <strong>Phelps Electric | Princeton, KY</strong>
                  </h3>
                  <h3></h3>
                  <p>

                  </p>
                </li>

                <li>
                  <h3>
                    <a href="https://revivaltechnology.com/" target="_blank">
                      <strong>Revival Technology | Hybrid</strong>
                    </a>
                  </h3>
                  <h3></h3>
                  <p>
                    Windows Imaging,
                    <strong> Data Migration and Preservation</strong>, ability
                    to troubleshoot <strong>software</strong> and hardware
                    problems and provide ongoing support, while adhering to
                    strict OPSEC protocol.
                  </p>
                </li>
              </ul>
              <footer className="major"></footer>
            </section>

            <section id="second" class="main special">
              <header className="major">
                <h2>Education</h2>
                <ul className="features">
                  <li>
                    <h3>
                      <strong>
                        Northwood Technical College Superior, Wisconsin
                      </strong>
                    </h3>
                    <h3>
                      <strong>Expected graduation | 11/24</strong>
                    </h3>
                    <p>Major of IT and Software Development.</p>
                  </li>
                  <li>
                    <h3>
                      <strong>
                        Fond Du Lac community College Cloquet, Minnesota
                      </strong>
                    </h3>
                    <h3>
                      <strong>Previously Attended | 2018</strong>
                    </h3>
                    <h3>PSEO and Independent Software Development </h3>
                  </li>
                </ul>
              </header>
            </section>

            <section id="cta" className="main special">
              <header className="major">
                <h2>Skills</h2>
              </header>
              <ul className="features">
                <li>
                  <h3>
                    <strong>Languages</strong>
                  </h3>
                  <h4>Python</h4>
                  <h4>HTML5</h4>
                  <h4>CSS3</h4>
                  <h4>SQL</h4>
                  <h4>C#</h4>
                </li>
                <li>
                  <h3>
                    <strong>OS's</strong>
                  </h3>
                  <h4>Windows</h4>
                  <h4>IOS</h4>
                  <h4>Chrome</h4>
                </li>
                <li>
                  <h3>
                    <strong>IDE's</strong>
                  </h3>
                  <h4>VS Code</h4>
                  <h4>Netbeans</h4>
                  <h4>Eclipse</h4>
                  <h4>Visual Studio</h4>
                </li>
              </ul>
            </section>

            <footer id="footer">
              <section>
                <h2>Contact Information</h2>
                <h3>
                  <a href="assets/BrianSaaristoResume.pdf" target="_blank">
                    {" "}
                    Viewable and Downloadable PDF
                  </a>
                </h3>
                <dl className="alt">
                  <dt>Address:</dt>
                  <dd>3087 M Anderson Rd &bull; Barnum, MN &bull; USA</dd>
                  <dt>Phone:</dt>
                  <dd>(218) 390-9293</dd>
                  <dt>Email:</dt>
                  <dd>
                    <a href="mailto:Briansaaristojr@icloud.com">
                      Briansaaristojr@icloud.com
                    </a>
                  </dd>
                </dl>
                <ul className="icons">
                  <h3>
                    <a
                      href="https://linkedin.com/in/brian-saaristo-736548172"
                      target="_blank"
                    >
                      LinkedIn
                    </a>
                  </h3>

                  <h3>
                    <a href="https://github.com/Bsaaristo" target="_blank">
                      <span>GitHub</span>
                    </a>
                  </h3>
                </ul>
              </section>
            </footer>
          </div>
        </div>
      </body>
    );
  }
}
export default MainDivs;
