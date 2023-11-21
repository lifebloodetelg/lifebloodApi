import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { agendamentoProviders } from './agendamento.providers';
import { AgendamentoService } from './agendamento.service';
import { AgendamentoController } from './agendamento.controller';

@Module({
    imports: [DatabaseModule],
    controllers: [AgendamentoController],
    providers: [
        ...agendamentoProviders,
        AgendamentoService,
    ],
    exports: [AgendamentoService]
})
export class AgendamentoModule{}