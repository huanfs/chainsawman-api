import express from "express";
import { Episodes } from "../models/episodes.js"; 
const router = express.Router();

router.post("/", async(req, res) => {
    try{
        const episode = req.body.title;
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

export default router;
