const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGO_URL, { dbName: process.env.DB_NAME })
  .then(() => {
    console.log("Mongodb Connected Successfully");
  })
  .catch((err) => {
    console.log(err.message);
  });
   mongoose.connection.on("error", (err) => {
    console.log(err.message);
   })
   mongoose.connection.on("connected", (err) => {
    console.log('Mongodb Connected...');
   })
   mongoose.connection.on("disconnected", (err) => {
    console.log("Mongodb is disconnected");
   })

   process.on("SIGINT", async (err) => {
    await mongoose.connection.close();
    process.exit(0)
   })