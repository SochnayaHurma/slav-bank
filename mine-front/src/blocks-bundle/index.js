/* global require */

const blockContext = require.context(
	'../blocks',
	true,
	/^\.\/[^/]+\/index\.js$/
);

blockContext.keys().sort().forEach(blockContext);
