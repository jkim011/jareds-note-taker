const db = require("../db/db.json");
const fs = require("fs");

// Exports as a function 
module.exports = function (app) {
  // Get request
  app.get("/api/notes", function (req, res) {
    res.json(db);
  });

  // Post request
  app.post("/api/notes", function (req, res) {
    db.push(req.body)
    db.forEach((obj, i) => {
      obj.id = i + 1
    });

    // Writes new note to db.json
    fs.writeFile("./db/db.json", JSON.stringify(db), function () {
      res.json(db);
    });
  });
};
