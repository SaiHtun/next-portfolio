import MainLayout from "../components/layouts/index";
import styled from "styled-components";
import Link from "next/link";
// components
import Nav from "../components/Nav";

export default function Blog() {
  return (
    <MainLayout>
      <Nav></Nav>
      <Container>
        <Intro>
          <h1>This is blog</h1>
          <p>
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            voluptatibus harum soluta voluptates blanditiis obcaecati voluptas
            optio aspernatur vel asperiores in autem, nemo qui corporis magnam
            similique nam! Exercitationem, laboriosam! Reiciendis voluptate
            excepturi asperiores cupiditate ratione! Quis, velit dolores labore,
            quo quasi iste laboriosam quibusdam hic quos praesentium repellendus
            eveniet.
          </p>
        </Intro>
        <Topics>
          <li>
            <Link href="#">All you need to get started with Docker</Link>{" "}
          </li>
          <li>
            <Link href="#">Kubernetes </Link>{" "}
          </li>
          <li>
            <Link href="#">Gsap</Link>{" "}
          </li>
        </Topics>
      </Container>
    </MainLayout>
  );
}

const Container = styled.main`
  width: 100vw;
  height: 100vh;
  padding: 0px 100px;

  @media only screen and (max-width: 500px) {
    padding: 0px 20px;
  }
`;

const Intro = styled.div``;

const Topics = styled.ol`
  margin-top: 20px;
  margin-left: 20px;
  counter-reset: listCounter;

  li {
    counter-increment: listCounter;
    font-weight: bold;
    margin-bottom: 10px;
  }
`;
