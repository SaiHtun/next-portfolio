import styled from "styled-components";
import { useContext } from "react";
import { HomeContext } from "../../contexts/HomeContextProvider";

export default function Layout({ children }) {
  const { handleCloseResumeBtn } = useContext(HomeContext);

  return (
    <Container onClick={(e) => handleCloseResumeBtn(e.target)}>
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
