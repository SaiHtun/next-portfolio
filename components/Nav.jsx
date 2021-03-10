import { useState, useEffect, useRef } from "react";
import styled, { css } from "styled-components";
import gsap from "gsap";

export default function Nav() {
  const logoRef = useRef();
  const menuRef = useRef([]);
  const [menu, setMenu] = useState(false);

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
    // gsap.to(logoRef.current, {
    //   yPercent: () => Math.random() * (5 - 2) + 2,
    //   duration: 3,
    //   repeat: -1,
    //   yoyo: true,
    // });
  }, []);

  const handleMenu = () => {
    console.log("menu");
  };

  return (
    <Container>
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
      <HamWrapper onClick={() => setMenu(!menu)}>
        <Hamburger>
          <Close close={menu}>Close</Close>
          <LineClose close={menu}></LineClose>
          <Line close={menu}></Line>
        </Hamburger>
      </HamWrapper>
    </Container>
  );
}

const Close = styled.p`
  font-size: 12px;
  transform: translateY(100px);
  transition: all 1s ease-in-out;
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

  @media only screen and (max-width: 1000px) {
    padding: 50px 60px;
  }
  @media only screen and (max-width: 600px) {
    padding: 50px 50px;
  }
  @media only screen and (max-width: 400px) {
    padding: 50px 20px;
  }
`;

const Logo = styled.img`
  width: 50px;
  height: 50px;
  /* filter: drop-shadow(0 20 40 rgba(0, 0, 0.5)); */
  filter: drop-shadow(30px 10px 4px rgba(0, 0, 0, 0.5));
  /* filter: drop-shadow(0 0 0.75rem crimson); */
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
  background-color: ${(props) => (props.close ? "pink" : "black")};
`;
const LineClose = styled.div`
  width: 100%;
  height: 2px;
  background-color: rgba(0, 0, 0, 0.5);
  transition: all 1s ease-in-out;

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
