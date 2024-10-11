//Sync do Sequelize com o banco
const express = require('express');
const app = express();
const cadastros = [];

app.use(require("cors")());
app.use(express.json());

app.get('/', (req, res, next) => {
    res.json(cadastros);
})

app.post('/cadastro', (req, res, next) => { 
    console.log("Cadastro recebido!");
    //salva no banco de dados,

        (async () => {
            const database = require('./db');
            const Cadastro = require('./cadastro');
            
            try {
                const resultado = await database.sync();
                console.log(resultado);

                const resultadoCreate = await Cadastro.create({
                    txtNome: req.body.txtNome,
                    txtIdade: req.body.txtIdade,
                    cmbUF: req.body.cmbUF,
                })
                console.log(resultadoCreate);

            } catch (error) {
                console.log(error);
            }
        })();

       
        cadastros.push({
            nome: req.body.txtNome, 
        });
        res.json({message: "Tudo ok por aqui!", dados: cadastros});
        
    }) 

app.listen(3001, () => console.log("Servidor escutando na porta 3001..."));
