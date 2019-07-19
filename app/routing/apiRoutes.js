var friends = require("../data/friends");

module.exports = function(app) {

app.get("/api/friends", function(req, res){
    res.json(friends);
});

app.post("api/friends", function(req, res){
    var user = req.body;

    for (var i = 0; i < user.scores.length; i++) {
        user.scores[i] = parseInt(user.scores[i]);
    }

    friends.push(req.body);
    res.json(true);
});

}