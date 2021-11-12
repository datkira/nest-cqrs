import { TypeOrmModule } from '@nestjs/typeorm';
import { Person } from './entities/person';
import { Module } from '@nestjs/common';
import { PersonModule } from './person/person.module';
import { ConfigModule } from '@nestjs/config';

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
      entities: [Person],
      autoLoadEntities: true,
      synchronize: true,
    }),
    PersonModule,
  ],
})
export class AppModule {}
