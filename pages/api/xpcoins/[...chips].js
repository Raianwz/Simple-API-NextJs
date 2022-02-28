import coin from '../../../util/moeda';
const dotenv = require("dotenv")
if (process.env.NODE_ENV != 'production') { dotenv.config() }
export default async function suncoins(req, res) {
    const { chips } = req.query
    const XPTOKEN = process.env.XPTOKEN, user = chips[0], valor = Number(chips[1])
    const resp = await coin(XPTOKEN, user, valor, res);
    return resp
}