import { useEffect, useState } from "react";
import ScrollReveal from "scrollreveal";
import "../../styles/portfolio.css";
import Particles from "react-tsparticles";
import myParticlesConfig from "../../assets/Particles";
import myCursor from "../../assets/cursor";
import mypic2 from "../../assets/images/myimg.png";
import aboutpic from "../../assets/images/aboutpic.png";
import pic7 from "../../assets/images/pic7.jpg";
import pic1 from "../../assets/images/pic1.jpg";
import pic2 from "../../assets/images/pic2.jpg";
import pic3 from "../../assets/images/pic3.jpg";
import tek from "../../assets/images/tek.png";
import dsa from "../../assets/images/dsa.jpg";
import jsCourse from "../../assets/images/jscourse.jpeg";
import mjsCourse from "../../assets/images/mjscourse.jpg";


export default function Home() {
  useEffect(() => {
    myCursor();
    let navL = document.querySelectorAll(".nav__link");
    navL.forEach((n) => n.addEventListener("click", linkAction));
    console.log(process.env.REACT_APP_HOME_PAGE);
    const srconfig = {
      origin: "top",
      duration: 2000,
      reset: false,
      distance: "80px",
    };
    const sr = ScrollReveal(srconfig);
    sr.reveal(".home__title", {});
    sr.reveal(".button", { delay: 200 });
    sr.reveal(".home__img", { delay: 400 });
    sr.reveal(".home__social-icon", { interval: 200 });

    sr.reveal(".about__img", {});
    sr.reveal(".about__subtitle", { delay: 200 });
    sr.reveal(".about__text", { delay: 400 });

    sr.reveal(".skills__subtitle", {});
    sr.reveal(".skills__text", { delay: 200 });
    sr.reveal(".skills__data", { interval: 200 });
    sr.reveal(".skills__img", { delay: 400 });

    sr.reveal(".work__img", { interval: 200 });
    sr.reveal(".contact__input", { interval: 200 });
  }, []);

  const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
      nav = document.getElementById(navId);
    if (toggle && nav) {
      nav.classList.toggle("show");
    }
  };

  const [formData, setFormData] = useState({
  name: "",
  email: "",
  message: ""
});

