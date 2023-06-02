import React from "react";
import { Link } from "react-router-dom";
import {
  ProjetosSection,
  ProjetoTittleContainer,
  ProjetoTittle,
  CardContentContainer,
  ButtonWrapper,
  Button,
} from "./ProjetosStyles";
import CardContent from "./Card";

import ProImg0 from "../../assets/img/teste-projetos.png";
import ProImg1 from "../../assets/img/teste-projetos1.png";
import ProImg3 from "../../assets/img/teste-projetos3.png";
import ProImg4 from "../../assets/img/teste-projetos4.png";
import ProImg5 from "../../assets/img/teste-projetos5.png";
import ProImg6 from "../../assets/img/teste-projetos6.png";

import ProjetoCarousel from "./Carousel/Carousel";

export default function ProjetosCard(props) {
  return (
    <ProjetosSection id="projetos">
      <ProjetoTittleContainer>
        <ProjetoTittle>Projetos</ProjetoTittle>
      </ProjetoTittleContainer>
      <ProjetoCarousel />
      <CardContentContainer>
        <CardContent
          img={ProImg0}
          title="Portfolio v1.0"
          description="Meu primeiro projeto de portfólio usando apenas HTML, CSS e JavaScript, sem o uso de nenhuma biblioteca ou framework."
          skill="▹HTML ▹CSS ▹JavaScript"
          buttonlink="https://github.com/OseOliv/portfolio-v1"
        />

        <CardContent
          img={ProImg1}
          title="CoffeShop Website"
          description="Modelo de website para uma cafeteria, feito com alguns frameworks e utilizando algumas bibliotecas."
          skill="▹HTML ▹CSS ▹Bootstrap ▹JavaScript"
          buttonlink="https://github.com/OseOliv/Exemple-Coffee-Shop-WebSite-BootStrap"
        />
            
         <CardContent
          img={ProImg6}
          title="Jogo da Memoria - OP"
          description="Modelo de um jogo da memória com cards de personagens de One Piece, utilizando React, TypeScript e styled-components."
          skill="▹React ▹Typescrit ▹styled-components"
          buttonlink="https://github.com/OseOliv/op-memory-game"
        />

        <CardContent
          img={ProImg4}
          title="Weather App"
          description="Modelo de um Weather App em React, utilizando OpenWeatherMap API and GeoDB API e estilizado com CSS e JavaScript"
          skill="▹React ▹CSS ▹JavaScript ▹ OpenWeather API"
          buttonlink="https://github.com/OseOliv/Weather-App-v1"
        />

        <CardContent
          img={ProImg5}
          title="IMC App"
          description="App para calcular o Índice de Massa Corpórea (IMC), utilizando o TypeScript e CSS Modules (App Responsivo)"
          skill="▹React ▹Typescript ▹CSS"
          buttonlink="https://github.com/OseOliv/IMC-APP-TS"
        />

        <CardContent
          img={ProImg3}
          title="Pokedex Pokemon"
          description="Modelo simples de uma Pokedex Pokémon, utilizando a PokeAPI e estilizando apenas com CSS e JavaScript."
          skill="▹HTML ▹CSS ▹JavaScript ▹PokeAPI"
          buttonlink="https://github.com/OseOliv/Pokedex"
        />
      </CardContentContainer>

      <ButtonWrapper>
        <Link to="https://github.com/OseOliv" target="_blanc">
          <Button>VER MAIS...</Button>
        </Link>
      </ButtonWrapper>
    </ProjetosSection>
  );
}
