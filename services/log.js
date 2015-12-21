import winston from 'winston';
import appInsights from "applicationinsights";
import insights from 'winston-azure-application-insights';
import config from './config';

winston.emitErrs = true;

function getFilePath (module) {
    //using filename in log statements
    return module.filename.split('/').slice(-2).join('/');
}

class Logger extends winston.Logger {
  constructor(options){
    super(options);
  }
};

let instance = new Logger({
  transports : [
    new winston.transports.Console({
      level: 'debug',
      label: getFilePath(module),
      handleException: true,
      json: false,
      colorize: true
    })
  ],
  exitOnError: false
});

export default instance;
