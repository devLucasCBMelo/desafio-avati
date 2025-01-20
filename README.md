# Desafio Processo Seletivo AVATI

Foi pedido no Processo Seletivo (PS) que fizéssemos uma página de Login com os campos:

- Nome de usuário (e-mail)
- Senha.
- Botão "Entrar".

## Sobre a aplicação

A aplicação foi toda construída em Next.js, ela contém duas páginas, sendo a primeira a página principal e a segunda que seria a página do usuário.

## Como rodar a aplicação

1. Clone o projeto em sua máquina.

```bash
git clone git@github.com:devLucasCBMelo/desafio-avati.git
```

2. Acesse o repositório do projeto

```bash
cd desafio-avati
```

3. Instale as dependências com o comando:

```bash
npm install
```

4. Rode a aplicação com um dos comandos a seguir:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Abra [http://localhost:3000](http://localhost:3000) com seu navegador para ver o resultado.

## Como utilizar a aplicação

A aplicação possui uma tela de login simples, onde o usuário pode inserir um e-mail e uma senha.

### Email

Pode ser inserido qualquer e-mail válido, por exemplo:

```
meu-email@email.com
```

### Senha

A senha apenas precisa conter 6 ou mais caracteres, por exemplo:

```
123456
```

Com isso, só precisa clicar no botão "Entrar" para ser levado à próxima página.
