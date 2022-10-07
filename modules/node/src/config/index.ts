import { User } from '@entity/user.entity';
import { resolve } from 'path';
import { DataSourceOptions } from 'typeorm';

interface NodeConfigProps {
  server: {
    host: string;
    port: number;
  };
  database: DataSourceOptions;
  logger: {
    maxQuqueLength: number;
    cacheQuqueTime: number;
  };
}

export const NodeConfig: NodeConfigProps = {
  server: {
    host: '0.0.0.0',
    port: 2000,
  },
  database: {
    type: 'sqlite',
    database: resolve(__dirname, './template.db'),
    entities: [User],
    synchronize: true
  },
  logger: {
    maxQuqueLength: 10,
    cacheQuqueTime: 60 * 1000,
  }
};
