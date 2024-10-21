import { Module } from "@nestjs/common";
import UsersExternalController from "./users.external.controller";
import { UsersExternalService } from "./users.external.service";
import { UsersReporitories } from "./repositories/users.repositories";


@Module({
    imports: [],
    providers: [UsersExternalService, UsersReporitories],
    controllers: [UsersExternalController]

})
export class UsersModule{ }