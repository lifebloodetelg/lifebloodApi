import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class agendamentos{
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({ length: 140 })
    Nome: string;

    @Column({ length: 140 })
    Email: string;

    @Column({ length: 10 })
    tipo: string;

    @Column({ length: 140})
    Local: string;

    @Column({ length: 5})
    Horario: string;

    @Column({ length: 10})
    Data: string;

}