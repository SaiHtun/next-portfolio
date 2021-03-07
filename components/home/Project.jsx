import styled, { css } from "styled-components";
import Image from "next/image";

export default function Project({ data }) {
  const { name, description, imageURL, webURL, githubURL, order = null } = data;

  return (
    <Container>
      <ImageWrapper order={order}>
        <Image src={imageURL} width="200" height="200"></Image>
      </ImageWrapper>
      <Info order={order}>
        <p>{name}</p>
        <p className="description">{description}</p>
        <SocialWrapper order={order}>
          <Image src="/world.svg" width="25px" height="25px"></Image>
          <Image src="/github.svg" width="25px" height="25px"></Image>
        </SocialWrapper>
      </Info>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 400px;
  padding-top: 100px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: teal;
  order: ${(props) => (props.order === "true" ? 2 : 1)};
  text-align: center;
`;

const Info = styled.div`
  text-align: ${(props) => (props.order === "true" ? "left" : "right")};
  order: ${(props) => (props.order === "true" ? 1 : 2)};
  .description {
    font-size: 14px;
    color: #9c9c9c;
  }
`;

const SocialWrapper = styled.div`
  width: 60px;
  padding-top: 20px;
  margin-left: auto;
  display: flex;
  justify-content: space-around;

  ${(props) =>
    props.order === "true" &&
    css`
      margin-left: 0;
      margin-right: auto;
    `}
`;
