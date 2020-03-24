const express = require("express");
const cors = require("cors");
const routes = require("./routes");

const app = express();

// Converte o request em um objeto json
app.use(cors());
app.use(express.json());
app.use(routes);
/*
 * Tipos de parâmetros:
 *
 * Query Params: Parâmetros enviados na rota após "?" (Filtros, paginação)
 * Route Params: Parâmetros utilizados para identificar recursos
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 */

app.listen(3333);
