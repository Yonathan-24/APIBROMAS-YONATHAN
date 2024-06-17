const Joke = require('../modelos/jokes.model');

module.exports.getAllJokes = (req, res) => {
    Joke.find()
        .then(jokes => res.json(jokes))
        .catch(err => res.json({ message: 'Algo salió mal', error: err }));
};

module.exports.getJoke = (req, res) => {
    Joke.findOne({ _id: req.params.id })
        .then(joke => res.json(joke))
        .catch(err => res.json({ message: 'Algo salió mal', error: err }));
};

module.exports.createJoke = (req, res) => {
    Joke.create(req.body)
        .then(newJoke => res.json(newJoke))
        .catch(err => res.json({ message: 'Algo salió mal', error: err }));
};

module.exports.updateJoke = (req, res) => {
    Joke.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
        .then(updatedJoke => res.json(updatedJoke))
        .catch(err => res.json({ message: 'Algo salió mal', error: err }));
};

module.exports.deleteJoke = (req, res) => {
    Joke.deleteOne({ _id: req.params.id })
        .then(result => res.json(result))
        .catch(err => res.json({ message: 'Algo salió mal', error: err }));
};
