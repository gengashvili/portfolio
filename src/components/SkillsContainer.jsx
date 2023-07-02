import styled from "styled-components";
import skillsData from "../assets/skillsData";

export default function SkillsContainer({ darkMode }) {
  return (
    <Wrapper>
      <h2 className="grid-heading">Tech Skills:</h2>
      {skillsData.map((skill) => (
        <Skill key={skill} darkMode={darkMode}>
          {skill}
        </Skill>
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin: 20px auto;
  max-width: 1240px;
  @media (min-width: 540px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const Skill = styled.div`
  background-color: ${({ darkMode }) => (darkMode ? "#171F26" : "#FFFFFF")};
  color: ${({ darkMode }) => (darkMode ? "#F1F2F4" : "#3D3D3D")};
  font-size: 1.6rem;
  padding: 10px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  @media (min-width: 540px) {
    font-size: 1.8rem;
    padding: 12px;
  }
  @media (min-width: 740px) {
    font-size: 2rem;
    padding: 15px;
  }
  @media (min-width: 1040px) {
    font-size: 2.1rem;
    padding: 18px;
  }
  @media (min-width: 1240px) {
    font-size: 2.4rem;
    padding: 20px;
  }
`;
