import { useState } from "react";
import GlobalStyles from "./assets/GlobalStyles";
import styled from "styled-components";
import ThemeSwitcher from "./components/ThemeSwitcher";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <>
      <GlobalStyles darkMode={darkMode} />
      <ThemeSwitcher setDarkMode={setDarkMode} darkMode={darkMode}/>
      <p>hello</p>
    </>
  );
}

export default App;

const MainWrapper = styled.div``;
