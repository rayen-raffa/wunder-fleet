const express = require("express");
const axios = require("axios");
const { response } = require("express");

const app = express();

const PAYMENT_SERVER =
  "https://37f32cl571.execute-api.eu-central-1.amazonaws.com";

app.use(express.json());
app.use(express.urlencoded());
app.use(express.static("./dist/wunder-fleet"));

app.post("/default/*", (req, res) => {
  console.log(req.url);
  console.log(req.body);
  let payment_url = `${PAYMENT_SERVER}${req.url}`;
  axios
    .post(payment_url, { ...req.body })
    .then((response) => {
      res.status(200).send(response.data);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
