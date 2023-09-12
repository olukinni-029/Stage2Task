require("dotenv").config();
const express = require("express");
const connectDB = require("./database/db");
const userRoute = require("./routes/userRoute");
const app = express();

app.use(express.json());

const port = process.env.PORT || 4300;

app.get("/", (req, res) => {
  res.send("welcome to Stage2Task");
});

app.use(userRoute);

app.listen(port, async () => {
  try {
    await connectDB(process.env.MONGODB_URL);
    console.log("Database is running successful");
    console.log(`Server listening on http://localhost:${port}`);
  } catch (error) {
    console.log(error.message);
  }
});
