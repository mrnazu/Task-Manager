const mongoose = require("mongoose");

const connectDB = function(url){
    return mongoose
    .connect(url, {
      useNewUrlParser:true,
      useFindAndModify:false,
      useCreateIndex:true,
      useUnifiedTopology:true
    })
}

module.exports = connectDB;