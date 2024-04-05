const express = require('express');
const errorHandler = require('./middleware/errorHandler');
const dotenv = require('dotenv').config();

const app = express();
app.use(cors())

const PORT = process.env.PORT || 5000;

app.use("/api/contacts", require("./routes/contactRoutes"));
app.use(errorHandler)

app.listen(PORT,() => {
    console.log(`Server is running on ${PORT}`);
})