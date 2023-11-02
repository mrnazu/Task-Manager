const express = require('express');
const app = express();
const tasks = require('./routes/tasksRoute');
const connectDB = require('./db/connectDB');
const notFOund = require('./middleware/notFound');
require('dotenv').config();

// middleware
app.use(express.json());
app.use(express.static('./public'));

// route
app.use('/api/v1/tasks', tasks)

app.use(notFOund);


// db connect
const start = async function(){
    try {
        // connect db
        await connectDB(process.env.MONGO_URL)
        // start the server
        const port = 3000;
        app.listen(port, console.log(`server started in port ${port}...`));
    } catch (error) {
        console.log(error);
    }
};

start();


