import { DataSource } from 'typeorm';
import { usuarios } from './usuario.entity';

export const usuarioProviders = [
  {
    provide: 'USUARIO_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(usuarios),
    inject: ['DATA_SOURCE'],
  },
];