import nconf from 'nconf';

let configFileName = `/config/config.${ process.env.NODE_ENV || 'development' }.json`;

nconf.argv()
	.env()
	.file({
		file: process.cwd() + configFileName
	});

export default nconf;
