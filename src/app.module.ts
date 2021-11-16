import { TypeOrmModule } from '@nestjs/typeorm'
import { PersonEntity } from './entities/person.entity'
import { Module } from '@nestjs/common'
import { PersonModule } from './persons/person.module'
import { ConfigModule } from '@nestjs/config'
import { PurseEntity } from './entities/purse.entity'

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      entities: [PersonEntity, PurseEntity],
      autoLoadEntities: true,
      synchronize: true,
    }),
    PersonModule,
  ],
})
export class AppModule {}
