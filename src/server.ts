import "reflect-metadata";
import express, { Request, Response, NextFunction } from "express";
import "express-async-errors";

import { router } from "./routes";

// @types/express
const app = express();

/* 
    Compilar o código de typescript para javascript automático
    npm add ts-node-dev -D ou npm i ts-node-dev --save-dev

    e para rodar é 
        npm run <Nomde o parametro que está dentro ds scripts no arquivo packege.json>

    Exemplo de rodar o servidor: npm run dev
*/

/* 
    GET    => Buscar uma informação
    POST   => Inserir (Criar) uma informação
    PUT    => Alterar uma informação
    DELETE => Remover uma informação ou dado
    PATCH  => Alterar uma informação específica
*/

/*
    // ----- ROTAS -----
    app.get("/test", (request, response) => {
        return response.send("Essa é uma rota GET");
    });

    app.post("/test-post", (request, response) => {
        return response.send("Essa é uma rota POST");
    });
*/

/* 
    ----- MIGRATIONS -----
    Criar migration: npx typeorm migration:create -n CreateUsers
    Rodar migration: npm run typeorm migration:run
    Excluir migration: npm run typeorm migration:revert
*/

/* 
    ----- Entities -----
    Criar: npx typeorm entity:create -n User
*/

/* 
    ----- Biblioteca de lifar com erros sysncronos no Express -----
    npm add express-async-errors
*/

import "./database";

app.use(express.json());

app.use(router);

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
    if(err instanceof Error){
        return response.status(400).json({
            error: err.message
        });
    }

    return response.status(500).json({
        status: "error",
        message: "Interno Server Error"
    })
});

// http://localhost:3000     
app.listen(3000, () => console.log("conectado!"));