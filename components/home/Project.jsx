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
    <Container>
      <ImageWrapper
        onClick={() => handleClick(name)}
        ref={imgWrapperRef}
        even={even}
      >
        <View>View Detail</View>
        <WhiteBar ref={whiteRef}></WhiteBar>
        <ProjectImage ref={imgRef} src={imageURL}></ProjectImage>
      </ImageWrapper>
      <Info ref={infoRef} even={even}>
        <NameWrapper>
          <p>{name}</p>
          <p className="description">{description}</p>
        </NameWrapper>
        <SocialWrapper even={even}>
          <Link href={githubURL}>
            <a target="_blank">Github</a>
          </Link>
          <Link href={webURL}>
            <a target="_blank">Website</a>
          </Link>
        </SocialWrapper>
      </Info>
    </Container>
  );
}

const ProjectImage = styled.img`
  width: 100%;
  object-fit: contain;
  transition: all 0.5s ease-in;

  :hover {
    filter: blur(4px);
  }
`;

const View = styled.p`
  position: absolute;
  opacity: 0;
  transform: translateY(50px);
  transition: all 0.5s ease-in-out;
  z-index: 2;
  top: 170px;
  left: 230px;
  z-index: 10;
  font-size: 30px;

  @media only screen and (max-width: 400px) {
    display: none;
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

  @media only screen and (max-width: 850px) {
    /* padding-top: 0px; */
    grid-template-columns: 1fr;
  }
  @media only screen and (max-width: 500px) {
    padding-top: 0px;
    grid-template-rows: 230px 50px;
    height: 350px;
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
  cursor: pointer;

  @media only screen and (max-width: 850px) {
    order: 1;
  }

  :hover {
    p {
      transform: translateY(0px);
      opacity: 1;
    }
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
  z-index: 10;

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
