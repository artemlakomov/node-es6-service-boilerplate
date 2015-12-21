import log from '../services/log';
import locale from '../services/locale';
import express from 'express';
import OK from '../models/entities/OK';
import Error from '../models/entities/Error';

import userStorage from '../models/user-storage';

let router = express.Router();

router.get('/', (req, res) => {
  res.json(new OK('Boilerplate API is running'));
});

router.get('/user/:id', (req, res) => {
  userStorage.find(req.params.id).then(user => {
    res.json(user);
  });

});

export default router;
