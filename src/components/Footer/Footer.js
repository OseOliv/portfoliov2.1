import React from "react";
import {
  FooterContainer,
  FooterImg,
  FooterSection,
  FooterText,
  FooterSocialContainer
} from "./FooterStyles";

import LinkedinImg from '../../assets/img/linkd.png'
import GithubImg from '../../assets/img/gh.png'
import InstagramImg from '../../assets/img/inst.png'
import TwitterImg from '../../assets/img/twitter.png'
import { Link } from "react-router-dom";

function Footer() {
  return <>

  <FooterSection>
  <FooterContainer>
    <FooterText>
        Produzido por Oseas Oliveira.
    </FooterText>
    <FooterSocialContainer>
        <Link to="https://www.linkedin.com/in/oseoliveira/" target="_blank"><FooterImg src={LinkedinImg}></FooterImg></Link>
        <Link to="https://github.com/OseOliv" target="_blank"><FooterImg src={GithubImg}></FooterImg></Link>
        <Link to="https://www.instagram.com/ozzyoliveira/" target="_blank"><FooterImg src={InstagramImg}></FooterImg></Link>
        <Link to="https://twitter.com/ozzyoliv" target="_blank"><FooterImg src={TwitterImg}></FooterImg></Link>
         

    </FooterSocialContainer>
    
        
    
  </FooterContainer>
  </FooterSection>
  
  </>;
}

export default Footer;
