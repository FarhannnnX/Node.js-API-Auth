const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
//IMPORTS ROUTES
const authRoute = require('./routes/auth');
const postsRoute = require('./routes/posts');


dotenv.config();

//Connect to DB
mongoose.connect(
    process.env.DB_CONNECT,
    { useNewUrlParser: true },
    () => console.log('connected to db!')  
);
//middleware
app.use(express.json());

//Route Middleware
app.use('/api/user',authRoute)
//Route Middleware
app.use('/api/posts',postsRoute)

app.listen(3000, () => console.log('Server UP and running'));