const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value
  });
};

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch("http://localhost:8080/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    });

    if (response.ok) {
      alert("Message Sent Successfully ✅");

      setFormData({
        name: "",
        email: "",
        message: ""
      });
    } else {
      alert("Error sending message");
    }
  } catch (error) {
    console.error(error);
    alert("Server Error");
  }
};

  function linkAction() {
    let navL = document.querySelectorAll(".nav__link");
    navL.forEach((n) => n.classList.remove("active"));
    this.classList.add("active");
    const navMenu = document.getElementById("nav-menu");
    navMenu.classList.remove("show");
  }

  return (
    <div>
      <div className="cursor"></div>
      <header className="l-header">
        <nav className="nav bd-grid">
          <div>
            <a href="#home" className="nav__logo">
              Nilesh
            </a>
          </div>

          <div className="nav__menu" id="nav-menu">
            <ul className="nav__list">
              <li className="nav__item">
                <a href="#home" className="nav__link active">
                  Home
                </a>
              </li>
              <li className="nav__item">
                <a href="#about" className="nav__link">
                  About
                </a>
              </li>
              <li className="nav__item">
                <a href="#skills" className="nav__link">
                  Skills
                </a>
              </li>
              <li className="nav__item">
                <a href="#work" className="nav__link">
                  Work
                </a>
              </li>
              <li className="nav__item">
                <a href="#certifications" className="nav__link">
                  Certifications
                </a>
              </li>
              <li className="nav__item">
                <a href="#contact" className="nav__link">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div
            className="nav__toggle"
            id="nav-toggle"
            onClick={() => {
              showMenu("nav-toggle", "nav-menu");
            }}
          >
            <i className="bx bx-menu-alt-left"></i>
          </div>
        </nav>
      </header>

      <main className="l-main">
        <section className="home bd-grid" id="home">
          <div className="home__data">
            <h1 className="home__title">
              Hi, <br />
              I'am <span className="home__title-color">Nilesh</span>
              <br />
              Full Stack Developer
            </h1>
            <a href="#contact" className="button btn-grad">
              Contact
            </a>
          </div>
          <div className="home__social">
            <a
              href="http://www.linkedin.com/in/rnilesh"
              className="home__social-icon"
            >
              <i className="bx bxl-linkedin"></i>
            </a>
            <a
              href="https://github.com/rnileshk"
              className="home__social-icon"
            >
              <i className="bx bxl-github"></i>
            </a>
            <a
              href="https://www.instagram.com/imnilesh60"
              className="home__social-icon"
            >
              <i className="bx bxl-instagram"></i>
            </a>
          </div>

          <div className="home__img">
            <img alt="" src={mypic2} />
          </div>
        </section>
        <section className="about section" id="about">
          <h2 className="section-title">About</h2>

          <div className="about__container bd-grid">
            <div className="about__img">
              <img alt="" src={aboutpic}></img>
            </div>

            <div>
              <h2 className="about__subtitle">I'am Nilesh</h2>
              <p className="about__text">
                I am a motivated software developer with a strong interest in backend development 
                and problem solving. Skilled in Java, Spring Boot, RESTful APIs, SQL, and Data 
                Structures, I enjoy designing and developing scalable applications. I am always 
                eager to learn emerging technologies and improve my development skills. I am 
                seeking an opportunity where I can apply my technical knowledge, contribute to 
                impactful projects, and grow as a professional software engineer.
              </p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://drive.google.com/file/d/1FoJu_jAccsaP_0vGmnCwW1JccOI2f3xn/view?usp=sharing"
                className="button btn-grad"
              >
                Download Resume
              </a>
            </div>
          </div>
        </section>

        <section className="skills section" id="skills">
          <h2 className="section-title">Skills</h2>

          <div className="skills__container bd-grid">
            <div className="skills__right">
              <h2 className="skills__subtitle">Professional Skills</h2>
              <p className="skills__text">
                I have a strong foundation in programming with Java and a good understanding 
                of Data Structures and Algorithms. I am skilled in developing backend 
                applications using Spring Boot and building RESTful APIs. I also have 
                experience working with SQL databases and object-oriented programming 
                concepts. I enjoy solving complex problems, writing efficient code, and 
                continuously improving my technical skills by learning new technologies. 
                I am passionate about building scalable and reliable software solutions.
              </p>
              <img alt="" src={pic7} className="skills__img" />
            </div>
            <div>
              <div className="skills__data">
                <div className="skills__names">
                  <i className="bx bxl-react skills__icon"></i>
                  <span className="skill__name">React JS</span>
                </div>

                <div className="skills__bar skills__react"></div>
              </div>

              <div className="skills__data">
                <div className="skills__names">
                  <i className="bx bx-code-alt skills__icon"></i>
                  <span className="skill__name">Java</span>
                </div>
                <div className="skills__bar skills__react"></div>
              </div>
              <div className="skills__data">
                <div className="skills__names">
                  <i className="bx bxl-javascript  skills__icon"></i>
                  <span className="skill__name">Javascript</span>
                </div>

                <div className="skills__bar skills__js"></div>
              </div>
              <div className="skills__data">
                <div className="skills__names">
                  <i className="bx bxl-css3  skills__icon"></i>
                  <span className="skill__name">CSS3</span>
                </div>

                <div className="skills__bar skills__css"></div>
              </div>
              <div className="skills__data">
                <div className="skills__names">
                  <i className="bx bxl-html5  skills__icon"></i>
                  <span className="skill__name">HTML5</span>
                </div>

                <div className="skills__bar skills__mern"></div>
              </div>
              <div className="skills__data">
                <div className="skills__names">
                  <i className="bx bx-layer skills__icon"></i>
                  <span className="skill__name">MERN STACK</span>
                </div>
                <div className="skills__bar skills__mern"></div>
              </div>
            </div>
          </div>
        </section>

        <section className="work section" id="work">
          <h2 className="section-title">Work</h2>

          <div className="intern__container bd-grid">
            <div>
              <h2 className="skills__subtitle">Internship Experience</h2>
              <p className="skills__text">
                I gained proficiency in CSS, JavaScript, React Native, and React
                concepts through their practical implementations in company's
                live projects. I learnt how APIs are used to fetch, put and
                update data on databases, and implementing dynamic contents in
                the application. Furthermore in adding the final touch comprises
                of making the application responsive, attractive, and
                interactive.
              </p>
            </div>

            <div className="intern__data bd-grid">
              <div className="intern__item">
                <h3>1. Electromotion E-Vidyut Vehicales pvt. ltd.</h3>
                <p className="text-bold">(Full Stack Engineer Intern)</p>
                <p className="text-bold skills__text">Duration: 2 months</p>
                <p className="skills__text">
                  I extend my sincere regards to the team at Evidyut for providing me with 
                  the opportunity to work as a Software Development Engineer Intern from 
                  September 23, 2024 to November 7, 2024. During this period, I gained 
                  valuable industrial exposure, enhanced my programming skills, and learned 
                  practical aspects of real-world software development while completing assigned
                  tasks on time.
                </p>

                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://drive.google.com/file/d/1P216tsG4N3l7k77mwI8tqaobKDHzu2Lr/view?usp=drive_link"
                  className="button skills__text btn-grad"
                >
                  Certificate
                </a>
              </div>

              <div className="intern__item">
                <h3>2. BIT Mesra Ranchi Jharkhand</h3>
                <p className="text-bold">(Software Engineer Intern)</p>
                <p className="text-bold skills__text ">Duration: 1 months</p>
                <p className="skills__text">
                  I extend my sincere thanks to the team at BIT Mesra and ACM for providing me the 
                  opportunity to participate in the Summer Internship / Training program on Data 
                  Structures and Algorithm Design, where I enhanced my problem-solving skills and 
                  strengthened my understanding of fundamental programming concepts through practical 
                  learning and guidance.
                </p>

                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://drive.google.com/file/d/1P0Q0O-ihWg6k5QPMlHb_lK6q21s5mh46/view?usp=drive_link"
                  className="button skills__text btn-grad"
                >
                  Certificate
                </a>
              </div>
            </div>
          </div>
          <div className="project__container bd-grid">
            <div>
              <h2 className="skills__subtitle">Projects</h2>
              <p className="skills__text">
                Projects are an important way to apply technical knowledge to real-world problems. 
                During my engineering journey, I have worked on projects using technologies such 
                as Java, Data Structures & Algorithms, and the MERN stack to build practical web 
                applications. These projects helped me strengthen my problem-solving ability, improve 
                coding practices, and gain hands-on experience with modern development tools. Working 
                on projects also enhanced my teamwork, communication, and time-management skills while 
                developing solutions that reflect real-world software development practices.
              </p>
            </div>
            <div className="work__container bd-grid">
              <div className="work__img">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href=""
                >
                  <div className="work__item"></div>
                  <h1>Interview Prepration Platform</h1>
                  <img alt="Pathshala App" src={pic1} />
                </a>
              </div>

              <div className="work__img">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href=""
                >
                  <div className="work__item"></div>
                  <h1>Zareno Parlour MERN Stack</h1>
                  <img alt="Colonbreakers" src={pic2} />
                </a>
              </div>

              <div className="work__img">
                <a href="">
                  <div className="work__item"></div>
                  <h1>Task Manager Application</h1>
                  <img alt="notes-app" src={pic3} />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="certifications section" id="certifications">
          <h2 className="section-title">Certifications</h2>
          <div className="certificate__container bd-grid">
            <div className="work__container bd-grid">
              <div className="work__img">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://drive.google.com/file/d/16ag0jyVTqSXgtOXY_XDO3hv-rkCZWC1i/view?usp=drive_link"
                >
                  <div className="work__item"></div>
                  <h1>
                    
                  </h1>
                  <img alt="Mentorship" src={tek} />
                </a>
              </div>

              <div className="work__img">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://drive.google.com/file/d/1P0Q0O-ihWg6k5QPMlHb_lK6q21s5mh46/view?usp=drive_link"
                >
                  <div className="work__item"></div>
                  <h1></h1>
                  <img alt="git" src={dsa} />
                </a>
              </div>

              <div className="work__img">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href=""
                >
                  <div className="work__item"></div>
                  <h1>
                    
                  </h1>
                  <img alt="js-course" src={jsCourse} />
                </a>
              </div>

              <div className="work__img">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href=""
                >
                  <div className="work__item"></div>
                  <h1></h1>
                  <img alt="mjs-course" src={mjsCourse} />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="contact section" id="contact">
        <h2 className="section-title">Contact</h2>

        <div className="contact__container bd-grid">

        <form className="contact__form" onSubmit={handleSubmit}>

      <input
        type="text"
        name="name"
        placeholder="Your Name"
        className="contact__input"
        value={formData.name}
        onChange={handleChange}
        required
      />

      <input
        type="email"
        name="email"
        placeholder="Your Email"
        className="contact__input"
        value={formData.email}
        onChange={handleChange}
        required
      />

      <textarea
        name="message"
        rows="8"
        placeholder="Your Message"
        className="contact__input"
        value={formData.message}
        onChange={handleChange}
        required
      ></textarea>

      <button
        type="submit"
        className="contact__button button btn-grad"
      >
        Send Message
      </button>

    </form>

  </div>
</section>
      </main>

      <footer className="footer">
        <p className="footer__title">Nilesh</p>

        <div className="footer__social">
          <a
              href="http://www.linkedin.com/in/rnilesh"
              className="footer__icon"
            >
              <i className="bx bxl-linkedin"></i>
          </a>
          <a
            href="https://www.instagram.com/imnilesh60"
            className="footer__icon"
          >
            <i className="bx bxl-instagram"></i>
          </a>
          <a
              href="https://github.com/rnileshk"
              className="footer__icon"
            >
              <i className="bx bxl-github"></i>
            </a>
        </div>
        <p>© {new Date().getFullYear()} copyright all rights reserved</p>
      </footer>
      <Particles className="my-particles" params={myParticlesConfig} />
    </div>
  );
}
