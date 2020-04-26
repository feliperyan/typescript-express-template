import dotenv from "dotenv";
import express from "express";
import path from "path";
import commonRouter from "./routes/base-routes";

// initialize configuration
dotenv.config();

// port is now available to the Node.js runtime
// as if it were an environment variable
const port = process.env.SERVER_PORT;

const app = express();

// Configure Express to use EJS
app.set( "views", path.join( __dirname, "views" ) );
app.set( "view engine", "ejs" );

// Configure routes
app.use("/", commonRouter);

// Configure Express to serve static files in the public folder
app.use( express.static( path.join( __dirname, "public" ) ) );

// start the express server
app.listen( port, () => {
    // tslint:disable-next-line:no-console
    console.log( `server started at http://localhost:${ port }` );
} );