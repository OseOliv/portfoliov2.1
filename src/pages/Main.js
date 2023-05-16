import React from "react";
import { Link } from "react-router-dom";
import {
  Container,
  ButtonWrapper,
  MainSection,
  MainText,
  MainTextDescription,
  MainTextHello,
  MainTextName,
  Button,
  MainQuoteText,
  SocialMediaContainer,
  SocialMediaImg,
  MainQuoteContainer,
  MainTextContainer,
  MainTextDescContainer,
  MainTextHelloContainer,
  MainTextNameContainer,
} from "../components/Main/MainStyles";

import LinkedinImg from "../../src/assets/img/linkd.png";
import GithubImg from "../../src/assets/img/gh.png";
import InstagramImg from "../../src/assets/img/inst.png";
import TwitterImg from "../../src/assets/img/twitter.png";

import Sobre from "../components/Sobre/Sobre";
import Projetos from "../components/Projetos/Projetos";
import Contato from "../components/Contato/Contato";
import Footer from "../components/Footer/Footer";

function Main() {
  return (
    <>
      <MainSection id="main" >
        <Container>
          <MainTextHelloContainer>
            <MainTextHello>Olá, meu nome é</MainTextHello>
          </MainTextHelloContainer>
          <MainTextNameContainer>
            <MainTextName>Oseas Oliveira.</MainTextName>
          </MainTextNameContainer>
          <MainTextDescContainer>
            <MainTextDescription>
              Tenho uma paixão insaciável em desenvolvimento web.
            </MainTextDescription>
          </MainTextDescContainer>
          <MainTextContainer>
            <MainText>
              Transformar minha criatividade, conhecimento e paixão pela beleza
              em um site é meu fascínio há mais de 18 anos.
            </MainText>
          </MainTextContainer>
          <MainQuoteContainer>
            <MainQuoteText>
              “<i>Experience is the name everyone gives to their mistakes.</i>”{" "}
              <br></br>- Oscar Wilde
            </MainQuoteText>
          </MainQuoteContainer>

          <ButtonWrapper>
            <Link to="https://www.linkedin.com/in/oseoliveira/" target="_blank">
              <Button big>RESUME</Button>
            </Link>
          </ButtonWrapper>
          <SocialMediaContainer>
            <Link to="https://www.linkedin.com/in/oseoliveira/" target="_blank">
              <SocialMediaImg src={LinkedinImg}></SocialMediaImg>
            </Link>
            <Link to="https://github.com/OseOliv" target="_blank">
              <SocialMediaImg src={GithubImg}></SocialMediaImg>
            </Link>
            <Link to="https://www.instagram.com/ozzyoliveira/" target="_blank">
              <SocialMediaImg src={InstagramImg}></SocialMediaImg>
            </Link>
            <Link to="https://twitter.com/ozzyoliv" target="_blank">
              <SocialMediaImg src={TwitterImg}></SocialMediaImg>
            </Link>
          </SocialMediaContainer>
        </Container>
      </MainSection>
      <Sobre id="sobre" />
      <Projetos id="projetos" />
      <Contato id="contato"/>
      <Footer />
    </>
  );
}

export default Main;
