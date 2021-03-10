import styled from "styled-components";
import Project from "./Project";

export default function Projects() {
  return (
    <Container>
      <Title></Title>
      <ProjectsGrid>
        {projects.map((project, i) => {
          let even = i % 2 === 0;
          return (
            <Project key={project.id} data={project} even={even}></Project>
          );
        })}
      </ProjectsGrid>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 100px 0px;
`;

const ProjectsGrid = styled.div`
  padding: 0px 100px;

  @media only screen and (max-width: 400px) {
    padding: 50px 20px;
  }
`;

const Title = styled.div`
  width: 200px;
  height: 2px;
  background-color: black;
  left: 0;
  position: relative;

  @media only screen and (max-width: 400px) {
    width: 100px;
  }

  ::after {
    content: "Projects";
    position: absolute;
    left: 230px;
    bottom: -30px;
    font-size: 4em;

    @media only screen and (max-width: 400px) {
      left: 100px;
      font-size: 3em;
    }
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
  },
];
