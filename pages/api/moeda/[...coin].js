export default async function Moedas(req, res) {
    const coin = req.query.coin[0]
    const emote = req.query.coin[1] ?? 'elementsOkay'
    const isJson = checkJson(req.query.coin[2])
    const combina = String(coin).toLocaleUpperCase().replace('\s','')
    const getCoin = await fetch(`https://economia.awesomeapi.com.br/all/${combina}`)

    const msg = (txt) => isJson == false ? txt.replace(/[\\"]/g, '') : txt
    res.setHeader('Content-Type', 'application/json')
    
    if (isNaN(combina)) {
        let moeda = await getCurrency(getCoin, combina, emote)
        res.status(200)
        res.end(msg(JSON.stringify(moeda)))
        return
    }

    res.status(404).json({
        message: "Verifique as combinações possiveis em /docs/moeda",
        error: "Not Found",
        status: 404,
    })
    res.end()
}

async function getCurrency(getCoin, comb, emote) {
    const rp = (valor) => valor.replace('.', ',')
    let saida = "", simb = "R$"

    if (getCoin.status === 200) {
        const respCoin = await getCoin.json()
        const localCoin = respCoin[String(comb).slice(0, 3)]
        localCoin.codein !== "BRL" ? simb = localCoin.codein : false;

        let dia, mes, ano, vData = localCoin.create_date, nData;
        dia = vData.slice(8, 10)
        mes = vData.slice(5, 7)
        ano = vData.slice(0, 4)
        nData = `${dia}/${mes}/${ano} ${vData.slice(11, 19)}`
        saida = `${String(localCoin.name).replace('/', ' em ')} está valendo ${simb} ${rp(Number(localCoin.bid).toFixed(2))}💵 (${rp(localCoin.bid)}) ➖ Max. ${simb} ${rp(localCoin.high)} ⬆ ➖ Min. ${simb} ${rp(localCoin.low)} ⬇ ➖ ${String(emote)} Dados de ${nData}`;
    }
    else if (getCoin.status === 404){
        saida = "Moeda não encontrada ☹️"
    }else{
        saida = "Servidor Indisponivel☹️"
    }
    return saida
}


function checkJson(text) {
    let localText = String(text).toLocaleLowerCase()
    if (localText === "true") {
        return true
    }
    return false
}