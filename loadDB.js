import { MongoClient } from 'mongodb';
import assert from 'assert';
import config from './config';

MongoClient.connect(config.mongodbUri, (err, db) => {
  assert.equal(null, err);

  db.collection('contests').insertMany([
    { id: 1, categoryName: 'Бокс', contestName: 'Открытая тренировка по боксу',
      description: `Открытая тренировка по боксу спорт-клуба Динамо`,
      nameIds: [] },
    { id: 2, categoryName: 'Стрельба', contestName: 'Мастер класс от чемпионов',
      description: `
Мастера спорта проводят мастер-класс по стрельбе
      `,
      nameIds: [] },
    { id: 3, categoryName: 'Плавание', contestName: 'Особенности заплывов на дальние дистанции',
    description: `Опытные спортсмены-любители делятся своим опытом`,
      nameIds: [] },
    { id: 4, categoryName: 'Бодибилдинг', contestName: 'Особенности питания при подготовке к соревнованиям',
    description: `Семинар о особенностях питания при подготовке к соревнованиям`,
      nameIds: [] },
    {
        id: 5, categoryName: 'Бег', contestName: 'Открытый марафон',
        description: `Приглашаем всех желающих принять участие в марафоне`,
        nameIds: []
    }
  ]).then(response => {
    console.info('Contests', response.insertedCount);
      db.close();
    });
});
