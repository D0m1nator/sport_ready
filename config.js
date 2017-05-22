const env = process.env;

export const nodeEnv = env.NODE_ENV || 'development';

export const projRun = function() {
  console.log('**********');
  console.log('Запуск сообщества спортсменов');
  console.log('**********');
};

export default {
  mongodbUri: 'mongodb://localhost:27017/test',
  port: env.PORT || 8080,
  get serverUrl() {
    return `http://localhost:${this.port}`;
  }
};
