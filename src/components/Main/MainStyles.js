import styled from "styled-components";

//SECTION

export const MainSection = styled.section`
  height: 100%;
  background: rgb(4, 9, 32);
  background-size: cover;
  padding-top: 3rem;
`;

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 4rem;
  padding-left: 2rem;
  padding-right: 2rem;

  @media screen and (max-width: 756px) {
    padding-bottom: 3rem;
  }
`;

//MAIN TITLE

export const MainTextHelloContainer = styled.div`
  display: flex;
  max-width: 1000px;
  align-items: center;
  justify-content: center;
`;

export const MainTextHello = styled.h1`
  color: aqua;
  font-size: 1.225rem;
  font-weight: 400;
  font-family: "Source Code Pro", monospace;
  text-align: center;
  margin-bottom: 0rem;
  margin-top: 0rem;
  padding-top: 10rem;
  padding-left: 0.625rem;

  @media screen and (max-width: 756px) {
    padding-top: 3rem;
  }
`;

//MAIN TEXT NAME

export const MainTextNameContainer = styled.div`
  display: flex;
  max-width: 1000px;
  align-items: center;
  justify-content: center;
`;

export const MainTextName = styled.h2`
  color: rgb(178, 224, 224);
  font-size: 4.75rem;
  font-weight: 700;
  font-family: "Source Code Pro", monospace;
  text-align: center;
  margin-top: 0rem;
  margin-bottom: 0.938rem;

  @media screen and (max-width: 756px) {
    font-size: 3rem;
  }
`;

//MAIN TEXT DESCRIPTION

export const MainTextDescContainer = styled.div`
  display: flex;
  max-width: 1000px;
  align-items: center;
  justify-content: center;
`;

export const MainTextDescription = styled.h3`
  color: rgba(204, 231, 231, 0.719);
  font-size: 2.5rem;
  font-weight: 800;
  font-family: "Source Code Pro", monospace;
  text-align: center;
  margin-top: 0rem;

  @media screen and (max-width: 756px) {
    font-size: 1.5rem;
  }
`;

//MAIN TEXT CONTENT

export const MainTextContainer = styled.div`
  display: flex;
  max-width: 1000px;
  align-items: center;
  justify-content: center;
`;

export const MainText = styled.p`
  font-size: 1rem;
  letter-spacing: 0.125rem;
  color: #ffffff;
  font-family: "Roboto Mono", monospace;
  text-align: center;
  margin-bottom: 3.125rem;

  @media screen and (max-width: 756px) {
    margin-bottom: 2.125rem;

  }

`;

//MAIN QUOTE

export const MainQuoteContainer = styled.div`
  display: flex;
  max-width: 1000px;
  align-items: center;
  justify-content: center;
  padding-top: 0rem;
  margin-top: 0rem;
`;

export const MainQuoteText = styled.p`
  color: rgba(138, 247, 234, 0.5);
  font-size: 2.75rem;
  font-weight: 300;
  font-family: "Source Code Pro", monospace;
  text-align: center;
  padding-bottom: 1rem;
  padding-top: 0rem;
  margin-top: 0rem;

  @media screen and (max-width: 756px) {
    font-size: 1.5rem;

  }
`;

// MAIN BUTTON
export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-flow: wrap;
  gap: 0.5rem;
`;

export const Button = styled.button`
  border-radius: 4px;
  background: none;
  white-space: nowrap;
  padding: ${({ big }) => (big ? "12px 64px" : "10px 20px")};
  font-weight: 600;
  color: #fff;
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: 2px solid #03e9f4;
  position: relative;
  cursor: pointer;
  overflow: hidden;

  &:before {
    background: rgb(138, 43, 226, 0.5);
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
    transition: all 0.6s ease;
    width: 102%;
    height: 0%;
  }

  &:hover:before {
    height: 200%;
  }
  &:hover {
    z-index: 1;
    color: #03e9f4;
  }
`;

//SOCIAL MEDIA

export const SocialMediaContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0rem;
  padding-top: 2rem;
`;

export const SocialMediaImg = styled.img`
  display: flex;
  flex-direction: column;
  padding: 1.25rem;
  width: 4.375rem;
  transition: 2 ease-in;

  &:hover {
    transform: scale(1.3);
    transition: 2 ease-in;
  }
`;
