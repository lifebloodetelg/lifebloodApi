import { Injectable, Inject } from "@nestjs/common";
import { Repository } from "typeorm";
import { agendamentos } from "./agendamento.entity";
import { AgendamentoCadastrarDto } from "./dto/agendamento.cadastrar.dto";
import { ResultadoDto } from "src/dto/resultado.dto";

@Injectable()
export class AgendamentoService{
    constructor(
        @Inject("AGENDAMENTO_REPOSITORY")
        private agendamentoRepository: Repository<agendamentos>,
    ){}

    async listar(): Promise<agendamentos[]> {
        return this.agendamentoRepository.find();
      }

    async agendar(data: AgendamentoCadastrarDto): Promise<ResultadoDto>{
        let agendamento = new agendamentos()
        agendamento.Nome = data.Nome
        agendamento.Email = data.Email
        agendamento.Local = data.Local
        agendamento.Data = data.Data
        agendamento.Horario = data.Horario
        agendamento.tipo = data.tipo
        return this.agendamentoRepository.save(agendamento)
        .then((result)=>{
            return<ResultadoDto>{
                status: true,
                mensagem:"Agendamento realizado!"
            }
        })
        .catch((error)=>{
            return<ResultadoDto>{
                status: false,
                mensagem: "Houve um erro ao agendar",
            }
        })
    }
} 