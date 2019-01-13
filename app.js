const express = require("express");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
const mongoose = require("mongoose");
const routes = require('./routes');
const app = express();
const port = 3000;

mongoose.connect("mongodb://localhost/contact_app", { useNewUrlParser: true });
mongoose.Promise = global.Promise;

mongoose.connection.on("error", error => console.log(error));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(routes);


app.listen(port, () => console.log(`Server listening on port ${port}`));