const getContct = (req,res) => {
    res.status(200).json({message:  `get contact for ${req.params.id}`});
}

const createContact = async (req,res) => {
    const {email, phone, address } = req.body;
    if(!email || !phone || !address){
        return res.status(400).json({error:"Email, Phone and Address are required"})
        throw new Error("Email, Phone and Address are required");
    }
    res.status(201).json({message: 'Create Contacts'});
}
const UpdateContact = async (req,res) => {
    res.status(200).json({message:  `Update contact for ${req.params.id}`});
}
const  DeleteContact = async (req,res) => {
    res.status(200).json({message:  `Delete contact for ${req.params.id}`});
}

module.exports = {getContct , createContact, UpdateContact, DeleteContact}