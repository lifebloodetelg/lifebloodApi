import { Controller, Get, Post, Body, UseGuards, Request, Param } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { usuarios } from './usuario.entity';
import { UsuarioCadastrarDto } from './dto/usuario.cadastrar.dto';
import { ResultadoDto } from 'src/dto/resultado.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('usuario')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Get('listar')
  async listar(): Promise<usuarios[]>{
    return this.usuarioService.listar();
  }

  @Post('cadastrar')
  async cadastrar(@Body() data: UsuarioCadastrarDto): Promise<any>{
    return this.usuarioService.cadastrar(data)
    }

  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Request() req){
    return req.user;
  }
  
}
   


