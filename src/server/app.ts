const express = require("express");
const compression = require("compression");
const path = require("path");
const mustache = require("mustache-express");

import { Request, Response, NextFunction } from "express";

/* 
  initialize the express app and set the correct
  parameters such as view-engine and publically
  accessible folders
*/
const app = express();
const port = process.env.PORT || 3000;
app.engine("html", mustache());
app.set("view engine", "html");
app.set("views", __dirname + "/../views");

// compress the files on the server
app.use(compression());

/* 
STATIC CONTENT
  serve static content via gzip compression relies 
  on compression-webpack-plugin creates a .gz clone of 
  the file that gets unzipped and served to the user
*/

app.get("*.js", (req: Request, res: Response, next: NextFunction) => {
  req.url += ".gz";
  res.set("Content-Encoding", "gzip");
  next();
});

// serve static content to server
// first argument is where it should be mapped virtually
// second ../ is the current path
app.use("/dist", express.static(path.join(__dirname, "../dist")));

// respond with "hello world" when a GET request is made to the homepage
app.get("/", function (req: Request, res: Response) {
  res.render("index", { test: "hello worldsss" });
});

app.listen(port, () => console.log(`Listening at http://localhost:${port}`));
