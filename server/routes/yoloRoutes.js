const express = require('express');
const router = express.Router();
const Yolo = require('../models/yolo')

// @route GET api/
router.get('/', (req,res)=>{
    Yolo.find()
    .then((yolo)=>res.json(yolo))
    .catch((err)=> res.status(404).json({ noyolofound:'No yolo Found'}))
});

// @route GET api/:activityName
// @description Get single user by activity Name
router.get('/activityName-search:activityName', (req, res) => {
    Yolo.find(req.params.activityName)
        .then((yolo) => res.json(yolo))
        .catch((err) => res.status(404).json({ noyolofound: 'No Yolo found' }));
});

// @route GET api/: operatrionDays
// @description Get single yolo by  operatrionDays
router.get('/date-search/: operatrionDays', (req, res) => {
    Yolo.find({  operatrionDays: req.params. operatrionDays })
        .then((yolos) => res.json(yolos))
        .catch((err) => res.status(404).json({ noyolofound: 'No yolo found' }));
});

// @route GET api/:city
// @description Get single user by city
router.get('/city-search/:city', (req, res) => {
    Yolo.find({ city: req.params.city })
        .then((yolos) => res.json(yolos))
        .catch((err) => res.status(404).json({ noyolofound: 'No yolo found' }));
});

// @route POST api/
// http://localhost:5000/api/yolo/new-yolo/
router.post('/new-yolo', (req, res) => {
    Yolo.create(req.body)
        .then((yolo) => res.json({ msg: 'Yolo added successfully' }))
        .catch((err) =>
            res.status(400).json({ error: 'Unable to add this yolo' })
        );
});

// @route PUT api/:add comment by id
// http://localhost:5000/api/yolo/add-comment/
router.put('/add-comment/:id', (req, res) => {
  
    Yolo.findByIdAndUpdate(req.params.id, req.body)
        .then((yolo) => {
            res.status(201).send(yolo)
        })
        .catch((err) =>
            res.status(400).json({ error: 'Unable to update the Database' })
        );
});

router.delete('/delete-event/:id', (req, res) => {
    Yolo.findByIdAndRemove(req.params.id)
        .then((yolo) => res.json({ mgs: 'Event entry deleted successfully' }))
        .catch(err => res.status(404).json({ error: 'No such yolo' }));
});

module.exports = router;