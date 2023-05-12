import { useState } from "react";
import GlobalStyles from "./assets/GlobalStyles";
import styled from "styled-components";
import ThemeSwitcher from "./components/ThemeSwitcher";
import Profile from "./components/Profile";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <>
      <GlobalStyles darkMode={darkMode} />
      <MainWrapper>
        <ThemeSwitcher setDarkMode={setDarkMode} darkMode={darkMode} />
        <Profile darkMode={darkMode}/>
      </MainWrapper>
    </>
  );
}

export default App;

const MainWrapper = styled.div`
  position: relative;
  margin: 20px auto 0 auto;
  max-width:90%;
  border: 1px red solid;
`;
