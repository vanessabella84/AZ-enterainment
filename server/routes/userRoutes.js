const express = require('express');
const router = express.Router();
const User = require('../models/user')

// @route POST api/
// @description Verify Users
router.post('/verify-user', (req, res) => {
    const {userName, password} = req.body;
    User.findOne({userName: userName})
        .then((user) => {
            if(user.password === password) {
                res.status(200).send(user)
            }
            else{
                res.status(401).json({"error": "password incorrent"})
            }
        })
        .catch((err) =>
            res.status(404).json({ "error": 'No user found' })
        );
});
// @route GET api/
router.get('/', (req,res)=>{
    User.find()
    .then((users)=>res.json(users))
    .catch((err)=> res.status(404).json({ nouserfound:'No User Found'}))
});

// @route GET api/:id
router.get('/one-user/:id', (req, res) => {
    User.findById(req.params.id)
        .then((user) => res.json(user))
        .catch((err) => res.status(404).json({ nouerfound: 'No User found' }));
});

// @route GET api/all data 
router.get('/all', (req, res) => {
    User.find()
        .then((users) => res.json(users), console.log("info found"))
        .catch((err) => res.status(404).json({ nouserfound: 'No user found' }));
});

// @route GET api/:firstName
// @description Get single user by firstName 

router.get('/firstName-search/:firstName', (req, res) => {
    User.find({ firstName: req.params.firstName })
        .then((users) => res.json(users))
        .catch((err) => res.status(404).json({ nouserfound: 'No user found' }));
});

// @route POST api/
// http://localhost:5000/api/user/new-user/
router.post('/new-user', (req, res) => {
    User.create(req.body)
        .then((user) => res.json(user))
        .catch((err) =>
            res.status(400).json({ error: 'Unable to add this user' })
        );
});

// @route PUT api/:update record
// http://localhost:5000/api/user/update-record/
router.put('/update-record/:id', (req, res) => {
  
    User.findByIdAndUpdate(req.params.id, req.body)
        .then((user) => {
            res.status(201).send(user)
        })
        .catch((err) =>
            res.status(400).json({ error: 'Unable to update the Database' })
        );
});

// @route PUT api/:id
// http://localhost:5000/api/user/update-record/
router.put('/update-record/:id', (req, res) => {
  
    User.findByIdAndUpdate(req.params.id, req.body)
        .then((user) => {
            res.status(201).send(user)
        })
        .catch((err) =>
            res.status(400).json({ error: 'Unable to update the Database' })
        );
});

// @route DELETE api/:id
router.delete('/delete-user/:id', (req, res) => {
    User.findByIdAndRemove(req.params.id)
        .then(user => res.json({ mgs: 'User entry deleted successfully' }))
        .catch(err => res.status(404).json({ error: 'No such user' }));
});

module.exports = router;