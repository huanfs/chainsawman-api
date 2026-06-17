import express from 'express';

import cors from "cors";

import bodyParser from "body-parser";

import { CreateUser } from "./models/user.js";
import { Episodes } from "./models/episodes.js";

import Register from "./routes/register.js";
import Authenticate from "./routes/authenticate.js";
import Remove from "./routes/remove.js";

export const server = express();

server.use(cors({
    origin: "*",
    //origin: 'http://localhost:5173'
})); //usando o cors (na porta onde roda o front)

server.use(bodyParser.json()); //usando o body parser para ler a URL

//rota adicionar FINALIZADA
/*server.post("/adicionar", async(req, res)=>{
    const { userName, userPassword } = req.body;
    try{
        const userExists = await CreateUser.findOne({
            where:{userName:userName}
        })
        if(userExists){
            return res.status(409).json({message: "este usuário já existe!"});
        }
        await CreateUser.create({
            userName: userName,
            userPassword: userPassword,
        })
	    return res.status(201).json({message: "usuário criado!"});
    }catch(err){
        console.log(err);
        return res.status(500).json({message: "erro no servidor"});
    }
});*/
server.use("/adicionar", Register);
//rota autenticar FINALIZADA
/*server.post("/autenticar", async(req, res)=>{
    try{
        const { userName, userPassword } = req.body;
        const isFound = await CreateUser.findOne({
            where:{ userName: userName}
        })

        if (!isFound) {
                return res.status(401).json({message: "Usuário não encontrado!" });
        }

        if(isFound){
            if(isFound.userPassword === userPassword){
               return  res.status(200).json({message: "autenticado com sucesso!"}) 
            }
            else{
                return res.status(401).json({message: "senha inválida!"});
            }
        }
    }
    catch(err){
        return res.status(500).json({message: err.message});
    }
});*/
server.use("/autenticar", Authenticate);
//rota destruir FINALIZADA
/*server.post("/destruir", async(req, res)=>{
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
});*/
server.use("/destruir", Remove);
//rota reproduzir FINALIZADA
server.post("/reproduzir", async(req, res)=>{
    const episode = req.body.title;
    try{
        const searchEpisode = await Episodes.findOne({
            where:{title: episode}
        })
        if(!searchEpisode) {
            return res.status(404).json({error: "episódio não encontrado!"})
        }
        return res.status(200).json({
            title: searchEpisode.title,
            episode:searchEpisode.episode
        });
    }
    catch(err){
        console.log(err)
        return res.status(500).json({error: "erro no servidor!"});
    }
});

server.listen(3000, ()=>{
    console.log("servidor rodando")
});

//aqui está dando tudo certo quando a rota é / adiciona e quando a rota é /destruir deleta
