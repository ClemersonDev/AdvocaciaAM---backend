const express = require('express');
const ClientController = require('./controllers/ClientController');
const EmailController = require('./controllers/EmailController');
const routes = express.Router();

// Lista todos os clientes do banco de dados
routes.get('/clients', ClientController.index);

// Insere um novo cliente no banco de dados
routes.post('/clients', ClientController.create);

// Envia um email
routes.post('/emails', EmailController.enviaMail);

module.exports = routes;