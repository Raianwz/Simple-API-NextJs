const dotenv = require("dotenv")
if (process.env.NODE_ENV != 'production') { dotenv.config() }
async function bonecoins(request, response) {
    const BCTOKEN = process.env.BCTOKEN
    const valor = Number(request.query.valor)
    const user = request.query.user

    if (valor !== 0 && valor > 0 && user !== undefined && user !== "") {
        try {
            const Jebaited = await fetch(`https://api.jebaited.net/addPoints/${BCTOKEN}/${user}/${valor}`)
            response.setHeader('Content-Type', 'application/json')
            if (Jebaited.status === 200) {
                response.end(JSON.stringify(`@${user} ganhou ${valor}`).replace(/[\\"]/g, ''))
            } else {
                response.end(JSON.stringify(`@${user} algo deu errado FeelsDankMan ❗`).replace(/[\\"]/g, ''))
            }
        } catch (error) {
            response.end(JSON.stringify(`Algo deu muito errado WooFire ❗ ${error}`).replace(/[\\"]/g, ''))
        }
        return
    }
    response.end(JSON.stringify(`Algo deu errado WooFire ❗`).replace(/[\\"]/g, ''))
}

export default bonecoins