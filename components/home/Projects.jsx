import { useEffect, useRef } from "react";
import styled from "styled-components";
import Project from "./Project";
import gsap from "gsap";
//import scrolltrigger
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function Projects() {
  const barRef = useRef();
  const titleRef = useRef();
  const titleWrapperRef = useRef();
  const projectRef = useRef();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    let tl = gsap.timeline();

    tl.from(titleRef.current, {
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top 75%",
        end: "bottom 25%",
        scrub: true,
        toggleActions: "play none reverse none",
      },
      xPercent: -300,
      duration: 1.5,
    });
  }, []);

  return (
    <Container>
      <TitleWrapper ref={titleWrapperRef}>
        <Title ref={titleRef}>
          <div></div>
          <p>Projects</p>
        </Title>
      </TitleWrapper>
      <ProjectsGrid ref={projectRef}>
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
  width: 100%;
  padding: 0px 100px;
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  align-items: center;

  @media only screen and (max-width: 500px) {
    padding: 50px 5px;
  }
  @media only screen and (max-width: 400px) {
    padding: 50px 5px;
  }
`;

const TitleWrapper = styled.div`
  width: max-content;
  height: 80px;
  overflow: hidden;
  line-height: 80px;
  text-align: center;
  position: relative;
`;

const BlackBar = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background-color: black;
`;

const Title = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;

  div {
    height: 2px;
    background-color: black;
    display: grid;
    align-self: center;
    z-index: 1;
  }

  p {
    font-size: 4em;
  }

  @media only screen and (max-width: 500px) {
    p {
      font-size: 2.5em;
    }
  }
`;

const projects = [
  {
    id: 1,
    name: "Outstagramm",
    description: "social media",
    imageURL: "/outstagramm.png",
    webURL: "https://google.com",
    githubURL: "https://saihtun/outstagramm",
  },
  {
    id: 2,
    name: "Telemartmyanmar",
    description: "E-Commerce",
    imageURL: "/telemart.png",
    webURL: "https://google.com",
    githubURL: "https://saihtun/outstagramm",
  },
];
