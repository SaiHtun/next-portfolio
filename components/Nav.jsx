import styled from "styled-components";
import Image from "next/image";

export default function Nav() {
  return (
    <Container>
      <Image src="/astronaut-ingravity.svg" width="50" height="50"></Image>
      <Menu>
        <li>Profile</li>
        <li>Projects</li>
        <li>Blogs</li>
        <li>Contact</li>
      </Menu>
      <HamWrapper>
        <Hamburger>
          <Line></Line>
          <Line></Line>
        </Hamburger>
      </HamWrapper>
    </Container>
  );
}

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

const HamWrapper = styled.div`
  width: 50px;
  height: 50px;
  display: none;
  cursor: pointer;

  @media only screen and (max-width: 800px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Hamburger = styled.div`
  width: 30px;
  height: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const Line = styled.div`
  width: 100%;
  height: 2px;
  background-color: rgba(0, 0, 0, 0.5);
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
