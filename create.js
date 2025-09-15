import{ CurrentUser } from "./database/user.js";

 export async function Create(nome, senha){
    try{
        const NewUser = await CurrentUser.create({
            username: nome,
            password: senha
        })
    }catch(err){
        console.log("não foi possível cadastrar" + err)
    }
}
