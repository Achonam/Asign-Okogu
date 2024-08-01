import express from "express";
import { createServer } from "http";
import cors from "cors";
import helmet from "helmet";
import compression from "compression";
import morgan from "morgan";
import listRoutes from "express-list-routes";

const app = express();

const server = createServer(app);


app.use ( cors());
app.use( morgan("dev"));
app.use( compression());
app.use( express.json());
app.use( express.urlencoded({ extended:true}));
app.use(helmet() );



app.get ( "/health", (req, res) =>  
(
res.json({ success: true, message: "Server is running"})
));
app.get("/health", (req, res) => {
    console.info(req);
    return.json({ success: true, message: "Request object"})
});
app.use("*", (req, res) => {
    const url = originalUrl;
    return res.status(404).json({ success:false, message: "Server not found"});
});


listRoutes(app);
export { server, app};