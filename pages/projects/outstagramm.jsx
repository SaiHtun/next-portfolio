import styled, { css } from "styled-components";
import Nav from "../../components/Nav";
import Link from "next/link";
import gsap from "gsap";
import { useRef, useEffect, useContext } from "react";
import MainLayout from "../../components/layouts/index";
import { HomeContext } from "../../contexts/HomeContextProvider";

export default function Outstagramm() {
  const imgRef = useRef();
  const textRef = useRef();
  const { menu } = useContext(HomeContext);

  useEffect(() => {
    gsap.from(imgRef.current, {
      yPercent: 1000,
      opacity: 0,
      duration: 1.2,
    });

    gsap.from(textRef.current, {
      yPercent: 1000,
      opacity: 0,
      duration: 1.2,
    });
  }, []);

  return (
    <MainLayout
      title="Project | Outstagramm"
      name="description"
      content="Outstagramm is a clone version of Instagramm, built with React and Firebase, designed and developed by Saithun."
    >
      <Nav></Nav>
      <Container menu={menu}>
        <ProjectImg ref={imgRef} src="/outstagramm.png"></ProjectImg>
        <Info ref={textRef}>
          <Left>
            <Links>
              <Link href="https://github.com/SaiHtun/outstagramm">Github</Link>
              <Link href="https://outstagramm-2bbb5.web.app">Website</Link>
            </Links>
            <Stacks>
              {["React", "SCSS", "Firebase"].map((tech, i) => {
                return <li key={i}>{tech}</li>;
              })}
            </Stacks>
          </Left>
          <Right>
            <Description>
              <span>Outstagramm</span>this is my very first React and Firebase
              web app, a clone version of "Instagram" and I named it
              "Outstagramm" 😅, a very simple basic crud app, I made it with no
              security or performance concerns, probably require tons of
              refactoring too but let me just keep it that way for now 😬, and
              it might contain only 0.01% of the actual "Instagram" features but
              kindly have a look and feel free to test.
            </Description>
          </Right>
        </Info>
      </Container>
    </MainLayout>
  );
}

const Left = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  gap: 3px;

  @media only screen and (max-width: 850px) {
    /* grid-template-rows: 1fr;
    grid-template-columns: repeat(2, 1fr); */
  }
`;

const Right = styled.div`
  min-height: 400px;
`;

const Stacks = styled.ul`
  list-style: none;
  font-size: 13px;
  color: rgba(0, 0, 0, 0.8);
  font-style: italic;

  @media only screen and (max-width: 850px) {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(60px, 100px));
    gap: 10px;
  }
  @media only screen and (max-width: 500px) {
    display: flex;

    li {
      ::after {
        content: "/";
      }
    }
  }
`;

const Info = styled.div`
  width: 100%;
  height: max-content;
  min-height: 400px;
  padding: 100px 0px;
  display: grid;
  grid-template-columns: 300px 1fr;

  @media only screen and (max-width: 850px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  @media only screen and (max-width: 500px) {
    padding-top: 30px;
  }
`;

const Links = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 3px;
  font-size: 13px;
  color: rgba(0, 0, 0, 0.8);
  font-weight: bold;

  a {
    width: max-content;
    position: relative;
    ::after {
      content: "";
      position: absolute;
      width: 0px;
      height: 2px;
      left: 0;
      bottom: -3px;
      background-color: black;
      transition: all 0.3s ease-in-out;
    }

    :hover {
      ::after {
        width: 100%;
      }
    }
  }

  @media only screen and (max-width: 850px) {
    flex-direction: row;
    gap: 10px;
  }
  @media only screen and (max-width: 500px) {
    width: 100px;
    justify-content: space-between;
  }
`;

const Description = styled.div`
  width: 100%;
  height: 100%;
  text-indent: 50px;
  font-size: 18px;
  font-weight: 250;
  line-height: 24px;
  font-family: charter, Cambria, Georgia, Times, "Times New Roman", serif;
  color: rgba(41, 41, 41, 1);

  @media only screen and (max-width: 500px) {
    font-size: 16px;
  }

  span {
    font-size: 17px;
    font-weight: bold;
    margin-right: 10px;
  }
`;

const Container = styled.main`
  width: 100vw;
  min-height: 100vh;
  padding: 0px 100px;
  height: max-content;
  z-index: -2;

  ${(props) =>
    props.menu &&
    css`
      min-height: 0px;
      max-height: 80vh;
      overflow-y: hidden;
    `}

  @media only screen and (max-width: 800px) {
    padding: 0px 50px;
  }

  @media only screen and (max-width: 500px) {
    padding: 0px 10px;
  }
`;

const ProjectImg = styled.img`
  width: 100%;
  object-fit: contain;
`;
