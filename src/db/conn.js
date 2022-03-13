const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/myFridge", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
  })
  .then(() => {
    console.log(`connection is succesful`);
  })
  .catch((e) => {
    console.log(`no connection`, e);
  });
