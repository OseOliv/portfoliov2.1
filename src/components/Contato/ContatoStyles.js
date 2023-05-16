import styled from "styled-components";

// SECTION

export const ContatoSection = styled.section`
  height: 100%;
  background: rgb(4, 9, 32);
  background-size: cover;
  padding-top: 3rem;
`;

export const ContatoContainer = styled.div`
  width: 100%;
  max-width: 68.75rem;
  margin: 0rem auto;
  padding: 0rem 3.125rem;

  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 0rem;
  padding-bottom: 10rem;

  @media screen and (max-width: 756px) {
    width: 300px;
  }
`;

// CONTATO TITLE
export const ContatoTittleContainer = styled.div`
 display: flex;
  width: 100%;
  max-width: 68.75rem;
  margin: 0rem auto;
  padding: 0rem 3.125rem;
  
  @media screen and (max-width: 756px) {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    margin-top: 4rem;
  }

`;

export const ContatoTittle = styled.h1`
  color: aqua;
  font-size: 2.225rem;
  font-weight: 400;
  font-family: "Source Code Pro", monospace;
  margin-top: 0rem;
  padding-top: 7rem;

  @media screen and (max-width: 756px) {
    padding-top: 3rem;
  }
`;

// CONTATO FORMS

export const ContatoForm = styled.form`
  background-color: transparent;
  padding: 20px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  margin-top: 2.5rem;

  @media screen and (max-width: 756px) {
    width: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 1rem;
  }
`;

export const ContatoName = styled.input`
  width: 40rem;
  padding: 10px;
  color: #ffffff;
  background-color: transparent;
  border: 2px solid rgb(138, 43, 226);
  border-radius: 5px;
  font-family: "Source Code Pro", monospace;
  margin-bottom: 1rem;

  &::placeholder {
    color: aqua;
  }
  @media screen and (max-width: 756px) {
    width: 300px;
  }
`;
export const ContatoEmail = styled.input`
  width: 40rem;
  padding: 10px;
  color: #ffffff;
  background-color: transparent;
  border: 2px solid rgb(138, 43, 226);
  border-radius: 5px;
  font-family: "Source Code Pro", monospace;
  margin-bottom: 1rem;

  &::placeholder {
    color: aqua;
  }
  @media screen and (max-width: 756px) {
    width: 300px;
  }
`;

export const ContatoText = styled.textarea`
  width: 40rem;
  height: 12rem;
  padding: 10px;
  color: #ffffff;
  background-color: transparent;
  border: 2px solid rgb(138, 43, 226);
  border-radius: 5px;
  display: flex;
  font-family: "Source Code Pro", monospace;
  margin-bottom: 2rem;

  &::placeholder {
    color: aqua;
  }
  @media screen and (max-width: 756px) {
    width: 300px;
  }
`;

// CONTATO BUTTON

export const ContatoButton = styled.button`
  border-radius: 4px;
  background: none;
  white-space: nowrap;
  padding: ${({ big }) => (big ? "12px 64px" : "10px 20px")};
  font-weight: 600;
  color: #fff;
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: 2px solid #03e9f4;
  cursor: pointer;
  overflow: hidden;
  position: relative;

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
  @media screen and (max-width: 756px) {
    width: 300px;
  }
`;
