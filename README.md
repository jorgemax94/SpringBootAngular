#  FullStack Project -> SpringBoot e Angular

## Objetivo
Aplicação FullStack para apresentar informações sobre exames de mama feitos na rede pública de saúde (SUS) utilizando as informações do DATASUS

## Visão do projeto
BackEnd: API desenvolvida em Java + Springboot para contemplar as operações de inclusão e consulta para salvar em banco relacional.
FrontEnd: Página Web desenvolvida em Angular + AngularMaterial para apresentar as informações na tela.
Banco: MySQL para armazenar as informações necessárias.

## Configurando a aplicação

### Requisitos

* Para instalar o JDK - clique [aqui](https://www.oracle.com/java/technologies/javase/jdk17-archive-downloads.html)
* Para instalar o AngularCLI - clique [aqui](https://angular.io/cli)

### Executando

#### BackEnd
1) Dentro da pasta raiz do projeto execute o seguinte comando para instalar as dependências do projeto:

    $ mvn clean install

1.1) Após o comando acima ter sido executado com sucesso, execute o arquivo inicial do SpringBoot DevweekApplication.java.

#### FrontEnd
2) Dentro da pasta do projeto abra a pasta 'Angular' execute o seguinte comando para instalar as dependências do projeto:

    $ npm install

2.1) Após o comando acima ter sido executado com sucesso, execute o seguinte comando para rodar a aplicação:

    $ npm run start

#### Acesso
1) Quando a aplicação estiver rodando executar o comando abaixo ou acessar diretamente o endereço **http://localhost:4200** no navegador:

    $ "C:\Program Files (x86)\Google\Chrome\Application\chrome.exe" -new "127.0.0.1:4200"
    
2) Para ter acesso a api do projeto executar o comando abaixo ou acessar diretamente o endereço **http://localhost:8080/api** no navegador:

     $ "C:\Program Files (x86)\Google\Chrome\Application\chrome.exe" -new "127.0.0.1:8080/api"
     
