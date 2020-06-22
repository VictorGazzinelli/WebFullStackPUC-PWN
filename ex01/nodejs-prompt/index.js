const prompt = require('prompt');

const schema = {
    properties: {
        name: {
            description: 'Entre com seu nome',
            type: 'string',
            pattern: /^[a-zA-Z\s]+$/,
            message: "Erro! Nome invalido, tente novamente",
            required: true
        },
        surname: {
            description: 'Entre com seu sobrenome',
            type: 'string',
            pattern: /^[a-zA-Z\s]+$/,
            message: "Erro! Sobrenome invalido, tente novamente",
            required: true
        },
        email: {
            description: 'Entre com seu email (example@example.com)',
            type: 'string',
            pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            message: "Erro! Email invalido, tente novamente",
            required: true
        },
        cpf: {
            description: 'Entre com seu cpf (123.123.123-12 ou 12312312312)',
            type: 'string',
            pattern: /^((\d{3}.\d{3}.\d{3}-\d{2})|(\d{11}))+$/,
            message: "Erro! CPF invalido, tente novamente",
            required: true
        },
    }
};

prompt.start();

prompt.get(schema, function (err, result) {
    console.log('Nome:     \t' + result.name);
    console.log('Sobrenome:\t' + result.surname);
    console.log('Email:    \t' + result.email);
    console.log('CPF:      \t' + result.cpf);
});