import { useState, useEffect, useRef, useContext } from "react";
import styled, { css } from "styled-components";
import Link from "next/link";
import gsap from "gsap";
// context api
import { HomeContext } from "../contexts/HomeContextProvider";

export default function Nav() {
  const logoRef = useRef();
  const menuRef = useRef([]);
  const hamburgerRef = useRef();
  const overlayRef = useRef();
  // const [menu, setMenu] = useState(false);
  const { menu, setMenu } = useContext(HomeContext);

  useEffect(() => {
    gsap.from(logoRef.current, {
      opacity: 0,
      yPercent: 100,
      duration: 2,
      delay: 4,
    });
    gsap.from(menuRef.current, {
      opacity: 0,
      yPercent: 100,
      duration: 2,
      stagger: 0.5,
      delay: 4,
    });
    gsap.from(hamburgerRef.current, {
      opacity: 0,
      yPercent: 100,
      duration: 2,
      stagger: 0.5,
      delay: 4,
    });
  }, []);

  return (
    <>
      <Container open={menu}>
        <Logo src="/astronaut-ingravity.svg" ref={logoRef}></Logo>
        <Menu>
          {["Profile", "Blog"].map((li, i) => {
            return (
              <li key={i} ref={(e) => (menuRef.current[i] = e)}>
                {li}
              </li>
            );
          })}
        </Menu>
        <HamWrapper onClick={() => setMenu(!menu)} ref={hamburgerRef}>
          <Hamburger>
            <Close close={menu}>Close</Close>
            <LineClose close={menu}></LineClose>
            <Line close={menu}></Line>
          </Hamburger>
        </HamWrapper>
      </Container>
      <MenuOverlay overlayRef open={menu}>
        <Info>
          <Link href="#">Profile </Link>
          <Link href="#">Blog </Link>
        </Info>
        <Socials>
          <Link href="#">Facebook </Link>
          <Link href="#">Github </Link>
          <Link href="#">Email </Link>
        </Socials>
      </MenuOverlay>
    </>
  );
}

const MenuOverlay = styled.div`
  width: 100vw;
  height: 70vh;
  position: absolute;
  background-color: white;
  transform: translateY(-700px);
  transition: all 0.6s ease-in-out;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 2;

  @media only screen and (max-width: 800px) {
    /* padding-left: 50px; */
  }
  @media only screen and (max-width: 800px) {
    /* padding-left: 20px; */
  }
  /* background-color: black; */

  ${(props) =>
    props.open &&
    css`
      transform: translateY(0px);
      position: fixed;
    `}
`;

const Info = styled.ul`
  width: 100%;
  min-height: 300px;
  height: max-content;
  color: black;
  /* background-color: red; */
  z-index: 100;
  display: flex;
  flex-direction: column;
  font-size: 3em;
  padding: 60px;

  @media only screen and (max-width: 600px) {
    padding: 20px;
  }
`;
const Socials = styled.div`
  width: 100%;
  height: max-content;
  padding-left: 60px;

  a {
    color: rgba(0, 0, 0, 0.5);
    margin: 5px;
    font-size: 13px;
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

  @media only screen and (max-width: 600px) {
    padding: 20px;
  }
`;

const Close = styled.p`
  font-size: 12px;
  transform: translateY(100px);
  transition: all 0.5s ease-in-out;
  position: absolute;

  ${(props) =>
    props.close &&
    css`
      transform: translateY(-5px);
    `}
`;

const Container = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 60px 100px;
  z-index: 100;

  @media only screen and (max-width: 1000px) {
    padding: 50px 60px;
  }
  @media only screen and (max-width: 600px) {
    padding: 50px 50px;
  }
  @media only screen and (max-width: 400px) {
    padding: 50px 20px;
  }

  ${(props) =>
    props.open &&
    css`
      overflow: hidden;
    `}
`;

const Logo = styled.img`
  width: 50px;
  height: 50px;

  z-index: 10;
`;

const HamWrapper = styled.div`
  width: 50px;
  height: 50px;
  display: none;
  cursor: pointer;

  z-index: 10;

  @media only screen and (max-width: 800px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Hamburger = styled.div`
  width: 32px;
  height: 20px;
  overflow: hidden;
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const Line = styled.div`
  width: 100%;
  height: 2px;
  transition: all 1s ease-in-out;
  background-color: ${(props) => (props.close ? "red" : "black")};
`;
const LineClose = styled.div`
  width: 100%;
  height: 2px;
  background-color: rgba(0, 0, 0, 0.5);
  transition: all 0.5s ease-in-out;

  ${(props) =>
    props.close &&
    css`
      opacity: 0;
      transform: translateY(10px);
    `}
`;

const Menu = styled.ul`
  list-style: none;
  text-align: right;

  @media only screen and (max-width: 800px) {
    display: none;
  }

  li {
    position: relative;
    cursor: pointer;
    ::after {
      content: "";
      position: absolute;
      width: 0px;
      height: 2px;
      background-color: #f3f3f3;
      left: 60px;
      top: 10px;
      transition: all 0.3s ease-in-out;
    }

    &:hover {
      ::after {
        content: "";
        position: absolute;
        width: 60px;
        height: 2px;
        background-color: #b1b0b0;
        left: 60px;
        top: 10px;
      }
    }
  }
`;
