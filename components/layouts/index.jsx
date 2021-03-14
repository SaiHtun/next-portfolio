import Nav from "../Nav";
import styled from "styled-components";

import { useContext, useEffect, useRef } from "react";
import { HomeContext } from "../../contexts/HomeContextProvider";
import gsap from "gsap";

export default function Layout({ children }) {
  const { handleCloseResumeBtn } = useContext(HomeContext);
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

  const Boxes = [0, 1, 2, 3].map((box) => {
    return (
      <div key={box} ref={(e) => (boxRef.current[box] = e)}>
        {box}
      </div>
    );
  });

  return (
    <Container onClick={(e) => handleCloseResumeBtn(e.target)}>
      <Overlay>{Boxes}</Overlay>
      <Nav></Nav>
      {children}
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
