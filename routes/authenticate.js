import express from "express";
import { CreateUser } from "../models/user.js";
const router = express.Router();

router.post("/", async(req, res) => {
    try{
        const { userName, userPassword } = req.body;
console.log(userName, userPassword);
        const isFound = await CreateUser.findOne({
            where:{ userName: userName}
        });
        if(!isFound) {
            return res.status(401).json({message: "Usuário não encontrado!"});
        }
        if(isFound) {
            if(isFound.userPassword === userPassword) {
                return res.status(200).json({message: "autenticado com sucesso!"});
            }
            else{
                return res.status(401).json({message: "senha inválida!"});
            }
        }
    }catch(err) {
        return res.status(500).json({message: err.message});
    }
});

export default router;
