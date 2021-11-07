import { getCustomRepository } from "typeorm"
import { UsersRepositories } from "../repositories/UsersRepositories";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken"; 

interface IAuthenticateUserService{
    email: string;
    password: string;
}

class AuthenticateUserService{
    
    async execute({email, password} : IAuthenticateUserService){
        
        const usersRepositories = getCustomRepository(UsersRepositories); 
        
        var retorno = {};

        //Verificar se email existe
        const user = await usersRepositories.findOne({email});
        if(!user){
            //throw new Error("Email/Password incorreto");
            retorno['token'] = false
            retorno['msg'] = "Email/Password incorreto";
            return retorno;
        }

        //Verificar se senha está correta
        const passwordMatch = await compare(password, user.password);
        if(!passwordMatch){
            //throw new Error("Email/Password incorreto");
            retorno['token'] = false
            retorno['msg'] = "Email/Password incorreto";
            return retorno;
        }

        //Gerar token
        const token = sign({
            email: user.email
        }, "f8ae98e374f9813b909bf05cd6479a3d", {
            subject: user.id.toString(),
            expiresIn: "1d"
        });// Valorizar - f8ae98e374f9813b909bf05cd6479a3d

        if(token){
            retorno['token'] = token
            retorno['msg'] = "Usuário logado com sucesso!";
        }else{
            retorno['token'] = false;
            retorno['msg'] = "Email/Password incorreto";
        }

        //return token;//https://jwt.io/
        return retorno;
    }

}

export { AuthenticateUserService }