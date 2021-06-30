const WebSocket = require('ws');
const wss = new WebSocket.Server({ noServer: true });
module.exports = (request, socket, head) => {
  wss.handleUpgrade(request, socket, head, function (ws) {
    ws.on('message', async (message) => {
      console.log(message);
      ws.send('收到了！');
    });
  });
}