import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { PersonEntity } from './person.entity'

@Entity({ name: 'purse' })
export class PurseEntity {
  @PrimaryGeneratedColumn()
  id!: number

  @Column({ nullable: false, default: 0, type: 'integer' })
  balance!: number

  @ManyToOne(() => PersonEntity, person => person.purses)
  person: PersonEntity
}