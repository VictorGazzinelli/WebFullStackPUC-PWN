# Exercício 2

## Passo 1

Através do terminal, execute o comando ​ ```npx express-generator --view=hbs my-project``` ​Esse comando
é responsável por criar uma pasta já com toda a estrutura de arquivos e configurações necessárias para
inicializarmos nossa aplicação em ​ **Express** ​.

## Passo 2

Entre na pasta do projeto criado com o comando ``` cd my-project ​``` e execute os seguintes comandos:

- **npm install** ​;
- **npm start** ​;

O projeto deverá estar rodando na url ​ ```http://localhost:3000```


## Passo 3

Iremos construir uma página inicial que receba 2 parâmetros GET: ​ firstName ​ e ​ lastName ​. Para isso, adicione o seguinte método ​ **router.get** ​ no arquivo ​ **index.js** ​ dentro da pasta ​ **routes** ​:

```javascript
router.get(​'/hello/:firstName/:lastName'​, ​function​(req, res, next) {
    res.render(​'hello'​, {
        firstName: req.params.firstName,
        lastName: req.params.lastName
    });
});
```

## Passo 4

Crie um arquivo ​ **hello.hbs** ​dentro da pasta ​ **views** ​. Para certificar de que os parâmetros foram
corretamente recebidos, adicione o seguinte código no arquivo criado:
```<​h1​>​Olá, ​{{firstName}}​ ​{{lastName}}​!​</​h1​>```

Reinicie a aplicação (no terminal, ctrl+c e em seguida ​ **npm start** ​) e no browser digite a url
```http://localhost:300/hello/seu/nome```.

## Passo 5

Para evitar ter que reiniciar a aplicação sempre que fizermos alguma alteração no código, iremos utilizar
o pacote “​ **nodemon** ​” para desenvolver o exercício. Para isso, através do terminal instale o nodemon
utilizando o comando ​ ```npm i -D nodemon```. ​ Em seguida, no ​ **package.json** ​, substitua a ​ **linha 6** ​ para o
seguinte código:

```"start"​: ​"./node_modules/.bin/nodemon ./bin/www"```

**[Extra]:** ​você ainda pode configurar o Visual Studio Code para abrir o seu projeto sem a necessidade da
linha de comando e com a possibilidade de adicionar breakpoints.


## Passo 6

Iremos construir agora um formulário para enviar requisições POST a uma rota personalizada. Para isso,
na pasta ​ **views** ​, crie um arquivo ​ **form.hbs** ​ com um formulário com os campos ​ **name** ​, ​ **email** ​ e ​ **address** ​.
Exemplo:
```html
<​form action=​"/users"​ method=​"POST"​>
​<​input​ type=​"text"​ name=​"name"​/>
​<​button​ type=​"submit"​>​Send​</​button​>
</​form​>
```
Em seguida, crie um arquivo ​ **form.js** ​ na pasta ​ **routes** ​ e implemente a rota ​ **/form** ​ que será responsável
por exibir o formulário criado. Implemente também, no arquivo ​ **users.js** ​, um método POST que exiba o
**body** ​ recebido via requisição em formato ​ **JSON** ​ (exemplo slide 30).

## Passo 7

Ainda no método post da rota ​ **/users** ​, modifique a solução para que cada objeto da requisição enviada
seja armazenada em um array. Exemplo:
```javascript
let​ users = { items: [] }

app.post(​'/'​, (req, res) => {
    users.items.push(req.body)
    res.send(​'Ok!'​);
})
```

## Passo 8

Para a mesma rota no arquivo ​ **users.js** ​, implemente o método ​ **DELETE** ​ para remover um item adicionado
e um método ​ **GET** ​ para retornar todos os itens adicionados. No método ​ **DELETE** ​, receba como
parâmetro o email do usuário a ser removido.


