import styled, { css } from "styled-components";
import Nav from "../../components/Nav";
import Link from "next/link";
import gsap from "gsap";
import { useRef, useEffect, useContext } from "react";
import MainLayout from "../../components/layouts/index";
// import context
import { HomeContext } from "../../contexts/HomeContextProvider";

export default function Outstagramm() {
  const imgRef = useRef();
  const textRef = useRef();
  const { menu } = useContext(HomeContext);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.from(imgRef.current, {
      yPercent: 1000,
      scale: 0.8,
      opacity: 0,
      duration: 1.2,
    });

    tl.from(
      textRef.current,
      {
        yPercent: 50,
        opacity: 0,
        duration: 1,
      },
      "-=.5"
    );
  }, []);

  return (
    <MainLayout>
      <Nav></Nav>
      <Container menu={menu}>
        <ProjectImg ref={imgRef} src="/telemart.png"></ProjectImg>
        <Info ref={textRef}>
          <Left>
            <Links>
              <Link href="#">Github</Link>
              <Link href="#">Website</Link>
            </Links>
            <Stacks>
              {["React", "Styled-Components", "Graphql", "GraphCMS"].map(
                (tech, i) => {
                  return <li key={i}>{tech}</li>;
                }
              )}
            </Stacks>
          </Left>
          <Right>
            <Description>
              <span>Telemartmyanmar</span>First of all, I would like to thanks
              my very first client from Myanmar for giving me such an
              opportunity to design and develop their e-commerce website, the
              initial version of this website will only serve as a look book (
              displaying available items from the store ) and soon to be added
              payment and many more features in the future when the company is
              ready for the delivery infrastructure and online payment. The tech
              stacks I've used are - React, ApolloGraphql, GraphCMS, and Vercel.
            </Description>
          </Right>
        </Info>
        <Footer>
          <p>
            Designed and Developed by <span>Sai</span>
          </p>
        </Footer>
      </Container>
    </MainLayout>
  );
}

const Footer = styled.div`
  width: 100%;
  height: 60px;
  line-height: 60px;
  text-align: center;
  margin-top: -50px;

  span {
    font-family: "Sacramento", cursive;
  }
`;

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
    display: flex;
    gap: 10px;
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
`;

const Description = styled.div`
  width: 100%;
  height: 100%;
  text-indent: 100px;
  font-size: 16px;
  font-weight: 250;
  line-height: 20px;
  color: rgba(0, 0, 0, 0.7);

  p {
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
