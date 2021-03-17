import Head from "next/head";
import { useContext, useRef, useEffect } from "react";
import gsap from "gsap";
import Layout from "../components/layouts";
import styled, { css } from "styled-components";
import { useState } from "react";
// components
import Nav from "../components/Nav";
import Hero from "../components/home/Hero";
import Projects from "../components/home/Projects";
import Contact from "../components/home/Contact";
// context api
import { HomeContext } from "../contexts/HomeContextProvider";
// custom hooks
// import useWindowDimensions from "../utilities/useWindowDimensions";

export default function Home() {
  const { menu } = useContext(HomeContext);
  const [loading, setLoading] = useState("true");
  const boxRef = useRef([]);

  useEffect(() => {
    gsap.to(boxRef.current, {
      xPercent: -1000,
      duration: 4,
      stagger: 0.1,
      ease: "easeInOut",
      delay: 3,
    });
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLoading("false");
    }, 3000);
  }, []);

  const Boxes = [0, 1, 2, 3].map((box) => {
    return (
      <div key={box} ref={(e) => (boxRef.current[box] = e)}>
        {box}
      </div>
    );
  });

  return (
    <Layout>
      <Overlay>{Boxes}</Overlay>
      <Nav></Nav>
      <Container loading={loading} menu={menu}>
        {/* hero landing */}
        <Hero></Hero>
        {/* Projects */}
        <Projects></Projects>
        {/* Contact */}
        <Contact></Contact>
      </Container>
    </Layout>
  );
}

const Overlay = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;

  div {
    background-color: black;
    width: 100vw;
    height: 25vh;
  }
`;

const Container = styled.main`
  max-height: ${(props) => (props.loading === "true" ? "60vh" : "max-content")};
  ${(props) =>
    props.menu &&
    css`
      max-height: 80vh;
      overflow-y: hidden;
    `};
`;
