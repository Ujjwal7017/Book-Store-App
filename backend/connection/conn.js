const mongoose = require("mongoose");
mongoose
    .connect(
      "mongodb+srv://ujjwal7017:Ujjwal098@cluster0.xjwjb3l.mongodb.net/crudop?retryWrites=true&w=majority"
    ).then(() => console.log("Connected"));