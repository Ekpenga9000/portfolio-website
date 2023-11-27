import "./Hero.scss";
import dev from "../../assets/images/Louis.jpg"

const Hero = () =>{
    return(
        <section className="hero">
            <div className="hero__container">
            <div className="hero__intro">
                <h1 className="hero__title">Hi 👋🏽, My name is Omogbare Louis Ekpenga. </h1>
                <p className="hero__text">I'm a software developer 👨🏾‍💻 based in 📍Alberta.</p>
            </div>
            <div className="hero__img-div">
                <img src={dev} alt="Omogbare Louis Ekpenga" className="hero__img"/>
            </div>
            </div>
        </section>
    )
}

export default Hero; 