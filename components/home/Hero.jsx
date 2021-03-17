import styled, { css } from "styled-components";
import { HomeContext } from "../../contexts/HomeContextProvider";
import { useContext, useRef, useEffect, useState } from "react";
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
        start: "top 75%",
        end: "bottom 25%",
        makers: true,
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
        makers: true,
        scrub: true,
      },
      yoyo: true,
      yPercent: -500,
      duration: 5,
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
        <ScrollDownArrow up={up} onClick={() => goTop()}>
          {upOrDown}
        </ScrollDownArrow>
      </HeroWrapper>
    </>
  );
}

const HeroWrapper = styled.main`
  width: 100vw;
  max-width: 1360px;
  min-height: 460px;
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
