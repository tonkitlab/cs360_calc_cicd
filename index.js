//Hapi framework
const Hapi = require('hapi');

//Address and port
const host = '0.0.0.0';
const port = 3000; 

//Create server
const server = Hapi.Server({
    host: host,
    port: port
});

//Routes
require('./routes/routes')(server);

//Start server
const init = async () => {
    await server.start();
    console.log(`Running on http://${host}:${port}`);
}

//Start App
init();