import { Request, Response } from "express";
import { CreateComplementServer } from "../services/CreateComplementServer";


class CreateComplementController{

    async handle(request: Request, response: Response){
        const { tag_id, user_receiver, message } = request.body;
        const { user_id } = request;

        const createComplimentService = new CreateComplementServer();

        const compliment = await createComplimentService.execute({
            tag_id,
            user_sender: parseInt(user_id),
            user_receiver,
            message
        });

        return response.json(compliment);
    }

}

export { CreateComplementController };