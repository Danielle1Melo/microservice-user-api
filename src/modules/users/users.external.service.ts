//chama o repositório

import { Injectable } from "@nestjs/common";
import { UsersReporitories } from "./repositories/users.repositories";

@Injectable()
export class UsersExternalService {
    constructor(private readonly repository: UsersReporitories){}

    async create(user: {id: string, email: string, name: string}){
        return await this.repository.create(user)
    }
}