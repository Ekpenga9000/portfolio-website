import "./About.scss";
import dev from "../../assets/images/Louis.jpg";
import Card from "../card/Card";
import fileUrl from "../../assets/resume/OMOGBARE_LOUIS_EKPENGA_Resume.pdf";

const About = () => {
  const fileName = "OMOGBARE_LOUIS_EKPENGA_Resume.pdf";
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="about" id="about">
      <div className="about__container container">
        <h2 className="about__title">About Me</h2>
        <span className="about__sub-title">An enthusiastic Developer</span>
        <div className="about__main">
          <div className="about__img-div">
            <img
              src={dev}
              alt="Picture of Louis smiling"
              className="about__img"
            />
          </div>
          <div className="about__content">
            <div className="about__card-list">
              <Card
                icon={"bx bx-badge-check"}
                title={"Experience"}
                message={"5+ years"}
              />
              <Card
                icon={"bx bx-briefcase-alt"}
                title={"Completed"}
                message={"30+ Projects"}
              />
              <Card
                icon={"bx bx-code"}
                title={"Enthusiasm"}
                message={"100%"}
              />
            </div>
            <p className="about__msg">
              An enthusiastic software developer with a passion for crafting
              clean, efficient code. Specializing in web development, I bring
              creativity and technical expertise to every project. Let's build
              something remarkable together 🤝.
            </p>
            <button onClick={handleDownload} className="about__btn">
              Download CV
              <i className="uil uil-message about__send"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
