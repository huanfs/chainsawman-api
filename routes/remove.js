import express from "express";
import { CreateUser } from "../models/user.js";
const router = express.Router();

router.post("/", async(req, res) => {
    try{
        const { userName, userPassword } = req.body;
        const isDeleted = await CreateUser.destroy({
        where: {
            userName: userName, 
            userPassword: userPassword
        }
        })
        if(isDeleted === 0) {
                return res.status(404).json({error: "usuário não encontrado!"});
            }
        return res.status(200).json({message: "conta excluída!"});
        }
    catch{
        return res.status(500).json({error: "erro no servidor"});
    }
});

export default router;