const glob = require('glob');
exports.getEntry = path => {
	const entry = {};
	glob.sync(path).forEach(function (name) {
		const nameArr = name.split('/');
		const entryKey = nameArr.length === 3 ? 'index' : nameArr[2];
		entry[entryKey] = name;
	});
	console.log(entry);
	return entry;
};
