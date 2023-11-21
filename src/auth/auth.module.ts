import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsuarioModule } from 'src/usuario/usuario.module';
import { LocalStrategy } from './local.strategy';
import { PassportModule } from '@nestjs/passport';

@Module({
    imports: [UsuarioModule, PassportModule],
    providers: [AuthService, LocalStrategy]
})
export class AuthModule {}