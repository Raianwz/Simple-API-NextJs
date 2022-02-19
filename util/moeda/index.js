const dotenv = require("dotenv")
if (process.env.NODE_ENV != 'production') { dotenv.config() }
const msg = (texto) => JSON.stringify(texto).replace(/[\\"]/g, '')
export default async function coins(TOKEN, user, valor, res) {
    let resp; TOKEN = TOKEN ?? '';
    user.includes('@') ? user = user.replaceAll('@', '') : false;
    console.log(res)

    if (TOKEN.lenght !== 0 && isNaN(user) && Number(valor)) {
        valor >= 200 && valor <= 800 ? valor *= 2 : false
        const Jebaited = fetch(`https://api.jebaited.net/addPoints/${TOKEN}/${user}/${valor}`)
            .then(rsp => { return rsp })
            .catch((err) => { return resp = res.end(msg(`:/ Desculpe @${user} ocorreu um erro e Você NÃO ganhou seus ${valor}`)) })
        // const Jebaited = await fetch(`https://api.jebaited.net/addPoints/${TOKEN}/${user}/${valor}`).catch((err)=>{ return resp = res.end(msg(`:/ Desculpe @${user} ocorreu um erro e Você NÃO ganhou seus ${valor}`))})
        if (Jebaited) {
            res.status('200')
            resp = res.end(msg(`@${user} ganhou ${valor}`))
        }
        else {
            res.status('400')
            resp = res.end(msg(`!ndl @${user} ${valor} Tentando pelo @Nightbot — Você ganhou ${valor}`))
        }
        return resp
    }
    resp = res.end(msg(`:/ Desculpe @${user} ocorreu um erro, tente novamente mais tarde!`))
    return resp
}
