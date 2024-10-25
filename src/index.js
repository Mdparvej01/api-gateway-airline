const express = require('express');
require('dotenv').config();   

const { ServerConfig } = require('./config');
const apiRoutes = require('./routes');
// app.use(dotenv.config());
const app = express();


const {Auth} = require('./utils/common')



app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', apiRoutes);

app.listen(ServerConfig.PORT, () => {
    console.log(`Successfully started the server on PORT : ${ServerConfig.PORT}`);

    // const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OSwiZW1haWwiOiJhYmFAZ21haWwuY29tIiwiaWF0IjoxNzI5ODY2MTYzLCJleHAiOjE3Mjk4Njk3NjN9.952KkxauBwQJD5vEluwExhA0BlZoivSLBm1xxYsDZd0";
    // const response = Auth.verifyToken(token);
    // console.log(response);
});
        