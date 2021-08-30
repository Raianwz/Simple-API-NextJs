import coin from '../../../util/moeda';
const dotenv = require("dotenv")
if (process.env.NODE_ENV != 'production') { dotenv.config() }
export default async function josecoins(req, res) {
    const { zes } = req.query
    const JCTOKEN = process.env.JCTOKEN, user = zes[0], valor = Number(zes[1])
    const resp = await coin(JCTOKEN, user, valor, res);
    return resp
}