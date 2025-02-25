require("dotenv/config");
require("./db");


const express = require("express");
const hbs = require("hbs");
const app = express();

require("./config")(app);
require('./config/session.config')(app)

app.locals.siteTitle = `IronLearn`;



// Routes
require("./routes")(app)


require("./error-handling")(app);

module.exports = app;
