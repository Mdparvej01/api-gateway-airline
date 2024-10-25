const express = require('express');
require('dotenv').config();   

const {createProxyMiddleware} = require('http-proxy-middleware')

const { ServerConfig } = require('./config');
const apiRoutes = require('./routes');
// app.use(dotenv.config());
const app = express();
const rateLimit = require('express-rate-limit');


const {Auth} = require('./utils/common')

const limiter = rateLimit ({
    windowMs:2*60*1000,  // every 2min max 3 reqs
    max:3

})





app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(limiter);

//proxy ..

app.use('/flightsService' , createProxyMiddleware({target:'http://localhost:3000' , changeOrigin:true }))
app.use('/bookingService' , createProxyMiddleware({target:'http://localhost:4001' , changeOrigin:true}))

app.use('/api', apiRoutes);

app.listen(ServerConfig.PORT, () => {
    console.log(`Successfully started the server on PORT : ${ServerConfig.PORT}`);

    // const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OSwiZW1haWwiOiJhYmFAZ21haWwuY29tIiwiaWF0IjoxNzI5ODY2MTYzLCJleHAiOjE3Mjk4Njk3NjN9.952KkxauBwQJD5vEluwExhA0BlZoivSLBm1xxYsDZd0";
    // const response = Auth.verifyToken(token);
    // console.log(response);
});
        