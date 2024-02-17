import "./About.scss";
import dev from "../../assets/images/Louis.jpg";
import AboutInfo from "../aboutInfo/AboutInfo";
import Card from "../card/Card";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about__container container">
        <h3 className="about__title">About Me</h3>
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
              <Card icon={"bx bx-badge-check"} />
              <Card icon={"bx bx-badge-check"} />
              <Card icon={"bx bx-badge-check"} />
            </div>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus
              quod est atque. Temporibus, inventore. Obcaecati quae voluptas ad
              quia nam.
            </p>
            <button>Download CV</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
