import React from "react"
import Link from "atoms/Link/Link"
import MaxWidth from "atoms/MaxWidth/MaxWidth"
import SocialRow from "molecules/SocialRow/SocialRow"
import "./Intro.scss"

const Intro = () => {
  return (
    <MaxWidth size="m" className="Intro">
      <h1 className="Intro__header">João Storarri</h1>
      <h2 className="Intro__subheader">
        Marido, pai e engenheiro de software no {" "}
        <Link to="https://ze.delivery" doOpenInNewTab>
          Zé Delivery
        </Link>
        .
      </h2>
      <p className="Intro__bio Intro__bio--one">
      Trabalho numa <i>corporate venture</i> amparada por uma das maiores companhias de bens de consumo do mundo — Anheuser-Busch InBev — criando software para facilitar como aproveitamos os momentos junto dos que mais amamos.
      </p>
      <p className="Intro__bio Intro__bio--two">
      Obtive meu bacharelado em engenharia elétrica pela Universidade Estadual Paulista
      e um Nanodegree em <i>Deep Learning</i> pelo Udacity.
      Atualmente, trabalho com Serverless Framework e/ou Terraform na AWS, 
        GraphQL como um <i>"API Gateway"</i>, 
        serviços em Python, 
        e PostgreSQL ou DynamoDB para a camada de persistência.
      </p>
      <SocialRow />
    </MaxWidth>
  )
}

export default Intro
