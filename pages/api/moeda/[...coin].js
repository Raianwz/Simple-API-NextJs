// const [respMatch, respHelp] = await Promise.all([
//     fetch('https://json-wz.vercel.app/moedas').then(res => res.json()),
//     fetch('https://json-wz.vercel.app/help').then(res => res.json())
//   ]);
const [respMatch, respHelp] = await Promise.all([
    fetch('https://json-wz.vercel.app/moedas').then(res => res.arrayBuffer()),
    fetch('https://json-wz.vercel.app/help').then(res => res.arrayBuffer())
]);



export default async function Moedas(req, res) {
    const coin = req.query.coin[0]
    const emote = req.query.coin[1] ?? 'elementsOkay'
    const isJson = checkJson(req.query.coin[2])
    const combina = String(coin).toLocaleUpperCase()
    const MatchBuffer = new Uint8Array(respMatch), HelpBuffer = new Uint8Array(respHelp);
    let matchList = JSON.parse(Buffer.from(MatchBuffer).toString('utf-8'))
    let helpList = JSON.parse(Buffer.from(HelpBuffer).toString('utf-8'))
    matchList = matchList[0]
    helpList = helpList[0]

    const msg = (txt) => isJson == false ? txt.replace(/[\\"]/g, '') : txt
    res.setHeader('Content-Type', 'application/json')


    if (isNaN(combina)) {
        if (combina.toLocaleLowerCase() == 'all') {
            res.end(MatchBuffer)
        }
        if (matchList[combina]) {
            let moeda = await getCurrency(combina, emote)
            res.end(msg(JSON.stringify(moeda)))
        }
        if (combina.toLocaleLowerCase() == 'help') {
            res.end(HelpBuffer)
        }
    }
    res.status(400).json({
        message: "Verifique as combinações possiveis em /moeda/all",
        help: "Ajuda em /moeda/help",
        error: "Not Found",
        status: 404,
    })
}

async function getCurrency(comb, emote) {
    const getCoin = await fetch(`https://economia.awesomeapi.com.br/all/${comb}`)
    const respCoin = await getCoin.json()
    const localCoin = respCoin[String(comb).slice(0, 3)]
    const rp = (valor) => valor.replace('.', ',')
    let saida = "", simb = "R$"
    localCoin.codein !== "BRL" ? simb = localCoin.codein : false;

    let dia, mes, ano, vData = localCoin.create_date, nData;
    dia = vData.slice(8, 10)
    mes = vData.slice(5, 7)
    ano = vData.slice(0, 4)
    nData = `${dia}/${mes}/${ano} ${vData.slice(11, 19)}`

    return saida = `${String(localCoin.name).replace('/', ' em ')} está valendo ${simb} ${rp(Number(localCoin.bid).toFixed(2))}💵 (${rp(localCoin.bid)}) ➖ Max. ${simb} ${rp(localCoin.high)} ⬆ ➖ Min. ${simb} ${rp(localCoin.low)} ⬇ ➖ ${String(emote)} Dados de ${nData}`
}


function checkJson(text) {
    let localText = String(text).toLocaleLowerCase()

    if (localText === "true") {
        return true
    }

    return false
}