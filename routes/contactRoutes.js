const express = require('express');
const router = express.Router();
const {getContct, createContact, UpdateContact, DeleteContact} =require("../controllers/contact");

router.route('/').get((req,res) => {
    res.status(200).json({message: 'get all contacts'});
});


router.route('/').post(getContct);


router.route('/:id').get(createContact);

router.route('/:id').put(UpdateContact);

router.route('/:id').delete(DeleteContact);



module.exports = router;