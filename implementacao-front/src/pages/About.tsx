import React from 'react';
import MenuBar from "../components/MenuBar";
import Profile from "../components/Profile";
import styles from "./About.module.css";
import { AiFillGithub } from "react-icons/ai";

function About() {
  return (
    <div className={styles.container}>
      <MenuBar />
      <section className={styles.content}>
        <h1>Conheça um pouco mais do nosso projeto!</h1>
        <hr />
        <p>Este projeto é resultado da disciplina de Métodos de Desenvolvimento de Software, ministrada na Universidade de Brasília.</p>
        <h2>Objetivo:</h2>
        <hr />
        <p>O objetivo principal do projeto é contribuir para a transparência e responsabilidade governamental a partir da coleta de diários oficiais municipais de diferentes municípios do Rio Grande do Sul e analisar informações relacionadas a nomeações e exonerações de servidores públicos.</p>
        <h2>Equipe de estudantes desenvolvedores:</h2>
        <hr />
        <div className={styles.teamContainer}>
          <Profile name='Ana Borges' photo='https://avatars.githubusercontent.com/u/109738757?v=4' />
          <Profile name='Bianca Patrocínio' photo='https://avatars.githubusercontent.com/u/70040539?v=4' />
          <Profile name='Bruno Duarte' photo='https://avatars.githubusercontent.com/u/104954891?v=4' />
          <Profile name='Cecília Quaresma' photo='https://avatars.githubusercontent.com/u/92647006?v=4' />
          <Profile name='Matheus de Mello' photo='https://avatars.githubusercontent.com/u/100366395?v=4' />
          <Profile name='Vitor Feijó' photo='https://avatars.githubusercontent.com/u/69637300?v=4' />
        </div>
        <div className={styles.repository}>
          <AiFillGithub size={50} />
          <a className={styles.repositoryLink} target="_blank" href="https://github.com/unb-mds/2023-2-Squad08">GitHub: Clique aqui e acesse o repositório do Projeto!</a>
        </div>
      </section>
    </div>
  );
}

export default About;
