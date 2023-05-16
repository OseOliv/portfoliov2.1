import React from "react";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  ContatoContainer,
  ContatoSection,
  ContatoTittle,
  ContatoButton,
  ContatoEmail,
  ContatoForm,
  ContatoName,
  ContatoText,
  ContatoTittleContainer,
} from './ContatoStyles';

function Contato() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const templateParams = {
    from_name: name,
    message: message,
    email: email,
  };

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .send(
        "service_0njhytm",
        "template_ej62gyr",
        templateParams,
        "1E6dtKOZtC9d6BJjD"
      )
      .then(
        (response) => {
          console.log("Mensagem enviada!", response.status, response.text);
          alert("Mensagem enviada!");
          setName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          console.log("Mensagem nao enviada: ", error);
        }
      );
  }

  return (
    <>
      <ContatoSection id="contato">
        <ContatoTittleContainer>
          <ContatoTittle>Contato</ContatoTittle>
        </ContatoTittleContainer>

        <ContatoContainer>
          <ContatoForm className="form" onSubmit={sendEmail}>
            <ContatoName
              className="input"
              type="name"
              placeholder="Digite seu nome"
              onChange={(e) => setName(e.target.value)}
              value={name}
              required
            />

            <ContatoEmail
              className="input"
              type="email"
              placeholder="Digite seu email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
            />

            <ContatoText
              className="textarea"
              type="text"
              placeholder="Digite sua mensagem"
              onChange={(e) => setMessage(e.target.value)}
              value={message}
              required
            />

            <ContatoButton>ENVIAR</ContatoButton>
          </ContatoForm>
        </ContatoContainer>
      </ContatoSection>
      
    </>
  );
}

export default Contato;
