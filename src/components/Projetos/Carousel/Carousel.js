import React from "react";
import { motion} from "framer-motion";
import './Carousel.css'
import { useState, useEffect, useRef } from "react";

import img0 from "../../../assets/img/teste-projetos.png";
import img1 from "../../../assets/img/teste-projetos1.png";
import img2 from "../../../assets/img/teste-projetos2.png";
import img3 from "../../../assets/img/teste-projetos3.png";
import img4 from "../../../assets/img/teste-projetos5.png";
import img5 from "../../../assets/img/teste-projetos6.png";

import { CarouselContainer } from "../ProjetosStyles";

const projetosImg =  [
{ img: img0, link: "https://github.com/OseOliv/portfolio-v1" },
{ img: img5, link: "https://github.com/OseOliv/op-memory-game" },
{ img: img1, link: "https://github.com/OseOliv/Exemple-Coffee-Shop-WebSite-BootStrap" },
{ img: img2, link: "https://github.com/OseOliv/Exercicio-1-CSS-DIO" },
{ img: img3, link: "https://github.com/OseOliv/Pokedex" },
{ img: img4, link: "https://github.com/OseOliv/IMC-APP-TS" }
]



function ProjetoCarousel() {

  const [width, setWidth] = useState(0);
  const carousel = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      if (carousel.current) {
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
      }
    }, 0);
  }, [carousel]);

  const handleLinkClick = (event) => {
    event.preventDefault();
    const link = event.currentTarget.href;
    window.open(link, "_blank");
  };


    return (
      <CarouselContainer>
        <motion.div ref={carousel} className="carousel">
          <motion.div
            drag="x"
            className="inner"
            dragConstraints={{ right: 0, left: -width }}
          >
            {projetosImg.map(({ img, link }, index) => (
              <motion.div className="item" key={index}>
                <a href={link} target="_blank" rel="noopener noreferrer" onClick={handleLinkClick}>
                  <img src={img} alt={`Projeto ${index}`} />
                </a>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </CarouselContainer>
    );
  }
  
export default ProjetoCarousel;
