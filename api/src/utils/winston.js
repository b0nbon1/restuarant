import { createLogger, format, transports } from 'winston';

const { combine, timestamp, simple, json } = format;

const myCustomLevels = {
  levels: {
    data: 10,
    protocol: 9,
    debug: 8,
    info: 7,
    notice: 6,
    note: 5,
    warn: 4,
    error: 3,
    crit: 2,
    alert: 1,
    emerg: 0,
  },
};

const logger = createLogger({
  level: 'debug',
  levels: myCustomLevels.levels,
  format: combine(timestamp(), json(), format.splat()),
  transports: [
    new transports.Console({
      format: combine(
        simple(),
        format.colorize({
          all: true,
        }),
      ),
    }),
    new transports.File({ filename: '.logs/error.log', level: 'error' }),
    new transports.File({
      filename: '.logs/info.log',
      level: 'info',
    }),
  ],
  exitOnError: false,
});

export default logger;
