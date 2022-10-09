import { User } from '@entity/user.entity';
import { resolve } from 'path';
import { DataSourceOptions } from 'typeorm';

interface NodeConfigProps {
  mode: 'development' | 'production';
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
  mode: process.env.mode as 'development' | 'production',
  server: {
    host: '0.0.0.0',
    port: 2000,
  },
  database: {
    type: 'sqlite',
    database: resolve(__dirname, './template.db'),
    entities: [User],
    // synchronize: process.env.mode === 'development',
    synchronize: true,
  },
  logger: {
    maxQuqueLength: 10,
    cacheQuqueTime: 60 * 1000,
  }
};
