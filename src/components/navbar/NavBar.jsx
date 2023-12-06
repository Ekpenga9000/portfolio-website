import "./NavBar.scss";
import {useState} from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";
import file from "../../assets/resume/Omogbare_Louis_Ekpenga_ab.pdf";
import DownloadButton from "../download/DownloadButton";
const NavBar = ({ handleResume, isResume }) =>{
    const [isDropdown, setIsDropdown] = useState(false); 

    const fileName = "Omogbare_Louis_Ekpenga_Resume.pdf";

    const handleMenu = () =>{
        setIsDropdown(!isDropdown);
    }
    return(
        <nav className="nav">
            <h3 className="nav__logo">Omogbare Louis Ekpenga</h3>

            <div className="nav__btn" onClick={handleMenu}>{!isDropdown && <RxHamburgerMenu />}{isDropdown && <IoCloseOutline />}</div>

            <ul className="nav__menu--desktop">
                <li className="nav__item"><a href="#about" className="nav__item">Who am I?</a></li>
                <li className="nav__item">Projects</li>
                <li className="nav__item">Contact me</li>
                {isResume && <li className="nav__item" onClick={() => { handleResume() }}>Close Resume</li>}
                {!isResume && <li className="nav__item" onClick={() => { handleResume() }}>View Resume</li>}
            </ul>

            {isDropdown && <ul className="nav__dropdown">
                <li className="nav__item">Who am I?</li>
                <li className="nav__item">Projects</li>
                <li className="nav__item">Contact me</li>
                <li className="nav__item">Resume</li>
            </ul>}

        </nav>
    )
}

export default NavBar; 