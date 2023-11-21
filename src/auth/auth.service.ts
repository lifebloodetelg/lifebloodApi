import { Injectable } from '@nestjs/common';
import { UsuarioService } from 'src/usuario/usuario.service';

@Injectable()
export class AuthService {
    constructor(private usuarioService: UsuarioService) {}

    async validarUsuario(Login: string, Senha: string): Promise<any> {
        const usuario = await this.usuarioService.findOne(Login);
        if (usuario && usuario.Senha === Senha ){
            const { Senha, ...result } = usuario;
        return result;
        }
        return null;
        
      }
}