import styled from "styled-components";
import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function Contact() {
  const titleRef = useRef();
  const whiteRef = useRef();

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
        <Info>
          {/* <p>Email</p> */}
          <div></div>
          <p>Designed and Developed by Sai</p>
        </Info>
        <MoreInfo>
          <div>
            <Headline>
              <span>Sai Htun 谷忠信</span>
              <Socials>
                <Link href="#">Facebook</Link>
                <Link href="#">Twitter</Link>
                <Link href="#">Github</Link>
                <Link href="#">Email</Link>
              </Socials>
            </Headline>
            {/* <Caption>This awesome developer is located at SF Bay Area.</Caption> */}
            <ImageWrapper>
              <WhiteBar ref={whiteRef}></WhiteBar>
              <SaiImage src="/saisai.jpg"></SaiImage>
            </ImageWrapper>
          </div>
        </MoreInfo>
      </Container>
    </>
  );
}

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
  height: max-content;
  margin-top: -50px;
  padding-left: 100px;
  padding-top: 150px;
  display: grid;
  grid-template-columns: 300px 1fr;

  @media only screen and (max-width: 400px) {
    padding-left: 0px;
    grid-template-columns: 1fr;
  }
`;

const Info = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  p:nth-last-child(1) {
    color: rgba(0, 0, 0, 0.3);
    text-align: right;
  }

  @media only screen and (max-width: 400px) {
    display: none;
  }
`;

const MoreInfo = styled.div`
  position: relative;
  width: 100%;
  height: max-content;
`;

const Headline = styled.div`
  width: 320px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media only screen and (max-width: 400px) {
    padding: 0px 20px;

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
    width: 120px;
  }

  .email {
    display: none;

    @media only screen and (max-width: 400px) {
      display: inline-block;
    }
  }
`;

const SocialIcon = styled.img`
  width: 25px;
  object-fit: contain;
`;

const Caption = styled.p`
  color: #a8a8a8;
  font-size: 14px;
  margin-bottom: 5px;

  @media only screen and (max-width: 400px) {
    padding: 0px 20px;
    font-size: 13px;
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: max-content;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: relative;
`;

const SaiImage = styled.img`
  width: 850px;
  object-fit: contain;

  @media only screen and (max-width: 400px) {
    width: 400px;
    /* object-fit: fill */
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
