import {Container} from "./styles.js"
import { Button } from "../../components/Button/index.jsx"

export function Details() {
  
  return(
    <Container>
      <h1>Hello World!</h1>
      <Button title="Entrar" loading/>
      <Button title="Cadastrar" disabled/>
      <Button title="Voltar"/>
    </Container>
  )
}