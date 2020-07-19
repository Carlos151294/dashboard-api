const http = require('http');
const app = require('./app');

const port = 3001;

const server = http.createServer(app);

// Server starts up
server.listen(port, () => {
    console.log(`Server listening on port ${port}...`);
});