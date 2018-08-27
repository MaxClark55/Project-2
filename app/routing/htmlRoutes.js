var path = require("path");

module.exports = function(app) {

  app.get("/choose", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/choose.html"));
  });

  app.get("/create", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/create.html"));
  });

  app.get("/race", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/race.html"));
  });

  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
};
