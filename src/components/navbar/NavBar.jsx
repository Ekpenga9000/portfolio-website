import "./NavBar.scss";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { IoIosArrowRoundBack } from "react-icons/io";

const NavBar = ({
  handleMenuToggle,
  isDropdown,
  handleResume,
  isResume,
  isContact,
  handleContactToggle,
}) => {
  const handleMenu = () => {
    handleMenuToggle();
  };

  const handleToggle = () => {
    handleResume();
    handleMenu();
  };

  const handleContact = () => {
    handleContactToggle();
  };

  return (
    <nav className="nav">
      <h3 className="nav__logo">Omogbare Louis Ekpenga</h3>
      <div className="nav__btn" onClick={handleMenu}>
        {!isDropdown && !isContact && <RxHamburgerMenu />}
        {isDropdown && !isContact && <IoCloseOutline />}
        {!isDropdown && isContact && <IoIosArrowRoundBack />}
      </div>

      <ul className="nav__menu--desktop">
        <li className="nav__item">
          <a href="#about" className="nav__item">
            Who am I?
          </a>
        </li>
        <li className="nav__item">
          <a href="#projects" className="nav__item">
            My Projects
          </a>
        </li>
        <li className="nav__item" onClick={handleContact}>
          Contact me
        </li>
        {isResume && (
          <li
            className="nav__item"
            onClick={() => {
              handleResume();
            }}
          >
            Close Resume
          </li>
        )}
        {!isResume && (
          <li
            className="nav__item"
            onClick={() => {
              handleResume();
            }}
          >
            View Resume
          </li>
        )}
      </ul>

      {isDropdown && (
        <ul className="nav__dropdown">
          <li className="nav__item" onClick={handleMenu}>
            <a href="#about" className="nav__item">
              Who am I?
            </a>
          </li>
          <li className="nav__item" onClick={handleMenu}>
            <a href="#projects" className="nav__item">
              My Projects
            </a>
          </li>
          <li className="nav__item">
            <a href="#footer" className="nav__item">
              Contact me
            </a>
          </li>
          {isResume && (
            <li className="nav__item" onClick={handleToggle}>
              Close Resume
            </li>
          )}
          {!isResume && (
            <li className="nav__item" onClick={handleToggle}>
              View Resume
            </li>
          )}
        </ul>
      )}

      {isContact && (
        <ul className="nav__dropdown">
          <li className="nav__item">
            <a href="https://github.com/Ekpenga9000" className="nav__item">
              <FaGithub />
            </a>
          </li>
          <li className="nav__item">
            <a
              href="https://www.linkedin.com/in/omogbareekpenga/"
              className="nav__item"
            >
              <FaLinkedin />
            </a>
          </li>

          <li className="nav__item">
            <a href="mailto:ekpenga9000@gmail.com" className="nav__item">
              <BiLogoGmail />
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default NavBar;
