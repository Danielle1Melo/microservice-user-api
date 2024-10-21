//chama o service

import { Controller } from "@nestjs/common";
import { MessagePattern } from "@nestjs/microservices";
import { UsersExternalService } from "./users.external.service";

@Controller()
export default class UsersExternalController {
    constructor(private readonly userService: UsersExternalService){}

    //fica escutando tudo que cai do redis
    @MessagePattern('users-user-created')
    async createUser(data: { id: string, email: string, name: string}){
        console.warn('usuario criado' + data.id);
        return await this.userService.create(data);
    }
}