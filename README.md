# VoltBras Back-End Challenge

# Projeto de Exemplo com TypeScript, Node.js, PrismaJS, GraphQL, Jest, Sqlite e mais

Uma API de exemplo desenvolvida com TypeScript, Node.js, Express e outras tecnologias para demonstrar as melhores práticas de desenvolvimento de APIs usando conceito de Graph.


## Tecnologias Utilizadas

- Node.js
- TypeScript
- Apollo-Server
- PrismaJs
- JSON Web Token (jsonwebtoken)
- Graphql
- Dotenv
- Reflect-meta-data
- Type-graphql
- Csv-parser
- Jest

## Instalação e Uso

Siga estas instruções para instalar e usar o projeto em sua máquina local:

1. **Clone o repositório**:

   ```bash
   git clone https://github.com/Joao-Pedro15/voltbras-backend-challenge.git

2. **Instale as dependências**:

   ```bash
    npm install
      
3. **Crie um arquivo .env na raiz do projeto com:**:

  SECRET='MY_SECRET'

## Processo de criação
  - O projeto foi pensado nas melhores práticas do desenvolvimento de software, e seguindo do modelo de software Vertical Slice Architecture (criado por Jimmy Bogard https://www.jimmybogard.com/vertical-slice-architecture). Ele possuí apenas uma camada que é da aplicação products.

  - Antes de começar, ao analisar a API da NASA, vejo que ela foi descontinuada e substituída por arquivos .csv para a captação dos dados. Sendo assim, peguei esses arquivos e fiz um processo de leitura desse arquivo usando Streams e o Pipeline para dar carga desses dados em meu banco de dados SQLITE em um arquivo local.

  - Divido a aplicação em fatias (slices), ela está totalmente abstrata e apta a ser usando em contextos de API Rest, programa de linha de comando e no nosso contexto GraphQL com Apollo-Server.

  - Criei um schema do PrismaJs, adaptando a falta da API da NASA para uma tabela de planetas (SuitablePlanets) e as demais tabelas (User, Station e Recharges)

  - Dado isso, inicializei o projeto com o Apollo-Server para criar o schema do graphql e assim fazer minhas Queries, Mutations e Resolver da aplicação


## Video
  https://youtu.be/UBp6WBxhJQw