import { IQueryHandler, QueryHandler } from '@nestjs/cqrs'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { GetPurseQuery } from '../impl/get-purse.query'
import { PurseEntity } from '../../../entities/purse.entity'

@QueryHandler(GetPurseQuery)
export class GetPurseHandler implements IQueryHandler<GetPurseQuery> {
  constructor (
    @InjectRepository(PurseEntity) private purseRepo: Repository<PurseEntity>,
  ) {}

  async execute (query: GetPurseQuery): Promise<PurseEntity[]> {
    return await this.purseRepo.find()
  }
}
