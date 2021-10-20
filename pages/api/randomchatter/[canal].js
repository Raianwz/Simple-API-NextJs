Array.prototype.random = function(){return this[Math.floor(Math.random() * this.length)];}
export default async function randomUser(req, res) {
    const { canal, ignore } = req.query
    if (isNaN(canal)) {
        let chatters = await fetch(`https://tmi.twitch.tv/group/user/${canal.toLowerCase()}/chatters`)
        let cList = await chatters.json(), Users = [], str = (text) => JSON.stringify(text), filtro;
        let Itens = ['broadcaster','vips','moderators','viewers']
        let FixToArray = (obj) => { if (str(obj) != '[]'){ let List = obj; for (let i = 0; i < List.length; i++) Users.push(str(List[i]).replaceAll(/[\[\]\"]/g, '')); }; }

        for(let i = 0; i < Itens.length; i++){ FixToArray(cList.chatters[`${Itens[i]}`]) }

        if (ignore) { 
            let ignList = ignore.split(",")
            for(let i=0; i < ignList.length; i++) {
                ignList[i] = ignList[i].toLowerCase()
                if(Users.includes(ignList[i])) Users = Users.filter(user => user !== ignList[i]);
            }
        }
        
        if(Users.length == 0) return res.end(str(`Ocorreu um Erro, ninguem foi encontrado!`).replace(/[\\"]/g, ''))

        res.end(JSON.stringify(`@${Users.random()}`).replace(/[\\"]/g, ''))
        return
    }
    res.end(JSON.stringify(`Ocorreu um erro, talvez o canal informado seja um número.`).replace(/[\\"]/g, ''))
}