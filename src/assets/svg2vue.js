const fs = require('fs');

const pathToSvgFiles = '/home/marat/Desktop/onvix-clone/src/assets/svg';

fs.readdir(pathToSvgFiles, (err, data) => {
	data.map(file => {
		/** RENAME FILES AND CREATE  */

		let newFileName =
			file
				.split('.')[0]
				.split('-')
				.map(item => {
					return item.charAt(0).toUpperCase() + item.slice(1);
				})
				.join('') + '.vue';
		let path = pathToSvgFiles + '/' + newFileName;

		/* ADD NEW DATA */
		fs.readFile(
			pathToSvgFiles + '/' + file,
			{ encoding: 'utf-8' },
			(err, data) => {
				const newData = `<template>${data}</template>`;
				console.log(data);
				fs.writeFile(path, newData);
			}
		);
	});
});

// console.log(pathToSvgFiles);

// fs.readdir(__dirname + '/svg', (err, data) => {
// 	data.map(file => {
// 		let newFileName =
// 			file
// 				.split('.')[0]
// 				.split('-')
// 				.map(item => {
// 					return item.charAt(0).toUpperCase() + item.slice(1);
// 				})
// 				.join('') + '.vue';

// 		let newPath = __dirname + '/' + file;
// 		fs.writeFile(newPath, 'newData');

// let oldFile = __dirname + '/' + file;
// fs.readFile(oldFile, { encoding: 'utf-8' }, (err, data) => {
// 	const newData = `<template>${data}</template>`;

// });
// });
// });
