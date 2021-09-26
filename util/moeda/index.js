const dotenv = require("dotenv")
if (process.env.NODE_ENV != 'production') { dotenv.config() }
const msg = (texto) => JSON.stringify(texto).replace(/[\\"]/g, '')
export default async function coins(TOKEN, user, valor, res) {
    let resp; TOKEN = TOKEN ?? '';
    if (TOKEN.lenght !== 0 && isNaN(user) && !isNaN(valor)) {
        const Jebaited = await fetch(`https://api.jebaited.net/addPoints/${TOKEN}/${user}/${valor}`)
        if (Jebaited && Jebaited.status == 200) {
            res.status('200')
            resp = res.end(msg(`@${user} ganhou ${valor}`))
        }
        else{
            res.status('400')
            resp = res.end(msg(`!ndl @${user} ${valor} Tentando pelo @Nightbot — Você ganhou ${valor}`))
        }
        return resp
    }
    resp = res.end(msg(`:/ Desculpe @${user} ocorreu um erro e Você NÃO ganhou seus ${valor}`))
    return resp
}
