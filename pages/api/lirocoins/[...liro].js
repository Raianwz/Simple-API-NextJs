import coin from '../../../util/moeda';
const dotenv = require("dotenv")
if (process.env.NODE_ENV != 'production') { dotenv.config() }
export default async function lirocoins(req, res) {
    const { liro } = req.query
    const LCTOKEN = process.env.LCTOKEN, user = liro[0], valor = Number(liro[1])
    const resp = await coin(LCTOKEN, user, valor, res);
    return resp
}