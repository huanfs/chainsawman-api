import express from 'express';

import cors from "cors";

import bodyParser from "body-parser";

import { CurrentUser } from "./models/user.js";
import { ShowEpisode } from "./models/episodes.js";

const server = express();

server.use(cors({
    origin: "*",
    //origin: 'http://localhost:5173'
})); //usando o cors (na porta onde roda o front)

server.use(bodyParser.json()); //usando o body parser para ler a URL

//rota adicionar finalizada
server.post("/adicionar", async(req, res)=>{
    const usuario = req.body.userName;
    const senha = req.body.userPassword;
    try{
        await CurrentUser.create({
            username: usuario,
            userpassword: senha,
        })
	res.sendStatus(201).json({message: "usuário criado!"});
    }catch(err){
        console.log(err)
    }
});
//rota autenticar
server.post("/autenticar", async(req, res)=>{
    try{
        const usuario = req.body.userName;
        const senha = req.body.userPassword;
        const usuarioEncontrado = await CurrentUser.findOne({
            where:{ username: usuario}
        })

        if (!usuarioEncontrado) {
                return res.status(401).json({ erro: "Usuário ou senha incorretos." });
        }

        if(usuarioEncontrado){
            if(usuarioEncontrado.userpassword === senha){
               return  res.send(usuarioEncontrado) 
            }
            else{
                return res.status(401).json({erro: "as senhas não coincidem"})
            }
        }
    }
    catch{
        return res.status(500).json({erro : "erro incomum no servidor"})
    }
});
//rota destruir
server.post("/destruir", async(req, res)=>{
    try{
        const usuario = req.body.userName;
        const senha = req.body.userPassword;
        const isDeleted = await CurrentUser.destroy({
        where: {
            username: usuario, 
            userpassword: senha
        }
    })
    if(isDeleted === 0) {
            return res.status(404).json({erro: "usuário não encontrado"})
        }

        return res.sendStatus(200).json({message: "conta excluída"})
    }
    catch{
        return res.sendStatus(500).json({erro: "erro no servidor"})
    }
});
//rota reproduzir
server.post("/reproduzir", async(req, res)=>{
    const episodio = req.body.titulo;
    try{
        const BuscarEpisodio = await ShowEpisode.findOne({
            where:{titulo: episodio}
        })
        const resposta = await BuscarEpisodio;
        res.send(resposta);
    }
    catch(err){
        console.log("deu erro: ", err)
        res.send("erro no servidor")
    }
})

server.listen(3000, ()=>{
    console.log("servidor rodando")
});

//aqui está dando tudo certo quando a rota é / adiciona e quando a rota é /destruir deleta
