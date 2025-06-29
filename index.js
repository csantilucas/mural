const express = require('express');
const PORT = 3000;
const app = express();
const apiRoute = require('./routes/api');

const path = require('path');


app.use("/api", apiRoute);
app.use("/",express.static(path.join(__dirname,'public')));


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})
