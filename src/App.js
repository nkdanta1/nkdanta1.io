import './App.css';

function App() {
  return (
    <div>
      <title>Nitesh Kumawat</title>
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css"
        integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossOrigin="anonymous" />
      <link rel="stylesheet" href="style.css" />
      <header id="body-header">
        <nav>
          <ul className="horizontal-list text-center nav-menu">
            <li>
              <a href="#"> Home </a>
            </li>
            <li>
              <a href="#about"> About </a>
            </li>
            <li>
              <a href="#skills"> Skills </a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#education">Education</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
        <div id="name-social-container">
          <div className="text-center">
            <h1 id="my-name">Nitesh Kumawat</h1>
          </div>
          <div>
            <ul className="horizontal-list text-center social-icons">
              <li>
                <a href="https://www.facebook.com/nitesh.kumawat.cer17">
                  <i className="fab fa-facebook-f" />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/nitesh-kumawat-6b8b82171/">
                  <i className="fab fa-linkedin-in" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
      <main>
        <section id="about">
          <div id="my-image">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR5TL9acbHm7-ey-8iY4Ri5WOJ5LX_z7Tqb56cQm0y48jR2qUk2&usqp=CAU" />
          </div>
          <div id="about-para">
            <b>
              A programmer who tries to turn thoughts into code.
            </b>
          </div>
        </section>
        <section id="skills">
          <h1 className="section-heading mb75px ">
            <span>
              <i className="fas fa-chalkboard-teacher" />
            </span>
            <span> SKILLS </span>
          </h1>
          <div className="skills-display">
            <div className="skill-progress">
              <div className="eighty-percent mb-blue">
                <div className="skill-name">
                  <span> C++ </span>
                </div>
              </div>
            </div>
            <div className="skill-progress">
              <div className="eighty-percent mb-orange">
                <div className="skill-name">
                  <span> HTML </span>
                </div>
              </div>
            </div>
            <div className="skill-progress">
              <div className="fifty-percent mb-light-purple">
                <div className="skill-name">
                  <span> CSS </span>
                </div>
              </div>
            </div>
            <div className="skill-progress">
              <div className="fifty-percent mb-teal">
                <div className="skill-name">
                  <span> Data-Structure </span>
                </div>
              </div>
            </div>
            <div className="skill-progress">
              <div className="fifty-percent mb-blue">
                <div className="skill-name">
                  <span> Algorithm </span>
                </div>
              </div>
            </div>
            <div className="skill-progress">
              <div className="fifty-percent mb-light-purple">
                <div className="skill-name">
                  <span> Python</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="experience">
          <h1 className="section-heading mb75px">
            <span>
              <i className="fas fa-briefcase" />
            </span>
            <span> Work Experience </span>
          </h1>
          <div className="timeline">
            <div className="timeline-box ">
              <div className="timeline-container">
                <h3 className="experience-designation  m0 m-blue"> Internship </h3>
                <h4 className="experience-company-name"> Wyn Technology Pvt. Ltd. </h4>
                <h5 className="experience-duration m0"> April 2020 - May 2020 </h5>
                <p className="experience-description text-align-justify">
                  {/* Worked on Joomla CMS and developed website in the same environment. */}
                </p>
              </div>
            </div>
            <div className="timeline-box right ">
              <div className="timeline-container">
                <div className="timeline-logo">
                  {/* <img>*/}
                </div>
                <h3 className="experience-designation  m0 m-blue"> Data Engineering Intern </h3>
                <h4 className="experience-company-name"> tribes.ai </h4>
                <h5 className="experience-duration m0"> Feb 2021 - May 2021 </h5>
                <p className="experience-description text-align-justify" />
              </div>
            </div>
            <div className="timeline-box">
              <div className="timeline-container">
                <div className="timeline-logo">
                  {/* <img>*/}
                </div>
                <h3 className="experience-designation  m0 m-blue"> Software Engineer</h3>
                <h4 className="experience-company-name"> Tercept </h4>
                <h5 className="experience-duration m0"> July 2021 - PRESENT </h5>
                <p className="experience-description text-align-justify" />
              </div>
            </div>
            <div id="timeline-divider">
              <div className="timeline-traveller">
                <div>
                  <i className="fas fa-plane" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="education">
          <h1 className="section-heading mb75px">
            <span>
              <i className="fas fa-graduation-cap" />
            </span>
            <span> Education </span>
          </h1>
          <div className="timeline">
            <div className="timeline-box left ">
              <div className="timeline-container">
                <div className="timeline-logo">
                  {/*-img*/}
                </div>
                <h3 className="experience-designation  m0 m-blue"> School </h3>
                <h4 className="experience-company-name "> Swami Nityanand Senior Secondary School </h4>
                <h5 className="experience-duration m0"> 2004 - 2016 </h5>
                <p className="experience-description text-align-right">
                  10th: 88.33%
                </p>
                <p className="experience-description text-align-right">
                  12th: 84.20%
                </p>
              </div>
            </div>
            <div className="timeline-box right ">
              <div className="timeline-container">
                <div className="timeline-logo">
                  {/* <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSNdwBZ-9Jo3xhAVgadV_xP8yUthsTLEXltbErwbVg5hFT14C7t&usqp=CAU">*/}
                </div>
                <h3 className="experience-designation  m0 m-blue"> B.Tech </h3>
                <h4 className="experience-company-name "> IIT BHU, VARANASI</h4>
                <h5 className="experience-duration m0"> July 2017 - Current </h5>
                <p className="experience-description text-align-right">
                  CPI:8.51
                </p>
              </div>
            </div>
            <div id="timeline-divider">
              <div className="timeline-traveller">
                <div>
                  <i className="fas fa-car-side" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="contact">
          <h1 className="section-heading mb50px">
            <span>
              <i className="far fa-address-card" />
            </span>
            <span> Contact </span>
          </h1>
          <div id="contact-container">
            <div id="my-details-container">
              <h3> My Address </h3>
              <div className="my-details-info-container">
                <i className="fas fa-map-marker-alt" />
                <span>Sikar, India</span>
              </div>
              <div className="my-details-info-container">
                <i className="fas fa-mobile-alt" />
                <span>9636688476</span>
              </div>
              <div className="my-details-info-container">
                <i className="far fa-envelope" />
                <span>niteshkumawat2402@gmail.com</span>
              </div>
            </div>
          </div>
          <div className="text-center social-icons">
            <ul className="horizontal-list">
              <li>
                <a href="https://www.linkedin.com/in/nitesh-kumawat-6b8b82171/">
                  <i className="fab fa-linkedin-in" />
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/nitesh.kumawat.cer17">
                  <i className="fab fa-facebook-f" />
                </a>
              </li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
