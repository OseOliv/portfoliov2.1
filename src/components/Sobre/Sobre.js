import React from "react";
import {
  AboutSection,
  AboutContainer,
  AboutTextTitle,
  AboutTextContent,
  AboutAvatar,
  AboutAvatarContainer,
  AboutTextTitleContainer,
  SkillContainer,
  SkillList,
  AboutTextContainer,
} from "./SobreStyles";

function Sobre() {
  return (
    <>
      <AboutSection id="sobre">
        <AboutContainer>
          <AboutTextTitleContainer>
            <AboutTextTitle> Sobre mim </AboutTextTitle>
          </AboutTextTitleContainer>

          <AboutTextContainer>
            <AboutTextContent>
              <p>
                Eu sou Oseas Oliveira, desenvolvedor web de Salvador-BA. Como
                profissional eu me esforço para criar designs sucintos,
                elegantes e responsivos, que proporcionem a melhor experiência
                possível aos usuários.
                <br />
                <br />
                Minha primeira interação com tecnologia ocorreu por meio da
                minha família, que sempre trabalhou na área de TI. Em 2005, tive
                meu primeiro contato com "Web Designer" e fiquei fascinado com o
                que poderia criar e fazer visualmente com um computador.
                <br />
                <br />
                Trabalhei como designer gráfico de 2018 até 2012, quando decidi
                me dedicar à área de gastronomia e trabalhei como chef de
                cozinha por quase nove anos em navios de cruzeiro. No entanto,
                me mantive atento as novidades que surgiram na área de
                desenvolvimento web nos últimos anos.
                <br />
                <br />
                Em janeiro de 2023, decidi voltar para a área de TI. Desde então
                tenho me dedicado a estudar as principais linguagens de
                programação front-end, frameworks e bibliotecas mais recentes.
                <br />
                <br />
                Algumas linguagens, frameworks e bibliotecas com as quais tenho
                trabalhado recentemente:
                <br />
                <br />
              </p>
            </AboutTextContent>

            <AboutAvatarContainer>
              <AboutAvatar />
            </AboutAvatarContainer>
          </AboutTextContainer>

          <SkillContainer>
            <SkillList> HTML </SkillList>
            <SkillList> CSS </SkillList>
            <SkillList> Axios </SkillList>
            <SkillList> JavaScript </SkillList>
            <SkillList> TypeScript </SkillList>
            <SkillList> Chakra UI </SkillList>
            <SkillList> React </SkillList>
            <SkillList> Node.js </SkillList>
            <SkillList> styled-components </SkillList>
          </SkillContainer>
        </AboutContainer>
      </AboutSection>
    </>
  );
}

export default Sobre;
