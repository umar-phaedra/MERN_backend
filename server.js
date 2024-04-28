const express = require('express');
const app = express();
const v1APIS = require('./src/routers')

// localhost:3000/v1
app.use('/v1', v1APIS)

const port = 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

// 1- Users
// 2- Products
// 3- Orders