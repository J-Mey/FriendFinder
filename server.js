var express = required("express")
var path = required("path")

var app = express();
var PORT = process.end.PORT || 3000

 app.use(express.urlencoded({ extended: true }));
 app.use(express.json());

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes") (app);

app.listen(PORT, function(){
    console.log("App listening on PORT: " + PORT);
});