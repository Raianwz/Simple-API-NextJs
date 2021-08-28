const dotenv = require("dotenv")
if (process.env.NODE_ENV != 'production') { dotenv.config() }
export default async function suncoins(req, res) {
    const { suns } = req.query
    const SNTOKEN = process.env.SNTOKEN
    const user = suns[0]
    const valor = Number(suns[1])
    const msg = (texto) => JSON.stringify(texto).replace(/[\\"]/g, '')
    if (!Number(user) && !isNaN(valor)) {
        try{
            const Jebaited = await fetch(`https://api.jebaited.net/addPoints/${SNTOKEN}/${user}/${valor}`)
            if (Jebaited.status === 200) {
                res.end(msg(`@${user} ganhou ${valor}`))
            }else{
                res.end(msg(`FeelsDankMan @${user} algo deu errado chama o @Raianwz.`))  
            }
        }catch(err){
            res.end(msg(`FeelsDankMan @${user} algo deu MUITO errado mesmo, chama o @Raianwz`))  
        }
        return
    }
    res.status('404')
    res.end(msg(`Algo deu errado =/`))
}