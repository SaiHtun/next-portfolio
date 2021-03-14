import Head from "next/head";
import { useContext } from "react";
import Layout from "../components/layouts";
import styled, { css } from "styled-components";
// components
import Hero from "../components/home/Hero";
import Projects from "../components/home/Projects";
import Contact from "../components/home/Contact";
// context api
import { HomeContext } from "../contexts/HomeContextProvider";

export default function Home() {
  const { menu } = useContext(HomeContext);

  return (
    <Layout>
      <Container menu={menu}>
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

const Container = styled.main`
  ${(props) =>
    props.menu &&
    css`
      max-height: 80vh;
      overflow-y: hidden;
    `}
`;

//TODO 1. menu bar red
//TODO 2. animate project ( sliding )
//TODO 3. fix the gap for contact's name and caption
//TODO 4. create project detail page and animate them
//TODO 5. create blog page
