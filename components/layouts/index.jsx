import Nav from "../Nav";
import styled from "styled-components";
import { useContext } from "react";
import { HomeContext } from "../../contexts/HomeContextProvider";

export default function Layout({ children }) {
  const { handleCloseResumeBtn } = useContext(HomeContext);

  return (
    <Container onClick={(e) => handleCloseResumeBtn(e.target)}>
      <Nav></Nav>
      {children}
    </Container>
  );
}

const Container = styled.div`
  max-width: 1360px;
  overflow: hidden;
  width: 100vw;
  min-height: 100vh;
`;
