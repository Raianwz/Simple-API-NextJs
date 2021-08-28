const dotenv = require("dotenv")
if (process.env.NODE_ENV != 'production') { dotenv.config() }
export default async function flocoins(req, res) {
    const { flocos } = req.query
    const FCTOKEN = process.env.FCTOKEN
    const user = flocos[0]
    const valor = Number(flocos[1])
    const msg = (texto) => JSON.stringify(texto).replace(/[\\"]/g, '')
    if (!Number(user) && !isNaN(valor)) {
        try{
            const Jebaited = await fetch(`https://api.jebaited.net/addPoints/${FCTOKEN}/${user}/${valor}`)
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
    res.end(msg(`FeelsDankMan Algo deu errado, você não foi encontrado!`))
}