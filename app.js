import log from './services/log';
import config from './services/config';
import locale from './services/locale';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import methodOverride from 'method-override';
import Error from './models/entities/Error';

import api from './routes/api';

let app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride());

app.use('/', api);

// catch 404 and forward to error handler
app.use((req, res, next) => {
    res.status(404);
    log.error('%s %d %s', req.method, res.statusCode, req.url);
    res.json(new Error(locale.t('NOT_FOUND')));
    return;
});

// error handlers
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    log.error('%s %d %s', req.method, res.statusCode, err.message);
    res.json(new Error(err.message));
    return;
});

app.set('port', process.env.PORT || config.get('port') || 3000);

app.listen(app.get('port'), function(){
  log.info('Express server listening on port ' + app.get('port'));
});
