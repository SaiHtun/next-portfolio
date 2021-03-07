import Head from "next/head";
import Layout from "../components/layouts";
import styled, { css } from "styled-components";
// components
import Hero from "../components/home/Hero";
import Projects from "../components/home/Projects";
import Contact from "../components/home/Contact";

export default function Home() {
  return (
    <Layout>
      <>
        {/* hero landing */}
        <Hero></Hero>
        {/* Projects */}
        <Projects></Projects>
        {/* Contact */}
        <Contact></Contact>
      </>
    </Layout>
  );
}
