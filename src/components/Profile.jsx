import React from "react";
import styled from "styled-components";
import { AiFillGithub, AiFillLinkedin, AiFillFacebook } from "react-icons/ai";

export default function Profile({ darkMode }) {
  return (
    <StyledProfile darkMode={darkMode}>
      <div className="avatar"></div>
      <div className="about-me">
        <h1>Giorgi Gengashvili</h1>
        <p>Full Stack Web Developer</p>
        <AiFillGithub size={24} />
        <AiFillLinkedin size={24} />
        <AiFillFacebook size={24} />
      </div>
      <div className="buttons-wrapper">
        <button className="download-btn">Download CV</button>
        <button className="contact-btn">Contact Me</button>
      </div>
    </StyledProfile>
  );
}

const StyledProfile = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 28px 0 0 0;
  .avatar {
    width: 124px;
    height: 124px;
    background-color: #ffe071;
    border-radius: 100%;
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
    button {
      width: 158px;
      height: 44px;
      margin: 10px;
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
`;
