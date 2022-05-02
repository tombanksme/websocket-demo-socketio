const { Server } = require('socket.io');

const io = new Server({
	pingInterval: 5000,
});

io.on('connection', (socket) => {
	// ...
});

io.listen(8080);
