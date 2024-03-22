import "./index.css";

const Home = (props) => {
  const { dark } = props;
  return (
    <div
      className={
        dark === false
          ? "home-nav-content-main-container"
          : "home-nav-content-main-container-dark"
      }
    >
      <div className="home-content-main-container">
        <div className="home-content-container">
          <button className="home-content-hello-text">Hello!</button>
          <h1
            className={
              dark === false
                ? "home-content-container-h1"
                : "home-content-container-h1-dark"
            }
          >
            I'm{"  "}
            <span
              className={
                dark === false
                  ? "home-content-container-h1-span"
                  : "home-content-container-h1-span-dark"
              }
            >
              Anish
            </span>{" "}
            <img
              src="https://res.cloudinary.com/duqy1baw3/image/upload/v1711082281/Wave_wlowyi.svg"
              alt=""
            />
          </h1>
          <p
            className={
              dark === false
                ? "home-content-container-p"
                : "home-content-container-p-dark"
            }
          >
            UI/UX Designer, Front-End Developer & Thinker. Based in India.
          </p>
          <div className="home-content-buttons-container">
            <button
              type="button"
              className={
                dark === false ? "button-download" : "button-download-dark"
              }
            >
              Download CV
            </button>
            <button
              type="button"
              className={
                dark === false ? "button-in-touch" : "button-in-touch-dark"
              }
            >
              Get in Touch!
            </button>
          </div>
        </div>
        <img
          src="https://res.cloudinary.com/duqy1baw3/image/upload/v1711077105/Image_add4av.png"
          alt=""
        />
      </div>
      <div className="home-social-links-container">
        <img
          src={
            dark === false
              ? "https://res.cloudinary.com/duqy1baw3/image/upload/v1711083505/Facebook_upebko.png"
              : "https://res.cloudinary.com/duqy1baw3/image/upload/v1711093706/Group_9_f77pae.png"
          }
          alt=""
        />
        <img
          src={
            dark === false
              ? "https://res.cloudinary.com/duqy1baw3/image/upload/v1711083544/Instagram_mijk0s.png"
              : "https://res.cloudinary.com/duqy1baw3/image/upload/v1711093733/Group_7_dlady4.png"
          }
          alt=""
        />
        <img
          src={
            dark === false
              ? "https://res.cloudinary.com/duqy1baw3/image/upload/v1711083584/Twitter_pvenhg.png"
              : "https://res.cloudinary.com/duqy1baw3/image/upload/v1711093749/Group_8_bxqav7.png"
          }
          alt=""
        />
        <img
          src={
            dark === false
              ? "https://res.cloudinary.com/duqy1baw3/image/upload/v1711083603/GitHub_w5qukd.png"
              : "https://res.cloudinary.com/duqy1baw3/image/upload/v1711093763/Group_10_pngnzn.png"
          }
          alt=""
        />
        <img
          src={
            dark === false
              ? "https://res.cloudinary.com/duqy1baw3/image/upload/v1711083654/LinkedIn_mjvipo.png"
              : "https://res.cloudinary.com/duqy1baw3/image/upload/v1711093780/Group_11_rgwoos.png"
          }
          alt=""
        />
        <img
          src={
            dark === false
              ? "https://res.cloudinary.com/duqy1baw3/image/upload/v1711083663/Telegram_yvqdjk.png"
              : "https://res.cloudinary.com/duqy1baw3/image/upload/v1711093797/Group_12_j46pjd.png"
          }
          alt=""
        />
        <img
          src={
            dark === false
              ? "https://res.cloudinary.com/duqy1baw3/image/upload/v1711083702/Koo_qkxrlo.png"
              : "https://res.cloudinary.com/duqy1baw3/image/upload/v1711096330/Screenshot_19_kwadgy.png"
          }
          alt=""
        />
      </div>
      <div className="home-email-container">
        <h1
          className={
            dark === false
              ? "home-email-container-h1"
              : "home-email-container-h1-dark"
          }
        >
          sinhaanishkumar@outlook.com
        </h1>
        <hr
          className={
            dark === false
              ? "home-email-container-hr"
              : "home-email-container-hr-dark"
          }
        />
      </div>
    </div>
  );
};

export default Home;
