import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConnectionConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'Marina',
  password: 'marinathebest1337',
  database: 'weatherdb',
  entities: ['dist/**/*.entity{.ts,.js}'],
  synchronize: true,
};
