import styled from "styled-components";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

export default function Profile({ darkMode }) {
  return (
    <StyledProfile darkMode={darkMode}>
      <div className="avatar"></div>
      <div className="about-me">
        <h1>Giorgi Gengashvili</h1>
        <p>Full Stack Web Developer</p>
        <div>
          <a href="https://github.com/gengashvili" target="_blank">
            <AiFillGithub size={32} />
          </a>
          <a
            href="https://www.linkedin.com/in/giorgi-gengashvili/"
            target="_blank"
          >
            <AiFillLinkedin size={32} />
          </a>
        </div>
      </div>
      <div className="buttons-wrapper">
        <button className="download-btn">Download CV</button>
        <button
          className="contact-btn"
          onClick={() => window.scrollTo(0, document.body.scrollHeight)}
        >
          Contact Me
        </button>
      </div>
    </StyledProfile>
  );
}

const StyledProfile = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  text-align: center;
  margin: 10px auto 10px auto;
  width: 800px;
  max-width: 90%;

  .avatar {
    width: 124px;
    height: 124px;
    background-color: #ffe071;
    border-radius: 100%;
    margin: 0 auto;
  }
  .about-me {
    h1 {
      margin: 5px 0;
    }
    p {
      margin: 5px 0;
    }
    svg {
      margin: 0 5px;
    }
  }
  .buttons-wrapper {
    display: flex;
    gap: 10px;
    width: 100%;
    margin: 10px 0;
    button {
      width: 50%;
      height: 44px;
      border: none;
      border-radius: 10px;
      font-size: 1.6rem;
    }
    .download-btn {
      background-color: #ffe071;
      color: #3d3d3d;
    }
    .contact-btn {
      background-color: ${({ darkMode }) => (darkMode ? "#171F26" : "#FFFFFF")};
      color: ${({ darkMode }) => (darkMode ? "#A3ABB2" : "#3D3D3D")};
    }
  }

  @media (min-width: 540px) {
    margin: 14px auto 14px auto;
  }
  @media (min-width: 740px) {
    margin: 18px auto 18px auto;
  }
  @media (min-width: 1040px) {
    margin: 24px auto 24px auto;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
    .avatar {
      grid-column: 1/2;
      width: 180px;
      height: 180px;
      margin-left: 20px;
    }
    .about-me {
      grid-column: 2/4;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      text-align: center;
    }
    .buttons-wrapper {
      grid-column: 1/-1;
      button {
        height: 60px;
        font-size: 2.2rem;
      }
    }
  }
  @media (min-width: 1240px) {
    margin: 40px auto 40px auto;
    .avatar {
      width: 200px;
      height: 200px;
    }
    .buttons-wrapper {
      button {
        height: 60px;
        font-size: 2.4rem;
      }
    }
  }
`;
