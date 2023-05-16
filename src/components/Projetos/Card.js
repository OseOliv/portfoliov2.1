import React from "react";
import { Link } from "react-router-dom";
import {
  ProjetosContainer,
  ProjetosCardDescText,
  ProjetosCardButton,
  ProjetosCardButtonContainer,
  ProjetosCardContainer,
  ProjetosCardDescContainer,
  ProjetosCardSkillContainer,
  ProjetosCardSkillText,
  ProjetosCardTittle,
  ProjetosCardImgContainer,
  ProjetosCardImg,
  ProjetosTittleCardContainer,
} from "./ProjetosStyles";



export default function CardContent(props) {
  return (
    <>
      <ProjetosContainer>
        <ProjetosCardContainer>
          <ProjetosCardImgContainer>
            <ProjetosCardImg src={props.img} />
          </ProjetosCardImgContainer>

          <ProjetosTittleCardContainer>
            <ProjetosCardTittle>{props.title}</ProjetosCardTittle>
          </ProjetosTittleCardContainer>

          <ProjetosCardDescContainer>
            <ProjetosCardDescText>
             {props.description}
            </ProjetosCardDescText>
          </ProjetosCardDescContainer>

          <ProjetosCardSkillContainer>
            <ProjetosCardSkillText>
              {props.skill}
            </ProjetosCardSkillText>
            <ProjetosCardButtonContainer>
            <Link to={props.buttonlink} target="_blanc">
              <ProjetosCardButton>Github</ProjetosCardButton>
            </Link>
          </ProjetosCardButtonContainer>
          
          </ProjetosCardSkillContainer>

         
        </ProjetosCardContainer>
      </ProjetosContainer>
    </>
  );
}
