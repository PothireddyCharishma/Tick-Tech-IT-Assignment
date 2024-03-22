import "./index.css";
import "../Home/index.css";

const About = (props) => {
  const { dark } = props;
  return (
    <div
      className={dark === false ? "about-container" : "about-container-dark"}
    >
      <div className="about-main-container">
        <img
          src={
            dark === false
              ? "https://res.cloudinary.com/duqy1baw3/image/upload/v1711088320/Vector_1_f4oiep.png"
              : "https://res.cloudinary.com/duqy1baw3/image/upload/v1711095448/Vector_1_1_ez7jpa.png"
          }
          alt=""
        />
        <div className="about-content-container">
          <h1
            className={
              dark === false
                ? "about-content-container-h1"
                : "about-content-container-h1-dark"
            }
          >
            This is it. ;){" "}
            <hr
              className={
                dark === false
                  ? "about-content-hr-line"
                  : "about-content-hr-line-dark"
              }
            />
          </h1>
          <p
            className={
              dark === false
                ? "about-content-container-p"
                : "about-content-container-p-dark"
            }
          >
            Anish Kr. Sinha is an Indian{" "}
            <span
              className={
                dark === false
                  ? "about-content-container-p-span"
                  : "about-content-container-p-span-dark"
              }
            >
              UI/UX Designer & Front End Developer
            </span>{" "}
            with a passion for designing beautiful and fuctional user
            experiences. Typically, he’s Driven & permanently Curious. He’s
            obsessed with designing things and even more obsessed with designing
            cool & clean stuff for the web and mobile. He has been in the
            business of creating since he hung his first painting on the wall
            when he was 11.
            <br /> He holds a{" "}
            <span
              className={
                dark === false
                  ? "about-content-container-p-span"
                  : "about-content-container-p-span-dark"
              }
            >
              bachelor degree in Computer Applications
            </span>
            . During his graduation, he has been actively involved in the web
            design community for the last 3 years. he has designed websites for
            small businesses, events, nonprofits and more. Currently he’s based
            in Bihar,
            <span
              className={
                dark === false
                  ? "about-content-container-p-span"
                  : "about-content-container-p-span-dark"
              }
            >
              {" "}
              India
            </span>
            . Where he’s working as an independent creative.
            <br />
            <br /> His interests, however, extend beyond the web and he loves
            helping people with branding and print design. He even loves
            designing
            <span
              className={
                dark === false
                  ? "about-content-container-p-span"
                  : "about-content-container-p-span-dark"
              }
            >
              {" "}
              3D floor plan.
            </span>
            <br />
            <br /> When he’s not designing, he’s probably hanging out with his
            girlfriend, watching series, sketching or messing around on
            something inspired by YouTube tutorials.
          </p>
          <hr
            className={dark === false ? "about-hr-line" : "about-hr-line-dark"}
          />
        </div>
        <img
          src="https://res.cloudinary.com/duqy1baw3/image/upload/v1711088651/Vector_3_bnhsf5.png"
          alt=""
        />
      </div>
      <img
        src={
          dark === false
            ? "https://res.cloudinary.com/duqy1baw3/image/upload/v1711088636/Vector_4_vndku0.png"
            : "https://res.cloudinary.com/duqy1baw3/image/upload/v1711095251/Vector_4_1_wdl5vn.png"
        }
        className="about-container-img1"
        alt=""
      />
      <img
        src={
          dark === false
            ? "https://res.cloudinary.com/duqy1baw3/image/upload/v1711088663/Vector_5_vl33bh.png"
            : "https://res.cloudinary.com/duqy1baw3/image/upload/v1711095168/Vector_5_1_n1qwu7.png"
        }
        className="about-container-img2"
        alt=""
      />
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

export default About;
