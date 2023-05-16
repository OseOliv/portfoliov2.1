import styled from "styled-components";


//NAVBAR CONTAINER

export const NavbarContainer = styled.nav`
  width: 100%;
  height: ${(props) => (props.extendNavbar ? "35vh" : "5rem")};
  background-color: rgb(4, 9, 32, 0.7);
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  z-index: 999;

  transition: top 0.3s;
  
  @media screen and (min-width: 756px) {
    height: 5rem;

  }
`;

export const MenuContainer = styled.div`
  flex: 70%;
  display: flex;
  align-items: center;
  padding-left: 5%;
`;

export const NavbarInnerContainer = styled.div`
  width: 100%;
  height: 5rem;
  display: flex;
`;

//NAVBAR LOGO

export const LogoContainer = styled.div`
  flex: 30%;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media screen and (max-width: 756px) {

  }
`;

export const LogoNavbar = styled.img`
  margin: 0.625rem 2rem;
  max-width: 4.95rem;
  height: auto;
  padding-top: 0.75rem;
  -webkit-transition: -webkit-transform 0.4s;
  transition: transform 0.4s;

  &:hover {
    -webkit-transform: scale(1.25) rotate(0.01deg);
    transform: scale(1.25) rotate(0.01deg);
  }

  @media screen and (min-width: 756px) {
    max-width: 4.45rem;
    margin: 0 4rem;
  }
`;


//NAVBAR MENU LINK CONTAINER

export const NavbarLinkContainer = styled.div`
  display: flex;
  margin-right: 7rem;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const NavbarLink = styled.a`
  text-decoration: none;
  font-family: "Roboto Mono", monospace;
  color: lightblue;
  font-weight: 600;
  font-size: 1rem;
  margin-right: 1.7rem;

  &::before {
    content: "❱";
    padding-right: 0rem;
    margin: 0;
  }

  &:hover,
  &.active {
    color: #03e9f4;
    border-bottom: 3px solid rgb(138, 43, 226);
    transition: all 0.1s ease-in;
    padding-bottom: 0.5rem;
  }

  @media screen and (max-width: 900px) {
    display: none;
  }
`;

//MOBILE

export const NavbarLinkExtended = styled.a`
  color: rgb(178, 224, 224);
  font-size: 1.2rem;
  font-family: "Roboto Mono", monospace;
  text-decoration: none;
  margin: 0.625rem;
`;

export const OpenLinksButton = styled.button`
  width: 4.375rem;
  height: 50px;
  background: none;
  border: none;
  color: white;
  font-size: 45px;
  cursor: pointer;

  @media screen and (min-width: 900px) {
    display: none;
  }
`;

export const NavbarExtendedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 756px) {
    display: none;
  }
`;
