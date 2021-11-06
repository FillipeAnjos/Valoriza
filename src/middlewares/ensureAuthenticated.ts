import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface IPayload{
    sub: string;
}

export function ensureAuthenticated(request: Request, response: Response, next: NextFunction){
    
    //Receber o token
    const authToken = request.headers.authorization
    
    //Validar se token está preenchido
    if(!authToken){
        return response.status(401).end();
    }

    const [, token] = authToken.split(" ");

    //validar se token é válido
    try{
        const { sub } = verify(token, "f8ae98e374f9813b909bf05cd6479a3d") as IPayload;
        
        //Recuperar informações do usuário
        request.user_id = sub;

        return next();
    }catch(err){
        return response.status(401).end();
    }
    
    
    
}