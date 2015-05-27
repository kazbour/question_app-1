var express = require('express');
var router = express.Router();
var db = require("../models");


/* GET home page. */
router.get('/', function(req, res, next) {
	// List all questions
	db.Question.all().then(function(questions) {
		res.json(questions);
	});
});

router.get('/:id', function(req, res, next) {
	// Send JSON for a particular question
	db.Question.find(req.params.id).then(function(question) {
		res.json(question);
	});
});

router.post('/', function(req, res, next) {
	// Store a new post in the database
	db.Question.create(req.body.question).then(function(question) {
		res.json(question);
	});
});

router.put('/:id', function(req, res, next) {
	// Update a question
	db.Question.find(req.params.id).then(function(question) {
		question.updateAttributes(req.body.question).then(function(updatedQuestion) {
			res.json(updatedQuestion);
		});
	});
});

module.exports = router;
