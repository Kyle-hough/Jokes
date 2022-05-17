const Jokes = require('./../models/jokes.model')

//Get All
module.exports.allJokes = (req, res) => {
    Jokes.find()
        .then(jokes => res.json(jokes))
        .catch(err => res.json(err))
}

// Get one
module.exports.oneJoke = (req, res) =>{
    // id : req.params.id
    Jokes.findOne({_id : req.params.id})
        .then(jokes=>res.json(jokes))
        .catch(err=>res.json(err))
}

// create
module.exports.createJoke = (req, res) =>{
    const newJokes = req.body
    Jokes.create(newJokes)
        .then(song=> res.json(song))
        .catch(err=>res.json(err))
}

// update --  getOne + create
module.exports.updateJoke = (req, res) =>{
    Jokes.findOneAndUpdate(
        {_id: req.params.id},// criteria
        req.body,// updated values
        {new: true, runValidators: true}// options
    )
        .then(jokes=> res.json(jokes))
        .catch(err=>res.json(err))
}

// delete
module.exports.deleteJoke = (req, res) =>{
    Jokes.deleteOne({_id: req.params.id})
        .then(status=> res.json(status))
        .catch(err=>res.json(err))
}