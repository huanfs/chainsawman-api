import { CurrentUser} from "./database/user.js";

export async function Destroy(){
    try{
        const RemoveUser = await CurrentUser.destroy({
            where: {username: 'EMILIZINHAAA'}
        })
    }catch(err){
        console.log(err)
    }
}