import "./NavBar.scss";

const NavBar = () =>{
    return(
        <nav className="nav">
            <h3 className="nav__logo">Omogbare Louis Ekpenga</h3>

            <ul className="nav__menu">
                <li className="nav__item">About me</li>
                <li className="nav__item">Projects</li>
                <li className="nav__item">Contact me</li>
                <li className="nav__item">Resume</li>
            </ul>
        </nav>
    )
}

export default NavBar; 