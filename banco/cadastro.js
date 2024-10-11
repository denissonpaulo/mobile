const Sequelize = require('sequelize');
const database = require('./db');
 
const Pessoa = database.define('pessoa', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    txtNome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    txtIdade: {
        type: Sequelize.DOUBLE
    },
    cmbUF: {type: Sequelize.STRING}
})
 
module.exports = Pessoa;