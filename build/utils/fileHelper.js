var fs = require('fs');
var path = require('path');

/**
 * 将指定src目录下的所有文件剪切到指定目标dest目录下
 * @param src 源目录
 * @param dest 目标目录
 */
function copyDirectory(src, dest) {
	var files = fs.readdirSync(src);
	files.forEach((item, index) => {
		var itemPath = path.join(src, item);
		var itemStat = fs.statSync(itemPath);// 获取文件信息
		var savedPath = path.join(dest, itemPath.replace(src, ''));
		var savedDir = savedPath.substring(0, savedPath.lastIndexOf('\\'));
		if (itemStat.isFile()) {
			// 如果目录不存在则进行创建
			if (!fs.existsSync(savedDir)) {
				fs.mkdirSync(savedDir, { recursive: true });
			}
			// 写入到新目录下
			var data = fs.readFileSync(itemPath);
			fs.writeFileSync(savedPath, data);
			// 并且删除原文件
			//fs.unlinkSync(itemPath);
		} else if (itemStat.isDirectory()) {
			copyDirectory(itemPath, path.join(savedDir, item));
		}
	});
	// 并且删除原目录
	//fs.rmdirSync(src);
}

function copyCss2Dir(src) {
	const files = fs.readdirSync(src);
	files.forEach(item => {
		const itemPath = path.join(src, item);
		if (fs.existsSync(itemPath)) {
			const itemStat = fs.statSync(itemPath);
			// 如果是目录，则copy css到对应目录下
			if (itemStat.isDirectory()) {
				const styleFile = path.join(`${itemPath}.css`);
				let data = '';
				if (fs.existsSync(styleFile)) {
					data = fs.readFileSync(styleFile);
					fs.unlinkSync(styleFile);
				}
				fs.writeFileSync(path.join(itemPath, 'style.css'), data);
			}
		}
	});
}

/**
 * 删除指定目录下所有文件和目录
 * @param dir 指定目录
 */
function delDirectory(dir) {
	let files = [];
	if (fs.existsSync(dir)) {
		files = fs.readdirSync(dir);
		files.forEach((file, index) => {
			let curPath = path.join(dir, file);
			var stat = fs.statSync(curPath);
			if (stat.isDirectory()) {
				delDirectory(curPath); //递归删除文件夹
			} else if (stat.isFile()) {
				fs.unlinkSync(curPath); //删除文件
			}
		});
		fs.rmdirSync(dir);
	}
}

module.exports = {
	copyCss2Dir,
	copyDirectory,
	delDirectory
};

