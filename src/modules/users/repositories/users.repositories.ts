//repositório para armazenar o usuário no DB
//repositório é chamado pelo service

import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/modules/global/prisma/prisma.service";


@Injectable()
export class UsersReporitories {
    constructor(private readonly prismaService: PrismaService){}

    async create(user: {id: string, email: string, name: string}){
        const userCreated = await this.prismaService.users.create({
            data: user,
        })

        return userCreated;
    }
}