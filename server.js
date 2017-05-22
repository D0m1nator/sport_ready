import config from './config';
import apiRouter from './api';
//import path from 'path';
import serverRender from './serverRender';
import express from 'express';
import bodyParser from 'body-parser';
import PropTypes from 'prop-types';

const server = express();
server.use(bodyParser.json());

server.set('view engine', 'ejs');

server.get(['/', '/contest/:contestId'], (req, res) => {
  serverRender(req.params.contestId)
    .then(({ initialMarkup, initialData }) => {
      res.render('index', {
        initialMarkup,
        initialData
      });
    })
    .catch(error => {
      console.error(error);
      res.status(404).send('Bad Request');
    });
});

server.use('/api', apiRouter);
server.use(express.static('public'));

server.listen(config.port, () => {
  console.info('Express порт ', config.port);
});

//
