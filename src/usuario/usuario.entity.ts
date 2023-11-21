import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class usuarios {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 140 })
  Nome: string;

  @Column({ length: 10})
  CPF: string;

  @Column({ length: 50 })
  Login: string;

  @Column({ length: 50 })
  Senha: string;

  @Column({ length: 140 })
  Email: string;

  @Column({ length: 10})
  Nascimento: string;

  @Column({ length: 10 })
  tipo: string;
}