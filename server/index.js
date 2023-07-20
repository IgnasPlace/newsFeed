const express = require("express");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();

const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors());

app.get("/products", (req, res) => {
  axios.get(`${process.env.BASE_URL}/${req.query.id}`)
    .then(response => {
      res.send(response.data)
    })
    .catch(err => console.log(err));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
