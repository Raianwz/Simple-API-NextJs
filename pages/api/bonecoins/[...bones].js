const dotenv = require("dotenv")
if (process.env.NODE_ENV != 'production') { dotenv.config() }
export default async function bonecoins(req, res) {
    const { bones } = req.query
    const BCTOKEN = process.env.BCTOKEN
    const user = bones[0]
    const valor = Number(bones[1])
    if (!Number(user) && !isNaN(valor)) {
        try{
            const Jebaited = await fetch(`https://api.jebaited.net/addPoints/${BCTOKEN}/${user}/${valor}`)
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
