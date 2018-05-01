var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {

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
	var buf = fs.readFileSync('./public/urls0.json', (error) => console.log(error));
	// console.log('---', buf.toString());
	// res.send(buf.toString());
	res.render('index', {
		data: JSON.parse(buf.toString())
	})
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