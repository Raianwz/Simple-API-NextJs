export default async function fabio(req, res){
    res.setHeader('Content-Type', 'application/json')
    const {link} = req.query
    const groke = await fetch('https://groke.se/twitch/spotify/?be4a10884217c176bcb6ff62a3febfd3');
    if(groke.status === 200 && !groke.redirected){    
        const grokeText = await groke.text(); let rsp;
        if(grokeText.includes('⏹️ No song playing')) rsp = `⏹️ Sem música tocando`
        else {
            if(link != 'off') rsp = grokeText;
            else  rsp = grokeText.replace(/(->)\s\b(open.spotify.com\/track\/.+)/g,'');
        };
        res.end(JSON.stringify(`${rsp}`).replace(/[\\"]/g, ''))
    }else{
        res.end(JSON.stringify(`Ocorreu um erro! 🙁`).replace(/[\\"]/g, ''))
    }
}