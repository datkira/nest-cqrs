import { IQueryHandler, QueryHandler } from '@nestjs/cqrs'
import { InjectRepository } from '@nestjs/typeorm'
import { PersonEntity } from 'src/persons/person.entity'
import { Repository } from 'typeorm'
import { GetPersonsQuery } from '../impl/get-persons.query'

@QueryHandler(GetPersonsQuery)
export class GetPersonsHandler implements IQueryHandler<GetPersonsQuery> {
  constructor (
    @InjectRepository(PersonEntity) private personRepo: Repository<PersonEntity>,
  ) {}

  async execute (query: GetPersonsQuery): Promise<PersonEntity[]> {
    return await this.personRepo.find()
  }
}
