import coin from '../../../util/moeda';
const dotenv = require("dotenv")
if (process.env.NODE_ENV != 'production') { dotenv.config() }
export default async function bonecoins(req, res) {
    const { bones } = req.query
    const BCTOKEN = process.env.BCTOKEN, user = bones[0], valor = Number(bones[1])
    const resp = await coin(BCTOKEN, user, valor, res);
    return resp
}
