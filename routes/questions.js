var express = require('express');
var router = express.Router();
var db = require("../models");

/* GET home page. */
router.get('/questions', function(req, res, next) {
	// List all questions
	db.Question.all().then(function(questions) {
		res.setHeader('content-type', 'applicaton/json');
		res.send(JSON.stringify(questions));
	});
});

router.get('/questions/:id', function(req, res, next) {
	// Send JSON for a particular question
});

router.post('/questions', function(req, res, next) {
	// Store a new post in the database
});

router.put('/questions/:id', function(req, res, next) {
	// Update a question
});

module.exports = router;
