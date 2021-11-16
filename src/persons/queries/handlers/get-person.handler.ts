import { IQueryHandler, QueryHandler } from '@nestjs/cqrs'
import { InjectRepository } from '@nestjs/typeorm'
import { PersonEntity } from 'src/entities/person.entity'
import { Repository } from 'typeorm'
import { GetPersonQuery } from '../impl/get-person.query'

@QueryHandler(GetPersonQuery)
export class GetPersonHandler implements IQueryHandler<GetPersonQuery> {
  constructor (
    @InjectRepository(PersonEntity) private personRepo: Repository<PersonEntity>,
  ) {}

  async execute (query: GetPersonQuery): Promise<PersonEntity> {
    return await this.personRepo.findOne({
      where: [
        { id: query.personId },
      ]
    })

  }
}
