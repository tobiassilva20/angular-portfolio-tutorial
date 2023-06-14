
# Portifolio utlizando Angular + Scully

## Descrição:
Este projeto foi desenvolvido utlizando o framework [Agular](https://angular.io/docs) v15 e o gerador de páginas estáticas [Scully](https://www.google.com) v2 

Neste projeto foi realizado o desenvolvimento de um exemplo de portifólio de desenvolvedor utlizando Angular 15 e para acelerar o carregamento das páginas foi utilizado o Scully que ficou responsável pela criação das páginas estáticas e geração do blog.

Durante a implementação foram encontrados alguns problemas com a instalação das dependêndencias como o Puppeteer, mas com uma pesquisa o problema foi contornado.

O repositório possui uma pasta chamada /docs que contém o projeto finalizado que foi utilizado para o deploy no github pages. Caso ache oportuno poderá ser apagado ou substituído com o diretório gerado pelo seu próprio projeto.

Neste projeto foi possível conhecer um pouco mais a respeito da estrutura de um *frontend* desenvolvido em Angular e o funcionamento de seus componentes internos.

Pra quem está em busca de um projeto que mostre como gerar e utilizar componentes, serviços e módulos no Angular, este é um excelente projeto.

##

## Autores

- Projeto original copiado deste tutorial: (https://www.digitalocean.com/community/tutorials/how-to-build-a-jamstack-portfolio-with-angular-11-and-scully).

## Deploy local

Para rodar localmente este aplicativo, abra o terminal use os comandos abaixo:

```bash
  git clone https://github.com/tobiassilva20/angular-portfolio-tutorial.git
```

Após o download do projeto entre na pasta baixada e instale as dependências do angular com o comando: 

```bash
  npm install
```
Finalizada a instalação das dependências use o comando abaixo para o servidor local do angular:

```bash
  ng serve
```
Acesse o endereço localhost:4200 para visualizar a aplicação angular rodando.

Para gerar as páginas estáticas será necessário realizar o build da aplicação com o comando: 

```bash
  ng build
```
Após o build será criada a pasta /dist contendo a pasta /portfolio.

Para utilizar o scully para geração das páginas estáticas rode:
```bash
  npx scully
```
Finalizado o processo de build do scully, será criada dentro da pasta /dist uma subpasta chamada /static que contem as páginas estáticas para o deploy no servidor.
Caso queira pré-visualizar a página rode:

```bash
  npx scully serve
```
Acesse os endereços mostrados na saída do terminal para visualizar.

Para o tutorial completo acesse(https://www.digitalocean.com/community/tutorials/how-to-build-a-jamstack-portfolio-with-angular-11-and-scully)
## Live demo

O resultado final após o deploy poderá ser visualizado [aqui](https://tobiassilva20.github.io/angular-portfolio-tutorial/)

## 🔗 Links de contato

Caso tenha alguma dúvida, fique à vontade para entrar em contato.

[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://tobiasdeveloper.rf.gd/)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/tobiasazevedosilva/)
[![insta](https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://www.instagram.com/tobiassilva_dev/)
