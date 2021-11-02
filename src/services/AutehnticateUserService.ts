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

        //Verificar se email existe
        const user = await usersRepositories.findOne({email});

        if(!user){
            throw new Error("Email/Password incorreto");
        }

        //Verificar se senha está correta
        const passwordMatch = await compare(password, user.password);

        if(!passwordMatch){
            throw new Error("Email/Password incorreto");
        }

        //Gerar token
        const token = sign({
            email: user.email
        }, "f8ae98e374f9813b909bf05cd6479a3d", {
            subject: user.id.toString(),
            expiresIn: "1d"
        });// Valorizar - f8ae98e374f9813b909bf05cd6479a3d

        return token;//https://jwt.io/
    }

}

export { AuthenticateUserService }