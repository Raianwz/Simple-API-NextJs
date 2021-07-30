const dotenv = require("dotenv")
if (process.env.NODE_ENV != 'production') { dotenv.config() }

export default async function users(req, res) {
    const { user } = req.query
    const TCLIENTID = process.env.TCLIENTID
    const THELIX = process.env.THELIX
    const username = user[0]
    if (username != null || username != "") {
        const Helix = await fetch(`https://api.twitch.tv/helix/users?login=${username}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${THELIX}`,
                'Client-ID': TCLIENTID,
            }
        });

        if(Helix.status === 200){
            const twitch = await Helix.json()
            res.status('200')
            res.end(JSON.stringify(twitch.data[0]))
        }else{
            res.status('401')
            res.end(JSON.stringify('Algo deu errado =/'))
        }
        return
    }
    res.status('404')
    res.end(JSON.stringify('Algo deu errado =/'))
}

