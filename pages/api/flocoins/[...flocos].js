import coin from '../../../util/moeda';
const dotenv = require("dotenv")
if (process.env.NODE_ENV != 'production') { dotenv.config() }
export default async function flocoins(req, res) {
    const { flocos } = req.query
    const FCTOKEN = process.env.FCTOKEN, user = flocos[0], valor = Number(flocos[1])
    const resp = await coin(FCTOKEN, user, valor, res);
    return resp
}