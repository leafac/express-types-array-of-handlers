import express from "express";

const app = express();

app.get("/this-works", (req, res) => {
  res.send("This works.");
});

app.get("/this-doesnt", [
  (req, res) => {
    res.send("This doesn’t.");
  },
]);

app.listen(4000);
