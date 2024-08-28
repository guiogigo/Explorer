# VITE
- Um setup mais performático
> npm create vite rocketnotes --template react
    Seguir os passos que ele indica

# REACT
- SPA: Single Page Aplication
    Ele utiliza apenas uma página apenas substituindo o conteúdo
- Convenção: Nome dos componentes em letra maiúscula e funções com o mesmo nome do arquivo
- O retorno da função criada será o que vai ser exibido na página
- Para poder retornar mais de um elemento basta criar uma div ou um fragment (<>content</>)
- A propriedade Children captura tudo que está dentro do componente
- useState => Hook para criação de estados

- Variáveis não persistem entre renderizações de componentes
    -> useState 
        => Possui uma variável de estada para reter informações entre as renderizações
        => Um função para atualizar o estado e acionar o React para renderizar o componente novamente
        - O estado é privado para o componente, cada cópia terá seu próprio estado

# Styled Components
- CSS em Javascript para a componentização
- Permite utilizar CSS-in-JS
- Extensão: VSCODE-STYLED-COMPONENTS

# React-Icons
- Biblioteca para utilizar icons no react
> npm i react-icons 
- bilbioteca ri;

# React Router DOM
- Para construção das rotas no react
> npm i react-router-dom

# Axios
- Trabalha com requisições HTTP para o consumo do backend
> npm i axios

# Hooks
- Permite que você use estados e outros recursos do React sem escrever uma classe
- Padrão "use" antes do nome e em camelCase
- São funções especiais que só estão disponíveis enquanto o React está renderizando