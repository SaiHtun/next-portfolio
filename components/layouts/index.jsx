import styled from "styled-components";
import { useContext } from "react";
import { HomeContext } from "../../contexts/HomeContextProvider";
import Head from "next/head";
import Footer from "../Footer";

export default function Layout({
  children,
  title = "Saihtun's tech space",
  name = "description",
  content = "Welcome from Saihtun's space.",
}) {
  const { handleCloseResumeBtn } = useContext(HomeContext);

  return (
    <Container onClick={(e) => handleCloseResumeBtn(e.target)}>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name={name} content={content} />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      {children}
      <Footer></Footer>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  max-width: 1500px;
  margin: 0 auto;
  overflow: hidden;
  width: 100vw;
  min-height: 100vh;
`;
