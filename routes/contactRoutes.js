const express = require('express');
const router = express.Router();
const {getContact, createContact, UpdateContact, DeleteContact} =require("../controllers/contactController");

router.route('/').get((req,res) => {
    res.status(200).json({message: 'get all contacts'});
});


router.route('/').post(getContact);


router.route('/:id').get(createContact);

router.route('/:id').put(UpdateContact);

router.route('/:id').delete(DeleteContact);



module.exports = router;