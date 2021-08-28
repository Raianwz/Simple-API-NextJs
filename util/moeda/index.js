const dotenv = require("dotenv")
if (process.env.NODE_ENV != 'production') { dotenv.config() }
const msg = (texto) => JSON.stringify(texto).replace(/[\\"]/g, '')
export default async function coins(TOKEN, user, valor, res) {
    let resp; TOKEN = TOKEN ?? '';
    if (TOKEN.lenght !== 0 && isNaN(user) && !isNaN(valor)) {
        try {
            const Jebaited = await fetch(`https://api.jebaited.net/addPoints/${TOKEN}/${user}/${valor}`)
            Jebaited.status === 200 ? res.status('200') : res.status('400')
            Jebaited.status === 200
                ? resp = res.end(msg(`@${user} ganhou ${valor}`))
                : resp = res.end(msg(`FeelsDankMan @${user} ocorreu um erro, Alô @RaianWz.`))
        } catch (err) {
            resp = res.end(msg(`FeelsDankMan @${user} ocorreu um erro, chamen o @Raianwz.`))
        }
        return resp
    }
    res.status('404')
    return resp = res.end(msg(`FeelsDankMan @${user} algo deu MUITO errado mesmo, chamen @Raianwz.`))
}