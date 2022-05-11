var express = require('express');
var router = express.Router();

router.get('/add', function (req, res, next) {
    res.render('addBook');
});

router.post('/add', function (req, res, next) {
	console.log("book_id", req.book_id);
    console.log("book_name", res.book_name)
    res.render('book')
	res.status(200).json({ message:  "Book Saved Successfully" });
});

router.get('/find/:id', function (req, res, next) {
	const {id} =req.params
    console.log(res.book_name);
	console.info('Here is the id you have intered ' + id);
	res.status(200).json({message:"book is found"});
});


module.exports = router;