const dotenv = require("dotenv")
if (process.env.NODE_ENV != 'production') { dotenv.config() }

export default async function users(req, res) {
    const { user } = req.query
    const TCLIENTID = process.env.TCLIENTID
    const THELIX = process.env.THELIX
    const username = user[0];
    if (username != null || username != "") {
        const ivr = await fetch(`https://api.ivr.fi/twitch/resolve/${username}`)
        const Helix = await fetch(`https://api.twitch.tv/helix/users?login=${username}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${THELIX}`,
                'Client-ID': TCLIENTID,
            }
        });
        if (Helix.status === 200 || ivr.status == 200) {
            if (Helix.status === 200) {
                const twitch = await Helix.json(), UserData = await ivr.json()
                var resp = {};
                resp = {"id": twitch.data[0].id,"login": twitch.data[0].login,
                    "display_name": twitch.data[0].display_name,
                    "chatColor": UserData.status == 200 ? UserData.chatColor : "#9148FF",
                    "profile_image_url": twitch.data[0].profile_image_url,
                    "offline_image_url": twitch.data[0].offline_image_url,}
            }else if(ivr.status === 200){
                const UserData = await ivr.json()
                resp = {"id": UserData.id, "login": UserData.login,"display_name": UserData.displayName,
                "chatColor": UserData.chatColor,"profile_image_url": UserData.logo}
            }
            res.status('200')
            res.end(JSON.stringify(resp))
            return
        }
        res.status('404')
        res.end(JSON.stringify('Algo deu errado =/'))
    }
}   