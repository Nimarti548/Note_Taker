const router = require("express").Router();
const note = require("../db/notes");

router.get("/notes", (req, res) => {
    fs.readFile("../db/db.json", "utf8", (err, data) => {
        if (err) throw err;
        return res.json(JSON.parse(data));
    });
});

router.post("/notes", (req, res) => {
    function appendNote(req) {
    fs.readFile("../db/db.json", "utf8", (err, data) => {
        if (err) throw err
        let note = JSON.parse(data)
        req.id = nanoid()
        note.push(req)
        fs.writeFile(db, JSON.stringify(note), (err) => {
        if (err) return res.JSON({ err: "error updating" });
        res.json({ msg: "successfully updated" });
        });
    })
}
appendNote(req.body)
})  


module.exports = router