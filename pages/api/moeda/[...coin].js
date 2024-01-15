import matchList from "@/pages/api/moeda/match.json";

export default async function Moedas(req, res) {
    const coin = req.query.coin[0]
    const emote = req.query.coin[1] ?? 'elementsOkay'

    let combina = String(coin)
    res.setHeader('Content-Type', 'application/json')

    if(isNaN(combina)){
        if(combina.toLocaleLowerCase() == 'all'){
            res.end(JSON.stringify(matchList))
        }
        if(matchList[combina]){
            let moeda = await getCurrency(combina, emote)
            res.end(JSON.stringify(moeda))
        }
    }
    res.status(400).json({
        message: "Verifique as combinações possiveis em /moeda/all",
        error: "Not Found",
        status: 404,
    })
}

async function getCurrency(comb, emote){
    const getCoin = await fetch(`https://economia.awesomeapi.com.br/all/${comb}`)
    const respCoin =  await getCoin.json()
    const localCoin = respCoin[String(comb).slice(0,3)]
    const rp = (valor) => valor.replace('.', ',')
    let saida = "", simb = "R$"
    localCoin.codein !== "BRL" ? simb = localCoin.codein : false;

    let dia, mes, ano, vData = localCoin.create_date, nData;
        dia = vData.slice(8,10)
        mes = vData.slice(5,7)
        ano = vData.slice(0,4)
        nData = `${dia}/${mes}/${ano} ${vData.slice(11,19)}`

    return saida = `${String(localCoin.name).replace('/', ' em ')} está valendo ${simb} ${rp(Number(localCoin.bid).toFixed(2))}💵 (${rp(localCoin.bid)}) ➖ Max. ${simb} ${rp(localCoin.high)} ⬆ ➖ Min. ${simb} ${rp(localCoin.low)} ⬇ ➖ ${String(emote)} Dados de ${nData}`  
}
