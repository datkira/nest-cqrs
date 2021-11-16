import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { PurseEntity } from './purse.entity'

@Entity({ name: 'person' })
export class PersonEntity {
  @PrimaryGeneratedColumn('increment', { name: 'id' })
  id: number

  @Column()
  username: string

  @Column()
  name: string

  @OneToMany(() => PurseEntity, purse => purse.person)
  purses: PurseEntity[]
}
