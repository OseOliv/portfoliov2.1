import styled from "styled-components";
import Avatar from "../../assets/img/avatar.jpg";

//SECTION

export const AboutSection = styled.section`
  height: 100%;
  width: 100%;
  background: rgb(4, 9, 32);
  background-size: cover;
  padding-top: 3rem;
  
`;
export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding-bottom: 4rem;
  max-width: 1000px;
`;



//ABOUT TITLE

export const AboutTextTitleContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 68.75rem;
  margin: 0rem auto;

  &::after {
    content: "";
    display: block;
    position: relative;
    width: 650px;
    height: 3px;
    margin-left: 20px;
    background-color: rgba(137, 43, 226, 0.3);
    
      @media screen and (max-width: 756px) {
      width: 100px;
  
    }
}


  @media screen and (max-width: 756px){
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
  }
`

export const AboutTextTitle = styled.h1`
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

//ABOUT TEXT CONTENT

export const AboutTextContainer = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 1000px;
`;

export const AboutTextContent = styled.p`
  font-size: 1rem;
  line-height: 24px;
  text-align: start;
  align-items: center;
  justify-content: center;
  letter-spacing: 2px;
  color: #ffffff;
  font-family: "Roboto Mono", monospace;
  margin-bottom: 0rem;
  padding-bottom: 0rem;

  @media screen and (max-width: 756px) {
    max-width: 350px;
    text-align: center;
    margin: 0rem auto;
  }
`;

// ABOUT AVATAR

export const AboutAvatarContainer = styled.div`
  display: flex;
  margin-top: 6rem;

  @media screen and (max-width: 900px){
    display: none;
  }
`
export const AboutAvatar = styled.img`
  background-image: url(${Avatar});
  background-size: contain;
  border: 0.1875rem solid rgba(137, 43, 226, 0.656);
  border-radius: 10%;
  width: 16.75rem;
  height: 16.75rem;
  margin-left: 25px;
  transition: 0.3s ease-in;
  cursor: pointer;

  &:hover {
    border: 0.1875rem solid aqua;
    transform: scale(1.3);
    transition: 0.3s ease-in;
  }
`;

// SKILLS

export const SkillContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  color: rgba(138, 247, 234, 0.8);
  max-width: 650px;
  align-self: flex-start;
  padding-left: 0rem;

  @media screen and (max-width: 756px) {
    display: flex;
    flex-direction: column;
    padding-left: 3rem;
  }
  
`;

export const SkillList = styled.li`
  display: flex;
  line-height: 28px;
  list-style: none;
  font-size: 16px;
  flex-basis: calc(33.33% - 1rem);
  font-family: "Source Code Pro", monospace;
  gap: 0.5rem;

  &::before {
    content: "♦";
    display: inline-block;
    width: 1rem;
    height: 1rem;
    background-repeat: no-repeat;
    background-size: contain;
    margin-right: 0.525rem;
  }

`;
