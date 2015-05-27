var express = require('express');
var router = express.Router();
var db = require("../models");

// These routes allow us to add or subtract votes from our questions
router.put('/questions/:id/up', function(req, res, next) {
	// Upvote a question
});

router.put('/questions/:id/down', function(req, res, next) {
	// Upvote a question
});

module.exports = router;
