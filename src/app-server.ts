import express from "express";
import path from "path";
import commonRouter from "./routes/base-routes";

const app = express();

// Configure Express to use EJS
app.set( "views", path.join( __dirname, "views" ) );
app.set( "view engine", "ejs" );

// Configure routes
app.use("/", commonRouter);

// Configure Express to serve static files in the public folder
app.use( express.static( path.join( __dirname, "public" ) ) );

export {app};