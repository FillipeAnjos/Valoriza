import { getCustomRepository } from "typeorm";
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories";
import { UsersRepositories } from "../repositories/UsersRepositories";

interface IComplimentRequest{
    tag_id: number;
    user_sender: number;
    user_receiver: number;
    message: string;
}

class CreateComplementServer{

    async execute({tag_id, user_sender, user_receiver, message }: IComplimentRequest){
        const complimentsRepositories = getCustomRepository(ComplimentsRepositories);
        const usersRepositories = getCustomRepository(UsersRepositories);
        
        if(user_sender === user_receiver){
            throw new Error("Incorreto user Receiver.");
        }

        const userReceiverExists = await usersRepositories.findOne(user_receiver);
        if(!userReceiverExists){
            throw new Error("User Receiver não existe na aplicação!");
        }

        const compliment = complimentsRepositories.create({
            tag_id,
            user_sender,
            user_receiver,
            message
        })

        await complimentsRepositories.save(compliment);

        return compliment;
    }

}

export { CreateComplementServer };