import { DataSource } from 'typeorm';
import { agendamentos } from './agendamento.entity';

export const agendamentoProviders = [
    {
        provide: 'AGENDAMENTO_REPOSITORY',
        useFactory: (dataSource: DataSource) => dataSource.getRepository(agendamentos),
        inject: ['DATA_SOURCE']
    },
]