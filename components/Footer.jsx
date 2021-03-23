import styled from "styled-components";

export default function Footer() {
  return (
    <Container>
      <p>
        Designed and Developed by <span>Sai</span>
      </p>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 60px;
  line-height: 60px;
  text-align: center;
  margin-top: -50px;

  span {
    font-family: "Sacramento", cursive;
  }
`;
