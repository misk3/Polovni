const http = require('http');
const app = require('./app');

const { API_PORT } = process.env;

const PORT = API_PORT || 4003;

const httpServer = http.createServer(app);

httpServer.listen(PORT, () => {
    console.log(`[SERVER] Server is running on port: ${PORT}`)
})