import styled from "styled-components";

export default function Contact() {
  return (
    <>
      <Title></Title>
      <Container>
        <Info>
          <p>Email</p>
          <p>Designed and Developed by Sai</p>
        </Info>
        <MoreInfo>
          <div>
            <Headline>
              <span>Sai Htun 谷忠信</span>
              <Socials>
                <SocialIcon src="/facebook.svg"></SocialIcon>
                <SocialIcon src="/github.svg"></SocialIcon>
                <SocialIcon src="/twitter.svg"></SocialIcon>
                <SocialIcon className="email" src="/gmail.svg"></SocialIcon>
              </Socials>
            </Headline>
            <Caption>This awesome developer is located at SF Bay Area.</Caption>
            <ImageWrapper>
              <SaiImage src="/saisai.jpg"></SaiImage>
            </ImageWrapper>
          </div>
        </MoreInfo>
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 100vw;
  max-width: 1360px;
  overflow: hidden;
  height: max-content;
  margin-top: -50px;
  padding-left: 100px;
  padding-top: 150px;
  display: grid;
  grid-template-columns: 300px 1fr;

  @media only screen and (max-width: 400px) {
    padding-left: 0px;
    grid-template-columns: 1fr;
  }
`;

const Info = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  p:nth-last-child(1) {
    color: rgba(0, 0, 0, 0.3);
    text-align: right;
  }

  @media only screen and (max-width: 400px) {
    display: none;
  }
`;

const MoreInfo = styled.div`
  position: relative;
  width: 100%;
  height: max-content;
`;

const Headline = styled.div`
  width: 320px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media only screen and (max-width: 400px) {
    padding: 0px 20px;

    span {
      font-size: 15px;
    }
  }
`;

const Socials = styled.div`
  width: 100px;
  display: flex;
  justify-content: space-around;

  @media only screen and (max-width: 400px) {
    width: 120px;
  }

  .email {
    display: none;

    @media only screen and (max-width: 400px) {
      display: inline-block;
    }
  }
`;

const SocialIcon = styled.img`
  width: 25px;
  object-fit: contain;
`;

const Caption = styled.p`
  color: #a8a8a8;
  font-size: 14px;
  margin-bottom: 5px;

  @media only screen and (max-width: 400px) {
    padding: 0px 20px;
    font-size: 13px;
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: max-content;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SaiImage = styled.img`
  width: 850px;
  object-fit: contain;

  @media only screen and (max-width: 400px) {
    width: 400px;
    /* object-fit: fill */
  }
`;

const Title = styled.div`
  width: 200px;
  height: 2px;
  background-color: black;
  left: 0;
  position: relative;

  @media only screen and (max-width: 400px) {
    width: 100px;
  }

  ::after {
    content: "Contact";
    position: absolute;
    left: 230px;
    bottom: -30px;
    font-size: 4em;

    @media only screen and (max-width: 400px) {
      left: 100px;
      font-size: 3em;
    }
  }
`;
