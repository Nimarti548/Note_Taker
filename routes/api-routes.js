const router = require("express").Router();
const { nanoid } = require("nanoid")
const fs = require('fs')
const path = require("path");
const db = path.join(__dirname, "../db/db.json");

router.get("/notes", (req, res) => {
    fs.readFile(db, "utf8", (err, data) => {
        if (err) throw err;
        return res.json(JSON.parse(data));
    });
});



 

module.exports = router