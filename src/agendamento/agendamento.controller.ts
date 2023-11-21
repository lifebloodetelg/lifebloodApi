import { Controller, Post, Body, Get } from '@nestjs/common'
import { AgendamentoService } from './agendamento.service';
import { agendamentos } from './agendamento.entity';
import { AgendamentoCadastrarDto } from './dto/agendamento.cadastrar.dto';


@Controller('agendamento')
export class AgendamentoController {
constructor(private readonly agendamentoService: AgendamentoService){}

@Get('listar')
  async listar(): Promise<agendamentos[]>{
    return this.agendamentoService.listar();
  }

@Post('agendar')
async agendar(@Body() data: AgendamentoCadastrarDto): Promise<any>{
    return this.agendamentoService.agendar(data)
}
}