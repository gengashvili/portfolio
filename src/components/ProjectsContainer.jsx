import styled from "styled-components";
import projectsData from "../assets/projectsData";

const ProjectCard = ({ darkMode, cover, title, techStack, github, live }) => {
  return (
    <StyledProjectCard darkMode={darkMode}>
      <img src={cover} alt={title} />
      <h3>{title}</h3>
      <p>Created by: {techStack}</p>
      <div className="links-wrapper">
        <a className="btn" href={github} target="_blank">
          github
        </a>
        <a className="btn" href={live} target="_blank">
          live
        </a>
      </div>
    </StyledProjectCard>
  );
};

export default function ProjectsContainer({ darkMode }) {
  return (
    <Wrapper>
      <h2 className="grid-heading">Recent Projects:</h2>
      {projectsData.map((project) => {
        return (
          <ProjectCard
            key={project.title}
            darkMode={darkMode}
            cover={project.cover}
            title={project.title}
            techStack={project.createdBy}
            github={project.github}
            live={project.live}
          />
        );
      })}
    </Wrapper>
  );
}
const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  max-width: 1240px;
  margin: 0 auto;
  gap: 20px;
  @media (min-width: 540px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 940px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const StyledProjectCard = styled.div`
  background-color: ${({ darkMode }) => (darkMode ? "#171F26" : "#FFFFFF")};
  padding: 16px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  img {
    width: 100%;
  }
  h3 {
    color: ${({ darkMode }) => (darkMode ? "#F1F2F4" : "#3D3D3D")};
    font-size: 1.8rem;
    margin: 8px;
  }
  .links-wrapper {
    display: flex;
    gap: 10px;
    margin: 10px;
  }

  @media (min-width: 540px) {
    h3 {
      font-size: 2rem;
    }
  }
  @media (min-width: 740px) {
    h3 {
      font-size: 2.1rem;
    }
    .links-wrapper {
      a {
        width: 70px;
      }
    }
  }
  @media (min-width: 1040px) {
    h3 {
      font-size: 2.3rem;
    }
    .links-wrapper {
      a {
        width: 80px;
      }
    }
  }
  @media (min-width: 1240px) {
    h3 {
      font-size: 2.4rem;
    }
  }
`;
