var friends = require("../data/friends");

var path = require("path");

module.exports = function(app) {

app.get("/api/friends", function(req, res){
    res.json(friends);
});

app.post("api/friends", function (req, res){
    var bestMatch = {
        name: "",
        photo: "",
        friendDifference: 1000
    };

    console.log(req.body);

    var userData = req.body;
    var userScores = userData.scores;

    console.log(userScores);

    var totalDifference = 0;

    for (var i = 0; i < friends.length; i++) {
        console.log(friends[i]);
        totalDifference = 0;
        
        for (var j = 0; j < friends[i].scores[j]; j++) {
            totalDifference += Math.abs(parseINT(userScores[j]) - parseInt(friends[i].scores[j]));
            if (totalDifference <= bestMatch.friendDifference) {
                bestMatch.name = friends[i].name;
                bestMatch.photo = friends[i].photo;
                bestMatch.friendDifference = totalDifference;
            }
        }
    }

    friends.push(userData)

    res.json(bestMatch);
});

/*app.post("api/friends", function(req, res){

    var user = req.body;

    for (var i = 0; i < user.scores.length; i++) {
        user.scores[i] = parseInt(user.scores[i]);
    }

    //Need for loop to get score and get difference in score and compare friends score

    friends.push(req.body);
    res.json(true);
   
});*/

};
