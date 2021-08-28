import coin from '../../../util/moeda';
const dotenv = require("dotenv")
if (process.env.NODE_ENV != 'production') { dotenv.config() }
export default async function suncoins(req, res) {
    const { suns } = req.query
    const SNTOKEN = process.env.SNTOKEN, user = suns[0], valor = Number(suns[1])
    const resp = await coin(SNTOKEN, user, valor, res);
    return resp
}