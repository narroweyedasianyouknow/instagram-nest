import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoggerMiddleware } from 'src/middleware/logger.middleware';

import { AuthorizationController } from './authorization.controller';
import { ProfileController } from './profile.controller';
import { UserEntity } from './user.entity';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

import type { MiddlewareConsumer, NestModule } from '@nestjs/common';

import { RelationshipModule } from '$module/relationship/relationship.module';

@Module({
    imports: [
        TypeOrmModule.forFeature([UserEntity]),
        forwardRef(() => RelationshipModule),
    ],
    controllers: [UsersController, AuthorizationController, ProfileController],
    providers: [UsersService],
    exports: [UsersService],
})
export class UsersModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(LoggerMiddleware)
            .forRoutes(UsersController, ProfileController);
    }
}
