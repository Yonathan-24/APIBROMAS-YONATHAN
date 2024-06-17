const express = require('express');
const router = express.Router();
const JokeController = require('../controladores/jokes.controller');

router.get('/api/jokes', JokeController.getAllJokes);
router.get('/api/jokes/:id', JokeController.getJoke);
router.post('/api/jokes', JokeController.createJoke);
router.put('/api/jokes/:id', JokeController.updateJoke);
router.delete('/api/jokes/:id', JokeController.deleteJoke);

module.exports = router;
