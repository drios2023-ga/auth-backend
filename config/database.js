const mongoose = require('mongoose');

//connects to the database
mongoose.connect(process.env.DATABASE_URL);
const db = mongoose.connection;

//logs the connection details to the console
db.on('connected',function(){
    console.log(`Connected to MongoDB ${db.name} at ${db.host}:${db.port}`);
});