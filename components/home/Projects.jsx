import styled from "styled-components";
import Project from "./Project";

export default function Projects() {
  return (
    <Container>
      <Title></Title>
      <ProjectsGrid>
        {projects.map((project) => {
          return <Project key={project.id} data={project}></Project>;
        })}
      </ProjectsGrid>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 200px 0px;
`;

const ProjectsGrid = styled.div`
  padding: 0px 100px;
`;

const Title = styled.div`
  width: 200px;
  height: 2px;
  background-color: black;
  left: 0;
  position: relative;

  ::after {
    content: "Projects";
    position: absolute;
    left: 230px;
    bottom: -30px;
    font-size: 4em;
  }
`;

const projects = [
  {
    id: 1,
    name: "Outstagramm",
    description: "social media",
    imageURL: "/astronaut-ingravity.svg",
    webURL: "https://google.com",
    githubURL: "https://saihtun/outstagramm",
  },
  {
    id: 2,
    name: "Telemartmyanmar",
    description: "E-Commerce",
    imageURL: "/astronaut-ingravity.svg",
    webURL: "https://google.com",
    githubURL: "https://saihtun/outstagramm",
    order: "true",
  },
];
