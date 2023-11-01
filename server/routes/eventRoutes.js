const express = require('express');
const router = express.Router();
const Event = require('../models/event')

// @route GET api/
router.get('/', (req,res)=>{
    Event.find()
    .then((events)=>res.json(events))
    .catch((err)=> res.status(404).json({ noeventfound:'No Event Found'}))
});
// @route GET api/:eventName
// @description Get single user by Event Name
router.get('/eventName-search:eventName', (req, res) => {
    Event.findById(req.params.eventName)
        .then((event) => res.json(event))
        .catch((err) => res.status(404).json({ noeventfound: 'No Event found' }));
});
// @route GET api/all data 
router.get('/all', (req, res) => {
    Event.find()
        .then((events) => res.json(events))
        .catch((err) => res.status(404).json({ noeventfound: 'No event found' }));
});

// @route GET api/:date
// @description Get single user by date
router.get('/date-search/:date', (req, res) => {
    Event.find({ date: req.params.date })
        .then((events) => res.json(events))
        .catch((err) => res.status(404).json({ noeventsfound: 'No events found' }));
});

// @route GET api/:date
router.get('/city-search/:city', (req, res) => {
    Event.find({ city: req.params.city })
        .then((events) => res.json(events))
        .catch((err) => res.status(404).json({ noeventsfound: 'No events found' }));
});
// @route POST api/
// http://localhost:5000/api/event/new-event/
router.post('/new-event', (req, res) => {
    Event.create(req.body)
        .then((events) => res.json({ msg: 'Event added successfully' }))
        .catch((err) =>
            res.status(400).json({ error: 'Unable to add this event' })
        );
});
// @route PUT api/:add comment by id
// http://localhost:5000/api/event/add-comment/
router.put('/add-comment/:id', (req, res) => {
  
    Event.findByIdAndUpdate(req.params.id, req.body)
        .then((event) => {
            res.status(201).send(event)
        })
        .catch((err) =>
            res.status(400).json({ error: 'Unable to update the Database' })
        );
});
// @route PATCH api/:id
// http://localhost:5000/api/event/add-share/
router.put('/add-share/:id', (req, res) => {
  
    Event.findByIdAndUpdate(req.params.id, req.body)
        .then((event) => {
            res.status(201).send(event)
        })
        .catch((err) =>
            res.status(400).json({ error: 'Unable to update the Database' })
        );
});

router.delete('/delete-event/:id', (req, res) => {
    Event.findByIdAndRemove(req.params.id)
        .then(event => res.json({ mgs: 'Event entry deleted successfully' }))
        .catch(err => res.status(404).json({ error: 'No such event' }));
});

module.exports = router;