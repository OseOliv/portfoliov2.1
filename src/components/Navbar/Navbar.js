import React from "react";
import {
  NavbarContainer,
  LogoContainer,
  MenuContainer,
  NavbarInnerContainer,
  NavbarExtendedContainer,
  NavbarLinkContainer,
  NavbarLink,
  LogoNavbar,
  OpenLinksButton,
  NavbarLinkExtended,
} from "./NavbarStyles";
import Logo from "../../assets/img/logo.png";
import { useState } from "react";

function Navbar() {
  const [extendNavbar, setExtendNavbar] = useState(false);

  return (
    <NavbarContainer extendNavbar={extendNavbar}>
      <NavbarInnerContainer>
        <MenuContainer>
          <NavbarLinkContainer>
            <NavbarLink href="#main"> Inicio </NavbarLink>
            <NavbarLink href="#sobre"> Sobre </NavbarLink>
            <NavbarLink href="#projetos"> Projetos </NavbarLink>
            <NavbarLink href="#contato"> Contato </NavbarLink>

            <OpenLinksButton
              onClick={() => {
                setExtendNavbar((curr) => !curr);
              }}
            >
              {extendNavbar ? (
                <span style={{ color: "#03e9f4" }}> &#10005;</span>
              ) : (
                <span style={{ color: "#03e9f4" }}> &#8801; </span>
              )}
            </OpenLinksButton>
          </NavbarLinkContainer>
        </MenuContainer>
        <LogoContainer>
          <a href="/">
            <LogoNavbar src={Logo}></LogoNavbar>
          </a>
        </LogoContainer>
      </NavbarInnerContainer>

      {extendNavbar && (
        <NavbarExtendedContainer>
          <NavbarLinkExtended
            onClick={() => setExtendNavbar(false)}
            href="#main"
          >
            Inicio
          </NavbarLinkExtended>
          <NavbarLinkExtended
            onClick={() => setExtendNavbar(false)}
            href="#sobre"
          >
            Sobre
          </NavbarLinkExtended>
          <NavbarLinkExtended
            onClick={() => setExtendNavbar(false)}
            href="#projetos"
          >
            Projetos
          </NavbarLinkExtended>
          <NavbarLinkExtended
            onClick={() => setExtendNavbar(false)}
            href="#contato"
          >
            Contato
          </NavbarLinkExtended>
        </NavbarExtendedContainer>
      )}
    </NavbarContainer>
  );
}

export default Navbar;
