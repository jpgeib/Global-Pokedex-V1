//Boiler plate

const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
const server = require("http").createServer(app);

const routes = require("./routes");

const PORT = process.env.PORT || 3001;

//Middlewares

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if(process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

app.use(routes);
require("./services/passport");

// Connect to database

server.listen(PORT, () => console.log(`Server started on port ${PORT}`));