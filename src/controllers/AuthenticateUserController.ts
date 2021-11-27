import { Request, Response } from "express";
import { AuthenticateUserService } from "../services/AutehnticateUserService";
import * as path from 'path';

class AuthenticateUserController{

    async handle(request: Request, response: Response){
        const { email, password } = request.body;

        const authenticateUserService = new AuthenticateUserService();

        const resposta = await authenticateUserService.execute({
            email, 
            password
        });

        response.render(path.join(__dirname, '../../src/views/home'), {
            token: resposta['token'],
            msg: resposta['msg']
        });

        //return response.json(resposta);
    }

}

export { AuthenticateUserController }