import styled from "styled-components";

// PROJETO SECTION

export const ProjetosSection = styled.section`
  height: 100%;
  background: rgb(4, 9, 32);
  background-size: cover;
  padding-top: 3rem;
`;

export const ProjetosContainer = styled.div`
  max-width: 68.75rem;
  margin: 0rem auto;
  padding: 0rem;
  display: flex;

  @media screen and (max-width: 756px) {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
  }

`;

// PROJETO TITULO

export const ProjetoTittleContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 68.75rem;
  margin: 0rem auto;
  padding: 0rem 3.125rem;

  @media screen and (max-width: 756px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
export const ProjetoTittle = styled.h1`
  color: aqua;
  font-size: 2.225rem;
  font-weight: 400;
  font-family: "Source Code Pro", monospace;
  text-align: start;
  margin-top: 0rem;
  padding-top: 7rem;

  @media screen and (max-width: 756px) {
    padding-top: 3rem;
  }
`;

// CARD CONTAINER

export const ProjetosCardContainer = styled.div`
  width: 350px;
  height: 450px;
  overflow: hidden;
  box-shadow: 0px 0px 15px -5;
  transition: 0.3s;
  animation: ease-in;
  background-color: #01010843;
  border-radius: 2%;
  border: 2px solid rgb(138, 43, 226);
  margin-top: 7rem;
  

  &:hover {
    transform: scale(1.5);
    box-shadow: 0px 0px 35px 0 rgb(138, 43, 226);
    cursor: pointer;
    margin-bottom: 5rem;

    @media screen and (max-width: 756px) {
      transform: scale(1.1);
    }
  }
  @media screen and (max-width: 756px) {
    margin-bottom: 1rem;
  }
`;

export const CardContentContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 0 auto;
  max-width: 1000px;

  @media screen and (max-width: 900px) {
    grid-template-columns: 1fr;
    padding-top: 0rem;
  }
`;
export const CardContentItem = styled.div`
  display: flex;
`;

// CARD IMG

export const ProjetosCardImgContainer = styled.div`
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
  width: auto;
`;
export const ProjetosCardImg = styled.img`
  width: 20.875rem;
  height: 10.938rem;
  border: 2px solid #03e8f4;
  border-radius: 2%;
  margin: 7px auto;
`;

// CARD TITLE

export const ProjetosTittleCardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ProjetosCardTittle = styled.h2`
  color: aqua;
  text-align: center;
  font-family: "Source Code Pro", monospace;
  color: rgb(178, 224, 224);
  display: flex;
  align-items: center;
  justify-content: center;
`;

// CARD DESCRIPTION

export const ProjetosCardDescContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ProjetosCardDescText = styled.p`
  color: white;
  font-family: "Source Code Pro", monospace;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
`;

//CARD SKILL

export const ProjetosCardSkillContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const ProjetosCardSkillText = styled.span`
  color: #03e8f471;
  display: flex;
  text-align: center;
  font-size: 0.75rem;
  align-items: center;
  justify-content: center;
  font-family: "Source Code Pro", monospace;
`;

// BUTTON GITHUB

export const ProjetosCardButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ProjetosCardButton = styled.button`
  border-radius: 6px;
  background: none;
  white-space: nowrap;
  padding: ${({ big }) => (big ? "12px 64px" : "10px 20px")};
  font-weight: 600;
  color: #fff;
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: 2px solid #03e9f4;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  margin: 15px;
  padding: 5px;

  &:before {
    background: rgb(138, 43, 226);
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

// BUTTON MORE...

export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-flow: wrap;
  gap: 0.5rem;
  margin-top: 4rem;
`;
export const Button = styled.button`
  border-radius: 4px;
  background: none;
  white-space: nowrap;
  padding: 10px 25px;
  font-weight: 600;
  color: #fff;
  font-size: 12px;
  outline: none;
  border: 2px solid #03e9f4;
  cursor: pointer;
  position: relative;
  overflow: hidden;

  &:before {
    background: rgb(138, 43, 226, 0.5);
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
    transition: all 0.5s ease-in-out;
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

//CAROUSEL

export const CarouselContainer = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 1000px;
  margin: 2rem auto;

  @media screen and (max-width: 756px) {
    margin: 2rem 1.5rem;
  }
`;
