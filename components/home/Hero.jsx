import styled, { css } from "styled-components";
import { HomeContext } from "../../contexts/HomeContextProvider";
import { useContext, useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function Hero() {
  const { btnResume, setBtnResume } = useContext(HomeContext);
  const textRef = useRef([]);
  const mainTextRef = useRef([]);
  const btnRef = useRef();
  const heroRef = useRef();
  const reRef = useRef();
  const projectRef = useRef();

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
    // tl.from(btnRef.current, { yPercent: 100, duration: 1.5, opacity: 0 });
    tl.to(textRef.current, {
      scrollTrigger: {
        trigger: btnRef.current,
        start: "top 70%",
        end: "bottom 25%",
        makers: true,
        scrub: true,
      },
      yoyo: true,
      xPercent: -100,
      opacity: 0,
      duration: 4,
      stagger: 0.6,
    });

    tl.to(btnRef.current, {
      scrollTrigger: {
        trigger: btnRef.current,
        start: "top 30%",
        end: "bottom 30%",
        makers: true,
        scrub: true,
      },
      yoyo: true,
      yPercent: 200,
      duration: 3,
    });
  }, []);

  const handleResuBtn = () => {
    console.log("hello====>", btnResume);
    setBtnResume(!btnResume);
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
          <BtnWrapper slide={btnResume} ref={btnRef} className="btnResume">
            <Button
              ref={reRef}
              className="btnResume"
              slide={btnResume}
              onClick={handleResuBtn}
            >
              <p>Resume</p>
            </Button>
          </BtnWrapper>
        </div>
        <ScrollDownArrow></ScrollDownArrow>
      </HeroWrapper>
    </>
  );
}

const HeroWrapper = styled.main`
  width: 100vw;
  max-width: 1360px;
  overflow: hidden;
  margin-left: 100px;
  padding-left: 140px;
  height: max-content;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  @media only screen and (max-width: 800px) {
    padding-left: 100px;
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
  @media only screen and (max-width: 400px) {
    font-size: 4.7em;
    line-height: 70px;
    padding-left: 15px;
    margin-bottom: 15px;
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

    @media only screen and (max-width: 380px) {
      :first-child {
        padding-left: 50px;
      }
    }
  }

  .text {
    padding-left: 10px;
  }
`;

const ScrollDownArrow = styled.div`
  position: fixed;
  width: 2px;
  height: 80px;
  background-color: #d3d3d3;
  left: 100px;
  bottom: 20px;
  z-index: -1;

  ::before {
    position: absolute;
    content: "Scroll";
    font-size: 13px;
    top: -20px;
    left: -15px;
  }

  ::after {
    content: "";
    position: absolute;
    border: solid #d3d3d3;
    border-width: 0 2px 2px 0;
    display: inline-block;
    padding: 3px;
    left: -3px;
    bottom: 0;
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
  }

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
  background-color: ${(props) => (props.slide ? "grey" : "black")};

  @media only screen and (max-width: 400px) {
    margin: 0 auto;
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
