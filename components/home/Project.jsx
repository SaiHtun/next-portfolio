import styled, { css } from "styled-components";

export default function Project({ data, even }) {
  const { name, description, imageURL, webURL, githubURL } = data;
  return (
    <Container>
      <ImageWrapper even={even}>
        <ProjectImage source={imageURL}></ProjectImage>
      </ImageWrapper>
      <Info even={even}>
        <NameWrapper>
          <p>{name}</p>
          <p className="description">{description}</p>
        </NameWrapper>
        <SocialWrapper even={even}>
          <Social src="/github.svg"></Social>
          <Social src="/world.svg"></Social>
        </SocialWrapper>
      </Info>
    </Container>
  );
}

const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
`;

const Social = styled.img`
  width: 25px;
  height: 25px;
  object-fit: contain;
  margin: 2px;
`;

const NameWrapper = styled.div``;

const Container = styled.div`
  min-width: 360px;
  width: 100%;
  height: 400px;
  padding-top: 100px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media only screen and (max-width: 850px) {
    padding-top: 30px;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 100px;
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: teal;
  order: ${(props) => (props.even ? 2 : 1)};
  text-align: center;

  @media only screen and (max-width: 850px) {
    order: 1;
  }
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
