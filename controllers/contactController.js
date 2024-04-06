const asyncHandler = require('express-async-handler');
const Contact =  require('../models/contactModel')

const getContact = asyncHandler(async (req,res) => {
    let contacts = await Contact.find()
    res.status(200).json(contacts);
})

const createContact = asyncHandler(async  (req,res) => {
    const {name,email, phone } = req.body;
    if(!name ||!email || !phone){
        return res.status(400).json({error:"Email, Phone and Address are required"})
        // throw new Error("Email, Phone and Address are required");
    }
    let contact = await Contact.create({
     name,
     email,
     phone,
    });
    res.status(201).json(contact);
})
const UpdateContact = asyncHandler(async  (req,res) => {
    let contact = await Contact.findById(req.params.id);
    if(!contact) {
        res.status(404);
       throw new Error('Contact not Found');
    }
    const  UpdateContact = await Contact.findByIdAndUpdate(req.params.id ,{...req.body}, {new:true});

    res.status(200).json(UpdateContact);
})

const  DeleteContact = asyncHandler(async  (req,res) => {
     let contact = await Contact.findById(req.params.id);
    if(!contact) {
        res.status(404);
       throw new Error('Contact not Found');
    }
    await Contact.remove();
    res.status(200).json(contact);
})

module.exports = {getContact , createContact, UpdateContact, DeleteContact}