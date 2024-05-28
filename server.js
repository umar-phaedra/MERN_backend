const express = require('express'); // commonJS // Plain JS
const app = express();
const dotenv = require('dotenv')
const mongoose = require('mongoose')
dotenv.config()
const PORT = process.env.PORT ?? 3001
const v1APIS = require('./src/routers')

// localhost:3001/v1
app.use('/v1', v1APIS)
// app.listen(process.env.PORT)

mongoose.connect('mongodb://localhost:27017/MERN_DB', {})
.then(() => {
    console.log('MongoDB is Connected');
}).then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
})