import { Request, Response } from "express";
import { CreateComplementServer } from "../services/CreateComplementServer";


class CreateComplementController{

    async handle(request: Request, response: Response){
        const { tag_id, user_sender, user_receiver, message } = request.body;

        const createComplimentService = new CreateComplementServer();

        const compliment = await createComplimentService.execute({
            tag_id,
            user_sender,
            user_receiver,
            message
        });

        return response.json(compliment);
    }

}

export { CreateComplementController };