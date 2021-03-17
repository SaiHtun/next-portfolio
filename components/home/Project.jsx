import { useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styled, { css } from "styled-components";
import gsap from "gsap";
// import scrolltrigger;
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function Project({ data, even }) {
  const whiteRef = useRef();
  const imgRef = useRef();
  const imgWrapperRef = useRef();
  const infoRef = useRef();
  const router = useRouter();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    let tl = gsap.timeline();
    tl.to(whiteRef.current, {
      scrollTrigger: {
        trigger: imgRef.current,
        start: "top 75%",
        end: "bottom 25%",
        scrub: true,
      },
      ease: "Linear.easeInOut",
      xPercent: 300,
      duration: 1.5,
    });
  }, []);

  const handleClick = (name) => {
    name = name.toLowerCase();
    router.push(`/projects/${name}`);
  };

  const { name, description, imageURL, webURL, githubURL } = data;
  return (
    <Container onClick={() => handleClick(name)}>
      <Overlay>
        <View>View Detail</View>
      </Overlay>
      <ImageWrapper ref={imgWrapperRef} even={even}>
        <WhiteBar ref={whiteRef}></WhiteBar>
        <ProjectImage ref={imgRef} src={imageURL}></ProjectImage>
      </ImageWrapper>
      <Info ref={infoRef} even={even}>
        <NameWrapper>
          <p>{name}</p>
          <p className="description">{description}</p>
        </NameWrapper>
        <SocialWrapper even={even}>
          <Link href="#">Github</Link>
          <Link href="#">Website</Link>
        </SocialWrapper>
      </Info>
    </Container>
  );
}

const ProjectImage = styled.img`
  width: 100%;
  object-fit: contain;
`;

const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: grid;
  justify-items: center;
  align-items: center;
  z-index: 1;

  :hover {
    p {
      transform: translateY(0px);
      opacity: 1;

      ::before {
        width: 100px;
      }

      ::after {
        width: 100px;
      }
    }
  }
`;

const View = styled.p`
  position: relative;
  transform: translateY(50px);
  opacity: 0;
  transition: all 0.5s ease-in-out;
  z-index: 2;
  top: 50px;

  ::before {
    content: "";
    position: absolute;
    left: -110px;
    bottom: 8px;
    width: 0px;
    height: 1px;
    background-color: rgba(0, 0, 0, 0.7);
    transition: all 0.5s ease-in-out;
  }
  ::after {
    content: "";
    position: absolute;
    left: 90px;
    bottom: 8px;
    width: 0px;
    height: 1px;
    background-color: rgba(0, 0, 0, 0.7);
    transition: all 0.5s ease-in-out;
  }
`;

const NameWrapper = styled.div``;

const Container = styled.div`
  position: relative;
  min-width: 365px;
  width: 100%;
  height: 400px;
  padding-top: 100px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  cursor: pointer;

  @media only screen and (max-width: 850px) {
    /* padding-top: 0px; */
    grid-template-columns: 1fr;
    /* grid-template-rows: 1fr 100px; */
  }
  @media only screen and (max-width: 400px) {
    max-width: 375px;
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: max-content;
  order: ${(props) => (props.even ? 2 : 1)};
  text-align: center;
  position: relative;
  overflow: hidden;

  @media only screen and (max-width: 850px) {
    order: 1;
  }
`;

const WhiteBar = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: white;
  z-index: 10;
`;

const Info = styled.div`
  text-align: ${(props) => (props.even ? "left" : "right")};
  order: ${(props) => (props.even ? 1 : 2)};

  .description {
    font-size: 14px;
    color: #9c9c9c;
  }

  @media only screen and (max-width: 850px) {
    text-align: left !important;
    order: 2;
    padding-top: 5px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }
`;

const SocialWrapper = styled.div`
  width: 100%;
  padding-top: 20px;
  display: flex;
  justify-content: ${(props) => (props.even ? "flex-start" : "flex-end")};

  a {
    font-size: 12px;
    color: rgba(0, 0, 0, 0.8);
    position: relative;

    :first-child {
      margin-right: 10px;
    }

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

  ${(props) =>
    props.even &&
    css`
      margin-right: auto;
    `};

  @media only screen and (max-width: 850px) {
    justify-content: flex-end !important;
    padding-top: 0px;
  }
`;
