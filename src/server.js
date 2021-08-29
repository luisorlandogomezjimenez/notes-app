//Server code (express code)

const express = require("express");
const exphbs = require("express-handlebars");
const Handlebars = require("handlebars");
const path = require("path");
const morgan = require("morgan");

//Initializations
const app = express();
const {
  allowInsecurePrototypeAccess,
} = require("@handlebars/allow-prototype-access");

//Settings
app.set("port", process.env.PORT || 4000);
app.set("views", path.join(__dirname, "views"));
app.engine(
  ".hbs",
  exphbs({
    defaultLayout: "main",
    layoutsDir: path.join(app.get("views"), "layouts"),
    partialsDir: path.join(app.get("views"), "partials"),
    extname: ".hbs",
    handlebars: allowInsecurePrototypeAccess(Handlebars),
  })
);
app.set("view engine", ".hbs");

//Middlewares
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));

//Global Variables

//Routes
app.use(require("./routes/index.routes"));
app.use(require("./routes/notes.routes"));

//Static files
app.use(express.static(path.join(__dirname, "public")));

module.exports = app;
