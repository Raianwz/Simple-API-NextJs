const dotenv = require("dotenv")
if (process.env.NODE_ENV != 'production') { dotenv.config() }
export default async function lirocoins(req, res) {
    const { liro } = req.query
    const LCTOKEN = process.env.LCTOKEN
    const user = liro[0]
    const valor = Number(liro[1])
    if (!Number(user) && !isNaN(valor)) {
        try{
            const Jebaited = await fetch(`https://api.jebaited.net/addPoints/${LCTOKEN}/${user}/${valor}`)
            if (Jebaited.status === 200) {
                res.end(`@${user} ganhou ${valor}`)
            }else{
                res.end(`FeelsDankMan @${user} algo deu errado chama o @Raianwz.`)  
            }
        }catch(err){
            res.end(`FeelsDankMan @${user} algo deu MUITO errado mesmo, chama o @Raianwz`)  
        }
        return
    }
    res.status('404')
    res.end(`Algo deu errado =/`)
}