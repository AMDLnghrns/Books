const axios = require("axios");
const router = require("express").Router();

router.get("/booksList", (req, res) => {
  axios
    .get("https://www.googleapis.com/books/v1/volumes?q=the+hunger+games") //, { params: req.query })
    .then(({ data: { results } }) => res.json(results))
    .catch(err => res.status(422).json(err));
});

module.exports = router;
