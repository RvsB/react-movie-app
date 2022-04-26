const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

main().catch((err) => console.log(err));
main().then(() => console.log("DB connection successful!"));

async function main() {
  await mongoose.connect(process.env.MONGO_URL);
}

app.listen(8800, () => {
  console.log("backend server is running");
});
