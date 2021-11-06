import { Request, Response } from "express";
import { ListUserReceiveComplimentsService } from "../services/ListUserReceiveComplimentsService.ts";

class ListUserReceiveComplimentsController{

    async handle(request: Request, response: Response){
        const { user_id } = request;

        const listUserReceiveComplimentsService = new ListUserReceiveComplimentsService();

        const compliments = await listUserReceiveComplimentsService.execute(parseInt(user_id));

        return response.json(compliments);
    }
}

export { ListUserReceiveComplimentsController }