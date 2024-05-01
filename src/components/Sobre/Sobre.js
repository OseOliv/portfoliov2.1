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
                Meu nome é Oseas Oliveira, sou um desenvolvedor front-end. Minha abordagem se concentra na efetividade e na aplicação das melhores práticas na escrita de códigos, visando sempre proporcionar a melhor experiência aos usuários.
                <br />
                <br />
                A tecnologia tem sido uma presença constante em minha vida. Foi em 2005 que tive meu primeiro contato com o mundo do "Web Design", e desde então fiquei fascinado com as possibilidades visuais que um computador poderia oferecer.
                <br />
                <br />
Apesar de minha experiência de 12 anos na gastronomia, nunca deixei de acompanhar as novidades no desenvolvimento web. Hoje, mantenho-me focado nos estudos das linguagens front-end e nas últimas tecnologias, buscando aprimorar constantemente minhas habilidades.
              
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
            <SkillList> JavaScript </SkillList>
            <SkillList> TypeScript </SkillList>
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
