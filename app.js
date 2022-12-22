// basic structure
const express=require('express')
const router= require('./src/routes/api')
const bodyParser = require('body-parser')
const app=new express()


//security middleware import
const rateLimit=require('express-rate-limit')
const hpp=require('hpp')
const mongoSanitize=require('express-mongo-sanitize')
const helmet=require('helmet')
const cors=require('cors')
const xssClean=require('xss-clean');

// mongoose database
const { mongoose } = require('mongoose');

//security middleware implement
app.use(hpp());
app.use(mongoSanitize());
app.use(helmet());
app.use(cors());
app.use(xssClean())

// parse application/json
app.use(bodyParser.json())

// security rate limit Middleware
const limiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
	standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers
})

// Apply the rate limiting middleware to all requests
app.use(limiter)


