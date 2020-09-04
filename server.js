const fs = require('fs'); 
const path = require('path');

// Create fastify instance
const fastify = require('fastify')({ logger: true, ignoreTrailingSlash: true, https: {
	key: fs.readFileSync('./ssl/cert.key'), // todo these should be put in .env file instead
	cert: fs.readFileSync('./ssl/cert.crt')
}});

const documentationConf = require('./conf/documentation.json');

// Require system modules
fastify.register(require('./src/system/authentication-service'));
fastify.register(require('./src/system/db-connectors/mysql-connector'));
fastify.register(require('fastify-swagger'), documentationConf);

// Require API services
fastify.register(require('./src/modules/tencent-gme/service'));

// Require API routes
fastify.register(require('./src/modules/tencent-gme/routes'));


// When everything has been prepared, build documentation
fastify.ready(err => {
	if (err) throw err;
	console.log('fastify is ready, building documentation...');
	fastify.swagger();
});

// Run the server!
fastify.listen(3000, '0.0.0.0', function (err, address) {
	if (err) {
		fastify.log.error(err)
		process.exit(1)
	}
	fastify.log.info(`server listening on ${address}`);
});
