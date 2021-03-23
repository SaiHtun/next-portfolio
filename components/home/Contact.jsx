import styled from "styled-components";
import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function Contact() {
  const titleRef = useRef();
  const whiteRef = useRef();
  const imgRef = useRef();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    // let tl = gsap.timeline();
    gsap.from(titleRef.current, {
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top bottom",
        end: "bottom 25%",
        scrub: true,
        toggleActions: "play none reverse none",
      },
      xPercent: -300,
      duration: 1.5,
    });
    gsap.to(whiteRef.current, {
      scrollTrigger: {
        trigger: whiteRef.current,
        start: "top 75%",
        end: "bottom 25%",
        scrub: true,
        toggleActions: "play none reverse none",
      },
      xPercent: 400,
      duration: 2,
    });
  }, []);

  return (
    <>
      <TitleWrapper>
        <Title ref={titleRef}>
          <div></div>
          <p>Contact</p>
        </Title>
      </TitleWrapper>
      <Container>
        <Wrapper>
          <Headline>
            <span>Sai Htun 谷忠信</span>
            <Socials>
              <Link href="https://www.facebook.com/">
                <a target="_blank">Facebook</a>
              </Link>
              <Link href="https://twitter.com/SaiHtun19428970">
                <a target="_blank">Twitter</a>
              </Link>
              <Link href="https://github.com/SaiHtun">
                <a target="_blank">Github</a>
              </Link>
              <a href="mailto: saihtun1430@gmail.com">Email</a>
            </Socials>
          </Headline>
          <Caption>This awesome developer is located at SF Bay Area.</Caption>
        </Wrapper>
        <ImageWrapper ref={imgRef}>
          <WhiteBar ref={whiteRef}></WhiteBar>
          <SaiImage src="/saisai.jpg"></SaiImage>
        </ImageWrapper>
      </Container>
    </>
  );
}

const Wrapper = styled.div`
  @media only screen and (max-width: 500px) {
    justify-self: flex-start;
    align-self: flex-end;
  }
`;

const WhiteBar = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  position: absolute;
`;

const Container = styled.div`
  width: 100vw;
  max-width: 1360px;
  overflow: hidden;
  min-height: 500px;
  height: max-content;
  padding: 100px 0px 0px 100px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));

  @media only screen and (max-width: 500px) {
    padding: 0px 10px;
  }
`;

const Headline = styled.div`
  width: 400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 100px;

  @media only screen and (max-width: 500px) {
    padding: 0px;
    width: 350px;
    span {
      font-size: 15px;
    }
  }
`;

const Socials = styled.div`
  width: 100px;
  display: flex;
  justify-content: space-around;

  a {
    font-size: 13px;
    color: rgba(0, 0, 0, 0.5);
    margin: 3px;
    position: relative;

    ::after {
      content: "";
      position: absolute;
      width: 0px;
      height: 2px;
      left: 0;
      bottom: -3px;
      background-color: black;
      transition: all 0.3s ease-in-out;
    }

    :hover {
      ::after {
        width: 100%;
      }
    }
  }

  @media only screen and (max-width: 400px) {
    width: max-content;
  }
`;

const Caption = styled.p`
  color: #777777;
  font-size: 14px;
  font-weight: 300;
  margin-bottom: 5px;
  padding-left: 100px;

  @media only screen and (max-width: 400px) {
    font-size: 13px;
    padding-left: 0px;
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: max-content;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;

  @media only screen and (max-width: 840px) {
    justify-content: center;
  }
`;

const SaiImage = styled.img`
  height: 300px;
  object-fit: contain;

  @media only screen and (max-width: 500px) {
    width: 100%;
  }
`;

const TitleWrapper = styled.div`
  width: max-content;
  height: 80px;
  margin-top: 100px;
  overflow: hidden;
  line-height: 80px;
  text-align: center;
  position: relative;

  @media only screen and (max-width: 840px) {
    margin-top: 0px;
  }
`;

const Title = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;

  div {
    height: 2px;
    background-color: black;
    display: grid;
    align-self: center;
  }

  p {
    font-size: 4em;
  }

  @media only screen and (max-width: 500px) {
    p {
      font-size: 2.5em;
    }
  }
`;
