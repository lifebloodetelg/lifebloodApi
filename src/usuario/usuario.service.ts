import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { usuarios } from './usuario.entity';
import { UsuarioCadastrarDto } from './dto/usuario.cadastrar.dto';
import { ResultadoDto } from 'src/dto/resultado.dto';

@Injectable()
export class UsuarioService {
  constructor(
    @Inject('USUARIO_REPOSITORY')
    private usuarioRepository: Repository<usuarios>,
  ) {}

  async listar(): Promise<usuarios[]> {
    return this.usuarioRepository.find();
  }

  async cadastrar(data: UsuarioCadastrarDto): Promise<ResultadoDto>{
    let usuario = new usuarios()
    usuario.Nome = data.Nome
    usuario.CPF = data.CPF
    usuario.Login = data.Login
    usuario.Senha = data.Senha
    usuario.Email = data.Email
    usuario.Nascimento = data.Nascimento
    usuario.tipo = data.tipo
    return this.usuarioRepository.save(usuario)
    .then((result)=>{
      return<ResultadoDto>{
        status:true,
        mensagem:"Usuário cadastrado com sucesso!"
      }
    })
    .catch((error)=> {
      return<ResultadoDto>{
        status:false,
        mensagem:"Houve um erro ao cadastrar",
       
    }
    })
    
  }

  async findOne(Login: string): Promise<usuarios| undefined> {
    return this.usuarioRepository.findOne({where: {Login: Login}});
  }

  

}