const express = require('express');
const routes = express.Router();
const ClientController = require('./controllers/ClientController');
const EmailController = require('./controllers/EmailController');


// Lista todos os clientes do banco de dados
routes.get('/clients', ClientController.index);

// Insere um novo cliente no banco de dados
routes.post('/clients', ClientController.create);

// Envia um email
routes.post('/emails', EmailController.enviaMail);

module.exports = routes;