
const http = require('http');

const serverHandle = require('./ws_server');
const app = require('./app');
const server = http.createServer();
// 处理ws 任务
server.on('upgrade', serverHandle);

// 处理http 任务
server.on('request', app);

server.listen(8001, function (err) {
  if (err) console.log(err);
  console.log('server is listening on 8001');
});
process.on('uncaughtException', function (err) {
  console.log(err, 'uncaughtException');
});
process.on('unhandledRejection', function (err) {
  console.log(err, 'unhandleRejection');
});
// module.exports = server;