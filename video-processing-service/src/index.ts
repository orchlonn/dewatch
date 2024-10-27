import express from "express";

const app = express();
const port = 8001;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log("Video processing service is now running");
});
