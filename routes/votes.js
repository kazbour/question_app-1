var express = require('express');
var router = express.Router();
var db = require("../models");

// These routes allow us to add or subtract votes from our questions
router.put('/votes/:question_id/:new_vote_total', function(req, res, next) {
	// Upvote a question
	db.Question.find(req.params.question_id).then(function(question) {
		question.votes = req.params.new_vote_total;
		question.save().then(function(updatedQuestion) {
			res.json(updatedQuestion);
		});
	});
});

module.exports = router;
