import express from 'express';
import cors from "cors";
import bodyParser from "body-parser";
import { CreateUser } from "./models/user.js";
import { Episodes } from "./models/episodes.js";
import Register from "./routes/register.js";
import Authenticate from "./routes/authenticate.js";
import Remove from "./routes/remove.js";
import Play from "./routes/play.js";
export const server = express();
server.use(cors({
    origin: "*",
}));
server.use(bodyParser.json());
server.use("/register", Register);
server.use("/authenticate", Authenticate);
server.use("/remove", Remove);
server.use("/play", Play);
server.listen(3000, ()=>{
    console.log("servidor rodando");
});

