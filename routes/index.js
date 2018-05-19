var express = require('express');
var router = express.Router();
var fs = require('fs');
var http = require('http');

/* GET home page. */
router.get('/', function(req, respone, next) {

	// finder('/Users/cchenlll/Desktop/node-pachong/images', (err, files) => {
	// 	if (err) {
	// 		res.end(JSON.stringify(err));
	// 		return;
	// 	}
	// 	console.log(files);
	// 	res.render('index', {
	// 		data: files
	// 	});
	// });
	// var buf = fs.readFileSync('./public/urls0.json', (error) => console.log(error));
	// console.log('---', buf.toString());
	// res.send(buf.toString());
	// res.render('index', {
	// 	data: JSON.parse(buf.toString())
	// })
	var urlStr = 'http://39.106.30.113:8888/listpic'
	http.get(urlStr, function(res) {
		var html = '';
		console.log('状态码：', res.statusCode);
		res.setEncoding('UTF-8');
		res.on('data', function(chunk) {
			html += chunk;
		});
		res.on('end', () => {
			var dataObj = JSON.parse(html);
			console.log(dataObj);
			respone.render('index', {
				data: dataObj
			});
		});
	}).on('error', function(err) {
		console.log(err);
	});

});

function finder(path, callback) {
	// const path = '/Users/cchenlll/Desktop/node-pachong/images';
	fs.readdir(path, function(err, files) {
		if (err) {
			callback(err);
			console.log('error:\n' + err);
		}
		callback(null, files);
		console.log(files);
	});
}

// funciton loadJson() {
// 	var buf = fs.readFileSync('./urls0.json', (error) => console.log(error));
// 	// console.log('---', buf.toString());
// 	res.send(buf.toString());
// }

module.exports = router;