import { Link } from "react-router-dom";
import "./index.css";

const Navbar = (props) => {
  const { dark, updateState } = props;
  const changeState = () => {
    updateState();
  };
  return (
    <div
      className={
        dark === false ? "navbar-main-container" : "navbar-main-container-dark"
      }
    >
      <div className="navbar-first-container">
        <img
          src={
            dark === false
              ? "https://res.cloudinary.com/duqy1baw3/image/upload/v1711075990/Logo_iv0mev.svg"
              : "https://res.cloudinary.com/duqy1baw3/image/upload/v1711092202/Group_15_bpeco9.png"
          }
          className=""
          alt=""
        />
        <h1
          className={
            dark === false ? "navbar-first-head" : "navbar-first-head-dark"
          }
        >
          ANISH KUMAR SINHA
        </h1>
      </div>
      <div className="navbar-second-container">
        <Link to="/" className="navbar-second-container-link">
          <h1
            className={
              dark === false
                ? "navbar-second-container-h1"
                : "navbar-second-container-h1-dark"
            }
          >
            Home
          </h1>
        </Link>
        <Link to="/about" className="navbar-second-container-link">
          <h1
            className={
              dark === false
                ? "navbar-second-container-h1"
                : "navbar-second-container-h1-dark"
            }
          >
            About
          </h1>
        </Link>
        <h1
          className={
            dark === false
              ? "navbar-second-container-h1"
              : "navbar-second-container-h1-dark"
          }
        >
          Resume
        </h1>
        <h1
          className={
            dark === false
              ? "navbar-second-container-h1"
              : "navbar-second-container-h1-dark"
          }
        >
          Skills
        </h1>
        <h1
          className={
            dark === false
              ? "navbar-second-container-h1"
              : "navbar-second-container-h1-dark"
          }
        >
          Projects
        </h1>
        <h1
          className={
            dark === false
              ? "navbar-second-container-h1"
              : "navbar-second-container-h1-dark"
          }
        >
          Contact
        </h1>
        <button
          type="button"
          onClick={changeState}
          className="navbar-button-light-dark"
        >
          <img
            src={
              dark === false
                ? "https://res.cloudinary.com/duqy1baw3/image/upload/v1711076113/Moon_ibcouh.png"
                : "https://res.cloudinary.com/duqy1baw3/image/upload/v1711092162/Group_21_woksak.png"
            }
            alt=""
            className="navbar-second-container-img"
          />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
