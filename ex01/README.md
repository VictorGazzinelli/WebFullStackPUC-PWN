# Exercício 01 
 
Para este exercício, iremos criar uma aplicação em linha de comando para o Node para podermos experimentar os recursos básicos.
Nesta aplicação, iremos desenvolver um programa que coleta os dados de um usuário através de um formulário no terminal/cmd.
Para isso, iremos executar os seguintes passos: 

### Passo 01 
Utilizando sua linha de comando, crie uma pasta chamada “nodejs-prompt”. 

### Passo 02 
Dentro da pasta criada, digite o comando “npm init”. Nas perguntas que aparecerem, iremos preencher apenas o campo “author”. 

### Passo 03
Iremos instalar o módulo “prompt”, disponível no npm. Para isso, execute o comando “npm install --save prompt”. 

### Passo 04
Crie um arquivo com o nome index.js e adicione o seguinte conteúdo:
```javascript
console.log('Hello world!');
```

### Passo 05
Para executar nossa aplicação, iremos rodar o comando “node index.js” ou simplesmente “node .”.

### Passo 06
Para implementar o nosso cadastro de usuário básico, insira o seguinte código no arquivo index.js:
```javascript
const prompt = require("prompt"); 
 
prompt.start(); 
prompt.get(["name"], function(_, result) {   console.log("Nome: " + result.name); }); 
```
### Passo 07
Execute a aplicação conforme o passo 05 e insira os dados solicitados. Em seguida, adicione as propriedades sobrenome, endereço, email e CPF. Colete esses dados do usuário e mostre-os na tela. 

### Passo 08
[Seguindo esta documentação](https://www.npmjs.com/package/prompt#prompting-with-validation-default-values-and-more-complex-properties), adicione as seguintes validações:
- Nome: apenas letras, campo obrigatório; 
- Sobrenome: apenas letras, campo obrigatório;
- Email: dever ser um email válido;
- CPF: deve ser um CPF válido.
