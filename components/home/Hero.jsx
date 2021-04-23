import styled, { css, keyframes } from "styled-components";
import { HomeContext } from "../../contexts/HomeContextProvider";
import { useContext, useRef, useEffect, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function Hero() {
  const { btnResume, setBtnResume, menu } = useContext(HomeContext);
  const textRef = useRef([]);
  const mainTextRef = useRef([]);
  const btnRef = useRef();
  const heroRef = useRef();
  const reRef = useRef();
  const [up, setUp] = useState(false);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    let tl = gsap.timeline();
    tl.from(textRef.current, { yPercent: 200, duration: 1.5, stagger: 0.25 });
    tl.to(mainTextRef.current, {
      color: "black",
      duration: 1.5,
      stagger: 0.25,
    });
    tl.from(reRef.current, { xPercent: 200, duration: 0.3 });
    tl.to(textRef.current, {
      scrollTrigger: {
        trigger: btnRef.current,
        start: "top 60%",
        end: "bottom 25%",
        scrub: true,
      },
      yoyo: true,
      xPercent: -100,
      opacity: 0,
      duration: 4,
      stagger: 1,
    });

    tl.to(btnRef.current, {
      scrollTrigger: {
        trigger: btnRef.current,
        start: "top 30%",
        end: "bottom 30%",
        scrub: true,
      },
      yoyo: true,
      yPercent: -500,
      duration: 1.2,
    });
  }, []);

  const handleScroll = () => {
    if (window.scrollY >= window.innerHeight + 600) {
      setUp(true);
    } else {
      setUp(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleResuBtn = () => {
    console.log("hello====>", btnResume);
    setBtnResume(!btnResume);
  };

  const upOrDown = !up ? (
    <span></span>
  ) : (
    <span style={{ fontSize: "15px" }}>Go Top</span>
  );

  const goTop = () => {
    if (up) {
      window.scrollTo(0, 0);
    }
  };

  return (
    <>
      <HeroWrapper ref={heroRef}>
        <div style={{ width: "100%" }}>
          <LandingText>
            <div>
              <p ref={(e) => (textRef.current[0] = e)} className="text">
                {" "}
                this is{" "}
                <span ref={(e) => (mainTextRef.current[0] = e)}>Sai</span>
              </p>
            </div>
            <div>
              <p ref={(e) => (textRef.current[1] = e)} className="text">
                {" "}
                a{" "}
                <span ref={(e) => (mainTextRef.current[1] = e)}>Designer</span>
              </p>
            </div>
            <div>
              <p ref={(e) => (textRef.current[2] = e)} className="text">
                {" "}
                who can{" "}
                <span ref={(e) => (mainTextRef.current[2] = e)}>Code.</span>
              </p>
            </div>
          </LandingText>
          <Wrapper ref={btnRef}>
            <BtnWrapper slide={btnResume} className="btnResume">
              <Button
                ref={reRef}
                className="btnResume"
                slide={btnResume}
                onClick={handleResuBtn}
              >
                <p>Resume</p>
              </Button>
              <Link href="/sai's resume.pdf" download>
                <File src="/file.svg" alt="file" />
              </Link>
            </BtnWrapper>
            <SkillsWrapper>
              <Skills>HTML</Skills>
              <Skills>CSS</Skills>
              <Skills>JavaScript</Skills>
              <Skills>React</Skills>
              <Skills>Vue</Skills>
              <Skills>Node.js</Skills>
              <Skills>REST</Skills>
              <Skills>Graphql</Skills>
              <Skills>SQL</Skills>
              <Skills>NoSQL</Skills>
              <Skills>Virtualization</Skills>
              <Skills>Containerization</Skills>
              <Skills>Docker</Skills>
              <Skills>Kubernetes</Skills>
              <Skills>Cloud</Skills>
            </SkillsWrapper>
          </Wrapper>
        </div>
        <ScrollDownArrow up={up} onClick={() => goTop()}>
          {upOrDown}
        </ScrollDownArrow>
      </HeroWrapper>
    </>
  );
}

const slideAnimation = keyframes`
  0% {margin-top: -1200px;}
  10% {margin-top: -1100px;}
  20% {margin-top: -1000px;}
  30% {margin-top: -900px;}
  40% {margin-top: -800px;}
  50% {margin-top: -700px;}
  60% {margin-top: -600px;}
  70% {margin-top: -500px;}
  80% {margin-top: -400px;}
  85% {margin-top: -300px;}
  90% {margin-top: -200px;}
  95% {margin-top: -100px;}
  100% {margin-top: 0px;}
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const SkillsWrapper = styled.div`
  width: 150px;
  height: 50px;
  overflow: hidden;
`;

const Skills = styled.div`
  height: 50px;
  line-height: 50px;
  margin-bottom: 50px;
  padding: 2px 15px;
  text-align: center;

  &:first-child {
    animation-name: ${slideAnimation};
    animation-duration: 15s;
    animation-iteration-count: infinite;
  }
`;

const File = styled.img`
  width: 20px;
  object-fit: contain;
  margin-right: 15px;
  cursor: pointer;
`;

const HeroWrapper = styled.main`
  width: 100vw;
  max-width: 1360px;
  min-height: 500px;
  overflow: hidden;
  margin-left: 100px;
  padding-left: 140px;
  height: max-content;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  @media only screen and (max-width: 950px) {
    padding-left: 100px;
  }
  @media only screen and (max-width: 800px) {
    padding-left: 80px;
  }
  @media only screen and (max-width: 600px) {
    padding-left: 0px;
    margin-left: 50px;
  }
  @media only screen and (max-width: 400px) {
    margin-left: 0px;
  }
`;

const LandingText = styled.div`
  width: 100%;
  font-size: 10em;
  line-height: 130px;
  color: #d3d3d3;
  min-height: max-content;
  span {
    font-weight: bold;
    font-style: italic;
    color: #d3d3d3;
  }

  small {
    padding-left: 20px;
    font-size: 16px;
    color: plum;
  }

  @media only screen and (max-width: 1180px) {
    font-size: 9em;
  }
  @media only screen and (max-width: 1080px) {
    font-size: 8em;
    line-height: 100px;
  }
  @media only screen and (max-width: 970px) {
    font-size: 7em;
    line-height: 100px;
  }
  @media only screen and (max-width: 850px) {
    font-size: 6em;
    line-height: 100px;
  }
  @media only screen and (max-width: 765px) {
    font-size: 5.5em;
    line-height: 80px;
  }
  @media only screen and (max-width: 700px) {
    font-size: 4.8em;
    line-height: 80px;
  }
  @media only screen and (max-width: 500px) {
    margin: 50px 0px;
  }
  @media only screen and (max-width: 400px) {
    font-size: 4.7em;
    line-height: 70px;
    padding-left: 15px;
    margin-bottom: 50px;
  }
  @media only screen and (max-width: 370px) {
    font-size: 4.6em;
    line-height: 70px;
    padding-left: 15px;
    margin-bottom: 15px;
  }

  div {
    min-width: 400px;
    width: 100%;
    min-height: max-content;
    overflow: hidden;
    z-index: 100;
  }

  .text {
    padding-left: 10px;
  }
`;

const ScrollDownArrow = styled.div`
  position: fixed;
  display: grid;
  justify-items: center;
  left: 100px;
  bottom: 60px;
  cursor: pointer;

  @media only screen and (max-width: 400px) {
    left: 30px;
    display: none;
  }
`;

const BtnWrapper = styled.div`
  position: relative;
  width: 130px;
  height: 50px;
  margin: 20px;
  overflow: hidden;
  background-color: ${(props) => (props.slide ? "#7FFFD4" : "black")};
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media only screen and (max-width: 400px) {
    /* margin: 0 auto; */
  }
`;

const Button = styled.div`
  position: absolute;
  width: 130px;
  height: 100%;
  background-color: black;
  padding: 10px 20px;
  font-size: 14px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-out;
  cursor: pointer;

  p {
    pointer-events: none;
    color: white;

    ::before {
      content: "";
      position: absolute;
      border: solid #d3d3d3;
      border-width: 0 2px 2px 0;
      display: inline-block;
      padding: 3px;
      left: 20px;
      bottom: 20px;
      transform: rotate(135deg);
      -webkit-transform: rotate(135deg);
    }
  }

  ${(props) =>
    props.slide &&
    css`
      transform: translateX(-50px) !important;
    `};
`;
