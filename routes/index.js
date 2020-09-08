const express = require('express');

const router = express.Router();

router.get("/", (req, res) => {
    res.render("layout", {title: "Main Page"})
});


module.exports = router;
