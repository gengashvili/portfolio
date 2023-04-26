import React from "react";
import styled, { css } from "styled-components";
import { BsFillBrightnessHighFill, BsFillMoonFill } from "react-icons/bs";

export default function ThemeSwitcher({ darkMode, setDarkMode }) {
  return (
    <StyledSwitcher onClick={() => setDarkMode(!darkMode)} darkMode={darkMode}>
      {darkMode ? <SunIcon /> : <MoonIcon />}
    </StyledSwitcher>
  );
}

const StyledSwitcher = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 72px;
  height: 28px;
  background-color: ${({ darkMode }) => (darkMode ? "#FBEDB6" : "#043449")};
  border-radius: 20px;
  :hover {
    cursor: pointer;
  }
`;

const iconStyles = css`
  font-size: 24px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  border-radius: 50%;
  color: #ffffff;
  padding: 5px;
`;

const SunIcon = styled(BsFillBrightnessHighFill)`
 ${iconStyles}
  left: 2px;
  background-color: #f4ca25;
`;

const MoonIcon = styled(BsFillMoonFill)`
 ${iconStyles}
  right: 2px;
  background-color: #25b6f4;
`;