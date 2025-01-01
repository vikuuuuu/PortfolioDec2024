import "./Home.css";
import Image from "../Images/1.jpg";
import Svelteicon from "../Images/svelte-icon.svg";

import APWebsite from "../Images/ap website.png";
import APDashboard from "../Images/AP Dashboard.jpeg";
import OnlineExam from "../Images/onlineExam.png";
import MyPort from "../Images/portfolio image.png";
import Calculator from "../Images/Calculator image.png";
import CloudComputing from "../Images/cloud.png";
import Cyber from "../Images/cyber.png";
import Cloud from "../Images/cloud.png";
import Computer from "../Images/computer-networks.png";
import Server from "../Images/computer.png";
import Programming from "../Images/coding.png";
import NetworkDesign from "../Images/Network Designing.png";

import React, { useEffect, useRef, useState } from "react";

import Aos from "aos";
import "aos/dist/aos.css";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import emailjs from "@emailjs/browser";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          arrows: false,
          dots: true,
        },
      },
      {
        breakpoint: 860,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className="carousel-container" data-aos="fade-down">
      <Slider {...settings}>
        <div className="project-slide">
          <img src={OnlineExam} alt="ProjectImage" className="project-image" />
          <h1 className="project-heading-name">Online Exam Dashboard</h1>
          <p className="visit-website">
            Visit :-{" "}
            <a href="https://quizmasterr-eta.vercel.app/">Quiz Master</a>
          </p>
          <p className="project-details">
            I am Developing an online Examination Dashboard using React js,
            aiming for an intuitive user experience and real-time updates.
          </p>
        </div>
        <div className="project-slide">
          <img src={APWebsite} alt="ProjectImage" className="project-image" />
          <h1 className="project-heading-name">ApnaBackup Website</h1>
          <p className="visit-website">
            Visit :- <a href="https://apnabackup.com">ApnaBackup Website</a>
          </p>
          <p className="project-details">
            I am Creating a project in React JS for a Software Website named
            ApnaBackup. This Project aims to provide a comprehensive solution
            for data backup and recovery.
          </p>
        </div>
        <div className="project-slide">
          <img src={APDashboard} alt="ProjectImage" className="project-image" />
          <h1 className="project-heading-name">ApnaBackup Dashboard</h1>
          <p className="visit-website">Visit :- Not Available</p>
          <p className="project-details">
            ApnaBackup Website is a business-oriented backup Software that
            offers real-time data protection and secure cloud storage. The
            Project is still in progress and not yet completed.
          </p>
        </div>

        <div className="project-slide">
          <img src={MyPort} alt="ProjectImage" className="project-image" />
          <h1 className="project-heading-name">My Portfolio</h1>
          <p className="visit-website">
            Visit :- <a href="/">Personal Portfolio</a>
          </p>
          <p className="project-details">
            I Create a project in React Js for my Personal Portfolio. This
            project will showcase my skills, project and experience in front-end
            Development.
          </p>
        </div>
        <div className="project-slide">
          <img src={Calculator} alt="ProjectImage" className="project-image" />
          <h1 className="project-heading-name">Calculator Project</h1>
          <p className="visit-website">
            Visit :-{" "}
            <a href="https://calculator-vikuu.vercel.app/">
              Calculator Project
            </a>
          </p>
          <p className="project-details">
            I built a project with a calculator and age calculator using HTML,
            CSS, and JavaScript, where JavaScript functions manage button
            interactions, calculations, and result displays.
          </p>
        </div>
      </Slider>
    </div>
  );
};

