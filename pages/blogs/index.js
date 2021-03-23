import MainLayout from "../../components/layouts/index";
import styled from "styled-components";
import Link from "next/link";
// utility functions
import fetchAPI from "../../utilities/fetchAPI";
// components
import Nav from "../../components/Nav";
// gsap
import { useRef, useEffect } from "react";
import { gsap } from "gsap";

const GET_TITLES = `
  query {
    blogs {
      id
      title
    }
  }
`;

export async function getStaticProps() {
  const data = await fetchAPI(GET_TITLES);

  return {
    props: { data }, // will be passed to the page component as props
  };
}

export default function Blogs({ data }) {
  const containerRef = useRef();

  useEffect(() => {
    gsap.from(containerRef.current, {
      opacity: 0,
      yPercent: 1,
      duration: 1.2,
    });
  }, []);

  return (
    <MainLayout>
      <Nav></Nav>
      <Container ref={containerRef}>
        <Intro>
          <h1>Welcome to Sai's 101 naive tech blogs 🚀 👨‍🚀 🔥</h1>
          <p>Ohaiyo everyone ~ 🦒 🐶 🐈 🐳</p>
          <p>
            Thanks for being here, this is my very first time trying to write
            blog from my entire life, i have quite a few purposes for doing
            that, so usually i love taking notes on a random paper and having a
            hard time finding them when it’s needed, thus i just thought of
            writing notes as a blog so i can always come back and refresh my
            memories, on the other hand English is my 4th language and i found
            myself grammatically horrible sometimes, so i just want to improve
            my english through writing blogs and want to share the technology
            related information for the beginners just like me or who ever
            needed in a naive way. Please don't mind if you are having trouble
            reading my blog post and correct me if i was wrong, anyway i’m here
            to get started from one blog and many more to go yo !
          </p>
        </Intro>
        <Topics>
          {data.blogs.map((post) => {
            return (
              <li key={post.id}>
                <Link href={`/blogs/${post.id}`}>{post.title}</Link>
              </li>
            );
          })}
        </Topics>
      </Container>
    </MainLayout>
  );
}

const Container = styled.main`
  width: 100vw;
  height: 100vh;
  padding: 0px 100px;

  @media only screen and (max-width: 800px) {
    padding: 0px 50px;
  }
  @media only screen and (max-width: 500px) {
    padding: 0px 20px;
  }
`;

const Intro = styled.div`
  line-height: 26px;
  font-size: 21px;
  font-family: charter, Cambria, Georgia, Times, "Times New Roman", serif;
  color: rgba(41, 41, 41, 1);

  h1 {
    margin-bottom: 30px;

    @media only screen and (max-width: 900px) {
      line-height: 40px;
    }
    @media only screen and (max-width: 500px) {
      line-height: 30px;
    }
  }

  @media only screen and (max-width: 500px) {
    font-size: 18px;
  }
`;

const Topics = styled.ol`
  margin-top: 30px;
  margin-left: 20px;
  font-size: 21px;
  counter-reset: listCounter;

  li {
    counter-increment: listCounter;
    font-weight: bold;
    margin-bottom: 10px;
  }
`;
