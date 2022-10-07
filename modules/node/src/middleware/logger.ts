import { NodeConfig } from '@config';
import { randomUUID } from 'crypto';
import { mkdir, writeFile } from 'fs/promises';
import { Middleware } from 'koa';
import { resolve, sep } from 'path';

const getLogFilePath = () => {
  const date = new Date();
  const currentDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
  return resolve(__dirname, `./logs/${currentDate}.log`);
};

interface LogObject {
  logId: string;
  cost: number;
  req: {
    url: string;
    query: Record<string, unknown>;
    headers: Record<string, string>;
  },
  res: {
    headers: Record<string, string>;
    body: unknown;
  }
}

let LogQuque: LogObject[] = [];

const writeLog = async () => {
  if (LogQuque.length === 0) {
    return;
  }

  const filePath = getLogFilePath();
  const dirPath = filePath.slice(0, filePath.lastIndexOf(sep));
  await mkdir(dirPath, { recursive: true });

  await writeFile(filePath, LogQuque.map(q => JSON.stringify(q, null, 2)) + '\n', { encoding: 'utf-8', flag: 'a+' });
  LogQuque = [];
};

const log = (logObj: LogObject) => {
  LogQuque.push(logObj);
  if (LogQuque.length >= NodeConfig.logger.maxQuqueLength) {
    writeLog();
  }
};

setInterval(writeLog, NodeConfig.logger.cacheQuqueTime);

export const logger: Middleware = async (ctx, next) => {
  const logId = randomUUID();
  const startTime = Date.now();
  await next();
  const endTime = Date.now();

  const cost = endTime - startTime;

  const logObject: LogObject = {
    logId,
    cost,
    req: {
      url: ctx.url,
      query: ctx.request.query,
      headers: JSON.parse(JSON.stringify(ctx.request.headers)),
    },
    res: {
      headers: JSON.parse(JSON.stringify(ctx.response.headers)),
      body: ctx.body,
    }
  };

  log(logObject);
};