function Home() {
  useEffect(() => {
    Aos.init({ duration: 1000, offset: 120, delay: 100 });
  }, []);


  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const toggleButton = () => {
      if (window.pageYOffset > 300) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener("scroll", toggleButton);

    // Clean up the event listener
    return () => {
      window.removeEventListener("scroll", toggleButton);
    };
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const typingTimeoutRef = useRef(null);
  const erasingTimeoutRef = useRef(null);
  const currentTextIndexRef = useRef(0);
  const currentCharIndexRef = useRef(0);

  useEffect(() => {
    const textElement = document.getElementById("Typing");
    const texts = ["Front-end Developer 💻", "Graphic Designer 🎨"];
    const typingSpeed = 100;
    const delayBetweenTexts = 1000;

    function type() {
      const currentTextIndex = currentTextIndexRef.current;
      const currentCharIndex = currentCharIndexRef.current;

      if (currentCharIndex < texts[currentTextIndex].length) {
        textElement.textContent +=
          texts[currentTextIndex].charAt(currentCharIndex);
        currentCharIndexRef.current += 1;
        typingTimeoutRef.current = setTimeout(type, typingSpeed);
      } else {
        erasingTimeoutRef.current = setTimeout(erase, delayBetweenTexts);
      }
    }

    function erase() {
      const currentTextIndex = currentTextIndexRef.current;
      const currentCharIndex = currentCharIndexRef.current;

      if (currentCharIndex > 0) {
        textElement.textContent = texts[currentTextIndex].substring(
          0,
          currentCharIndex - 1
        );
        currentCharIndexRef.current -= 1;
        erasingTimeoutRef.current = setTimeout(erase, typingSpeed);
      } else {
        currentTextIndexRef.current = (currentTextIndex + 1) % texts.length;
        currentCharIndexRef.current = 0;
        typingTimeoutRef.current = setTimeout(type, typingSpeed);
      }
    }

    // Start the typing effect
    type();

    // Cleanup function to clear timeouts if the component unmounts
    return () => {
      clearTimeout(typingTimeoutRef.current);
      clearTimeout(erasingTimeoutRef.current);
    };
  }, []);


  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e) => {
  e.preventDefault();
  
  try {
    // Send email to website owner
    await emailjs.send(
      "service_wa0f4cb",
      "template_55mms3g",
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        
      },
      "7SkGkFVaQN-Me01Le"
    );

    // Send thank you email to sender
    await emailjs.send(
      "service_wa0f4cb", 
      "template_j1qd0zq", // Create new template for thank you emails
      {
        to_email: formData.email,
        to_name: formData.name,
        original_message: formData.message
      },
      "7SkGkFVaQN-Me01Le"
    );

    alert("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  } catch (error) {
    alert("Failed to send message. Please try again.");
  }
};

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <div className="Home" id="Home">
        <div className="ProfileContainer">
          <div className="ProfileName1">I am Vikash Sharma</div>
          <div className="ProfileName2">
            & I'm <span id="Typing" className="Typing"></span>
          </div>
          <div className="ProfileIcon">
            <a href="https://www.linkedin.com/in/vikash-sharma-48b27a263/">
              {" "}
              <i className="bx bxl-linkedin linkedin"></i>
            </a>
            <a href="https://x.com/vikashsrma">
              {" "}
              <i className="fa-brands fa-x-twitter twitter"></i>
            </a>
            <a href="https://wa.me/919571404881?text=Hello%2C%20Vikash%20Sharma">
              {" "}
              <i className="bx bxl-whatsapp whatsapp"></i>
            </a>
          </div>
          <div className="Profilebtn">
            <a href="#Contact">Get in Touch</a>
          </div>
        </div>
        <img className="Profile" src={Image} alt="Profile" />
      </div>

      {/* Here the start the About page */}
      <section className="About" id="About">
        <h1 className="AboutTitle" data-aos="fade-down">
          About Me
        </h1>
        <div className="AboutContaienr">
          <div className="AboutDetails" data-aos="fade-down">
            <p>
              I'm a frontend web developer and graphic designer, adept at
              weaving together code, design, and creative solutions to craft
              captivating digital experiences. With a strong foundation in
              React.js and Svelte.js, I specialize in bringing websites to life
              through innovative problem-solving and meticulous attention to
              detail. My journey is fueled by a passion for transforming ideas
              into user-friendly interfaces that engage and inspire. By
              seamlessly integrating frontend and design principles, I aim to
              create memorable online experiences that resonate with audiences.
              Let's collaborate and bring your vision to reality with
              cutting-edge technology and thoughtful design.
            </p>
          </div>
        </div>
      </section>

      <section className="Skill" id="Skill">
        <h1 className="SkillTitle" data-aos="fade-down">
          Technical Skills
        </h1>
        <div className="SkillContainer">
          <div className="SoftwareSkillContainer">
            <div className="SkillContainerbtn" data-aos="zoom-in-up">
              <div className="SkillContainerbtn-title">
                <i className="bx bxl-react"></i> <h4>React Js</h4>
              </div>
              <div className="skill-bar">
                <span className="skill-per react-js">
                  <span className="tooltip">75%</span>
                </span>
              </div>
            </div>
            <div className="SkillContainerbtn" data-aos="zoom-in-up">
              <div className="SkillContainerbtn-title">
                <img src={Svelteicon} alt="img" />
                <h4>Svelte Js</h4>
              </div>
              <div className="skill-bar">
                <span className="skill-per svelte-js">
                  <span className="tooltip">65%</span>
                </span>
              </div>
            </div>
            <div className="SkillContainerbtn" data-aos="zoom-in-up">
              <div className="SkillContainerbtn-title">
                <i className="bx bxl-react"></i>
                <h4>React Native</h4>
              </div>
              <div className="skill-bar">
                <span className="skill-per react-native">
                  <span className="tooltip">45%</span>
                </span>
              </div>
            </div>
            <div className="SkillContainerbtn" data-aos="zoom-in-up">
              <div className="SkillContainerbtn-title">
                <i className="bx bxl-python" style={{ color: "#2430c5" }}></i>
                <h4>Python</h4>
              </div>
              <div className="skill-bar">
                <span className="skill-per python">
                  <span className="tooltip">30%</span>
                </span>
              </div>
            </div>
            <div className="SkillContainerbtn" data-aos="zoom-in-up">
              <div className="SkillContainerbtn-title">
                <i className="bx bxl-html5" style={{ color: "#2430c5" }}></i>
                <h4>HTML</h4>
              </div>
              <div className="skill-bar">
                <span className="skill-per html">
                  <span className="tooltip">85%</span>
                </span>
              </div>
            </div>
            <div className="SkillContainerbtn" data-aos="zoom-in-up">
              <div className="SkillContainerbtn-title">
                <i className="bx bxl-css3" style={{ color: "#2430c5" }}></i>{" "}
                <h4>CSS</h4>
              </div>
              <div className="skill-bar">
                <span className="skill-per css">
                  <span className="tooltip">80%</span>
                </span>
              </div>
            </div>
            <div className="SkillContainerbtn" data-aos="zoom-in-up">
              <div className="SkillContainerbtn-title">
                <i
                  className="bx bxl-javascript"
                  style={{ color: "#2430c5" }}
                ></i>{" "}
                <h4>JavaScript</h4>
              </div>
              <div className="skill-bar">
                <span className="skill-per js">
                  <span className="tooltip">30%</span>
                </span>
              </div>
            </div>
            <div className="SkillContainerbtn" data-aos="zoom-in-up">
              <div className="SkillContainerbtn-title">
                <i
                  className="bx bxl-bootstrap"
                  style={{ color: "#2430c5" }}
                ></i>{" "}
                <h4>Boostrap</h4>
              </div>
              <div className="skill-bar">
                <span className="skill-per bootstrap">
                  <span className="tooltip">60%</span>
                </span>
              </div>
            </div>
            <div className="SkillContainerbtn" data-aos="zoom-in-up">
              <div className="SkillContainerbtn-title">
                <img src={CloudComputing} alt="img" />
                <h4>Cloud Computing</h4>
              </div>
              <div className="skill-bar">
                <span className="skill-per cloudComputing">
                  <span className="tooltip">60%</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="Education" id="Skill">
        <h1 className="EducationTitle" data-aos="fade-down">
          Education
        </h1>
        <div className="EducationContainer">
          <div className="EducationBox" data-aos="fade-down">
            <h2 className="EducationDegree">Bachelor of Vocational [B.Voc]</h2>
            <p className="EducationInstitution">
              Bhartiya Skill Development University, Jaipur
            </p>
            <div className="Courseware">
              <p className="CoursewareTitle">Relevant Coursework:</p>
              <div className="CourseList">
                <div className="CourseListName" data-aos="fade-down">
                  <img src={Cyber} alt="img" className="CourseIcon" />
                  <h5>Cyber Security</h5>
                  <p className="CourseDescription">
                    Understanding of network security protocols and ethical
                    hacking.
                  </p>
                </div>
                <div className="CourseListName" data-aos="fade-down">
                  <img src={Cloud} alt="img" className="CourseIcon" />
                  <h5>Cloud Computing</h5>
                  <p className="CourseDescription">
                    Experience with cloud platforms like AWS and Google Cloud.
                  </p>
                </div>
                <div className="CourseListName" data-aos="fade-down">
                  <img src={Computer} alt="img" className="CourseIcon" />
                  <h5>Computer Networking</h5>
                  <p className="CourseDescription">
                    Knowledge of routing, switching, and network protocols.
                  </p>
                </div>
                <div className="CourseListName" data-aos="fade-down">
                  <img src={Server} alt="img" className="CourseIcon" />
                  <h5>Windows Server Administration</h5>
                  <p className="CourseDescription">
                    Hands-on experience with Windows Server management and
                    configuration.
                  </p>
                </div>
                <div className="CourseListName" data-aos="fade-down">
                  <img src={Programming} alt="img" className="CourseIcon" />
                  <h5>Python Programming</h5>
                  <p className="CourseDescription">
                    Proficient in Python for both backend and scripting tasks.
                  </p>
                </div>
                <div className="CourseListName" data-aos="fade-down">
                  <img src={NetworkDesign} alt="img" className="CourseIcon" />
                  <h5>Network Designing</h5>
                  <p className="CourseDescription">
                    Experience in designing efficient network topologies for
                    large-scale infrastructures.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="Project" id="Project">
        <h1 className="ProjectTitle" data-aos="fade-down">
          Projects
        </h1>
        <Carousel />
      </section>

      <section className="Contact" id="Contact">
        <h1 className="ContactTitle" data-aos="zoom-in-down">
          Get in Touch
        </h1>

        <form
          className="contact-form"
          onSubmit={handleSubmit}
          data-aos="fade-up"
          data-aos-offset="130"
        >
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="submit-btn">
            Send Message
          </button>
        </form>
        <div className="ContactCopyrightContainer">
          <p
            className="ContactCopyright"
            data-aos="fade-up"
            data-aos-offset="1"
            data-aos-duration="10"
          >
            <i className="fa-regular fa-copyright"></i> 2024 Vikash Sharma. All
            rights reserved.
          </p>

          <div
            className="ContactSocaillink"
            data-aos="fade-up"
            data-aos-offset="1"
            data-aos-duration="10"
          >
            <a href="https://www.linkedin.com/in/vikash-sharma-48b27a263/">
              <i className="bx bxl-linkedin"></i>
            </a>
            <a href="https://x.com/vikashsrma">
              <i className="fa-brands fa-x-twitter"></i>
            </a>
            <a href="https://wa.me/919571404881?text=Hello%2C%20Vikash%20Sharma">
              <i className="bx bxl-whatsapp"></i>
            </a>
          </div>
        </div>
        {showScrollButton && (
          <button className="topArrowbtn" onClick={handleScrollToTop}>
            <i className="bx bx-chevron-up"></i>
          </button>
        )}
      </section>
    </>
  );
}
export default Home;
