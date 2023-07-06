import { useState } from "react";
import GlobalStyles from "./assets/GlobalStyles";
import styled from "styled-components";
import ThemeSwitcher from "./components/ThemeSwitcher";
import Profile from "./components/Profile";
import SkillsContainer from "./components/SkillsContainer";
import ProjectsContainer from "./components/ProjectsContainer";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <>
      <GlobalStyles darkMode={darkMode} />
      <MainWrapper>
        <ThemeSwitcher setDarkMode={setDarkMode} darkMode={darkMode} />
        <Profile darkMode={darkMode} />
        <ProjectsContainer darkMode={darkMode} />
        <SkillsContainer darkMode={darkMode} />
        <ContactMe darkMode={darkMode} />
        <Footer/>
      </MainWrapper>
    </>
  );
}

export default App;

const MainWrapper = styled.div`
  position: relative;
  margin: 20px auto 0 auto;
  max-width: 95%;
  /* border: 1px blue solid; */
`;
