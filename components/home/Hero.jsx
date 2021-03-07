import styled, { css } from "styled-components";
import { HomeContext } from "../../contexts/HomeContextProvider";
import { useContext } from "react";

export default function Hero() {
  const { btnResume, setBtnResume } = useContext(HomeContext);

  return (
    <>
      <HeroWrapper>
        <div>
          <LandingText>
            <div>
              This is <span>Sai</span>
            </div>
            <div>
              a <span>Designer</span>{" "}
            </div>
            <div>
              who can <span>Code.</span>
            </div>
          </LandingText>
          <BtnWrapper className="btnResume">
            <Button
              className="btnResume"
              slide={btnResume}
              onClick={() => setBtnResume(!btnResume)}
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
  max-width: 1250px;
  overflow-x: hidden;
  overflow-y: hidden;
  margin-left: 100px;
  padding-left: 140px;
  height: 70vh;
  /* background-color: #d3d3d3; */
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
  font-size: 10em;
  line-height: 130px;
  color: #d3d3d3;
  span {
    font-weight: bold;
    font-style: italic;
    color: black;
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
    font-size: 4.7em;
    line-height: 80px;
  }
  @media only screen and (max-width: 400px) {
    font-size: 4.5em;
    line-height: 60px;
    margin-left: 20px;
    margin-bottom: 15px;
  }
`;

const ScrollDownArrow = styled.div`
  position: fixed;
  width: 2px;
  height: 80px;
  background-color: #d3d3d3;
  left: 100px;
  bottom: 20px;

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
  background-color: #f3f3f3;
  margin: 20px;

  @media only screen and (max-width: 400px) {
    width: 130px;
    height: 40px;
    margin: 0 auto;
  }
`;

const Button = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: black;
  padding: 10px 20px;
  font-size: 15px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-out;
  cursor: pointer;

  p {
    pointer-events: none;
    color: white;
    @media only screen and (max-width: 400px) {
      font-size: 13px;
      font-weight: 400;
    }
  }

  ${(props) =>
    props.slide &&
    css`
      transform: translateX(-60px);
    `}
`;
