import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));

app.post("/submit", (req, res) => {
  // Now we can get the body data here
  var bodyData = req.body;
  res.send(`Hello, ${bodyData.street} ${bodyData.pet}`, 200)
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
