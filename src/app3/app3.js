//获取TCP server的重要信息
const net = require('net');

const server = net.createServer((socket) => {
    console.log('client connected');
});

server.listen(8888, () => {
    const address = server.address();
    console.log(address.port + ', ' + address.address + ', ' + address.family);
});