import styled from "styled-components";
// components
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import Layout from "../../components/layouts/index";
// utilities
import fetchAPI from "../../utilities/fetchAPI";
// import react hooks
import { useRef, useEffect } from "react";
//  import gsap
import { gsap } from "gsap";

const GET_BLOG = `
  query($id: ID!) {
    blog(where: { id: $id }) {
      title
      caption
      description
      createdAt
      body {
        html
      }
    }
  }
`;

const GET_TITLES = `
  query {
    blogs {
      id
    }
  }
`;

export async function getStaticPaths() {
  const data = await fetchAPI(GET_TITLES);
  const paths = data.blogs.map((blog) => {
    return {
      params: { id: blog.id },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const data = await fetchAPI(GET_BLOG, {
    variables: { id: context.params.id },
  });

  return {
    props: { data },
  };
}

export default function Blog({ data }) {
  const wrapperRef = useRef();

  useEffect(() => {
    gsap.from(wrapperRef.current, {
      opacity: 0,
      yPercent: 1,
      duration: 1.2,
    });
  }, []);

  return (
    <Layout
      title={`Blogs | ${data.blog.title}`}
      name="description"
      content={data.blog.description}
    >
      <Container>
        <Nav></Nav>
        <Wrapper ref={wrapperRef}>
          <TitleWrapper>
            <Title>{data.blog.title}</Title>
            <Caption>{data.blog.caption}</Caption>
            <Time>{new Date(`${data.blog.createdAt}`).toString()}</Time>
          </TitleWrapper>
          <Body
            dangerouslySetInnerHTML={{ __html: data.blog.body.html }}
          ></Body>
        </Wrapper>
      </Container>
    </Layout>
  );
}

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  height: max-content;
`;

const TitleWrapper = styled.div`
  margin-bottom: 50px;

  @media only screen and (max-width: 500px) {
    margin-bottom: 20px;
  }
`;

const Time = styled.p`
  color: rgba(0, 0, 0, 0.6);
  font-size: 15px;
`;

const Title = styled.h2`
  font-size: 3em;

  @media only screen and (max-width: 500px) {
    font-size: 1.5em;
  }
`;

const Caption = styled.small`
  font-size: 1.2em;
  font-style: italic;
  color: rgba(0, 0, 0, 0.6);

  @media only screen and (max-width: 500px) {
    font-size: 1em;
  }
`;

const Wrapper = styled.div`
  overflow: hidden;
  padding: 0px 100px 100px 100px;
  font-family: charter, Cambria, Georgia, Times, "Times New Roman", serif;
  color: rgba(41, 41, 41, 1);
  font-weight: 400;

  @media only screen and (max-width: 800px) {
    padding: 0px 50px 100px 50px;
  }

  @media only screen and (max-width: 500px) {
    padding: 0px 10px 100px 10px;
  }
`;
const Body = styled.div`
  font-size: 21px;
  line-height: 28px;
  word-spacing: 2px;
  letter-spacing: -0, 003em;

  @media only screen and (max-width: 500px) {
    font-size: 18px;
  }

  h2 {
    font-size: 2em;

    @media only screen and (max-width: 500px) {
      font-size: 1.3em;
    }
  }

  p {
    margin: 20px 0px;
    text-indent: 20px;
  }

  ul {
    padding: 0px 100px;

    @media only screen and (max-width: 800px) {
      padding: 0px 50px 100px 50px;
    }

    @media only screen and (max-width: 500px) {
      padding: 0px 0px 10px 30px;
    }

    li {
      margin-bottom: 5px;
    }
  }

  img {
    min-width: 370px;
    width: 100%;
    min-height: 300px;
    height: 400px;
    margin: 20px 0px;
    object-fit: contain;

    @media only screen and (max-width: 500px) {
      min-height: 200px;
      height: 0px;
      min-width: 100%;
      object-fit: contain;
    }
  }

  blockquote {
    text-align: center;
    font-size: 20px;
    font-style: italic;
    color: rgba(41, 41, 41, 1);
    line-height: 18px;

    @media only screen and (max-width: 500px) {
      font-size: 16px;
    }
  }
`;
