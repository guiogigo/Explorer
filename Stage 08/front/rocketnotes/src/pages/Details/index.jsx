import {Container, Links, Content} from "./styles.js"

import { Header } from "../../components/Header/index.jsx"
import { Button } from "../../components/Button/index.jsx"
import { Section } from "../../components/Section/index.jsx"
import { Tag } from "../../components/Tag/index.jsx"
import { ButtonText } from "../../components/ButtonText/index.jsx"

export function Details() {
  
  return(
    <Container>
      <Header/>
      
      <main>
        <Content>
          <ButtonText title="Excluir nota"/>

          <h1>
            Introdução ao React
          </h1>

          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Reprehenderit neque laboriosam assumenda nostrum? 
            Reiciendis fugit vitae perferendis labore magni commodi molestias, 
            error libero aliquid quo neque non ut tempora quaerat?
          </p>

          <Section title="Links úteis">
            <Links>
              <li><a href="#">https://github.com/guiogigo</a></li>
              <li><a href="#">https://github.com/guiogigo</a></li>
            </Links>
          </Section>

          <Section title="Marcadores">
            <Tag title="Express"/>
            <Tag title="Node"/>
          </Section>

          <Button title="Voltar"/>
        </Content>
      </main>

      
    </Container>
  )
}