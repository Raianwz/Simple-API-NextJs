async function dolar(request, response) {
    if (request.method === 'GET') {
        const dolarResponse = await fetch("https://economia.awesomeapi.com.br/all/USD-BRL");
        const dolarResponseJson = await dolarResponse.json();
        const dol = dolarResponseJson.USD;
        const UrlEmote = request.query.emote
        let rp = (valor) => valor.replace('.', ',')
        let MsgEmote = 'elementsOkay';
        let dia, mes, ano, vData = dol.create_date, nData;

        dia = vData.slice(8,10)
        mes = vData.slice(5,7)
        ano = vData.slice(0,4)

        nData = `${dia}/${mes}/${ano} ${vData.slice(11,19)}`

        if(UrlEmote !== undefined &&  UrlEmote !== ""){
            MsgEmote = UrlEmote
        }

        response.setHeader('Content-Type', 'application/json')
        response.end(JSON.stringify(`${dol.name} está valendo R$ ${rp(dol.bid)}💵 ➖ Max. R$ ${rp(dol.high)} ⬆ ➖ Min. R$ ${rp(dol.low)} ⬇ ➖ ${MsgEmote} Dados de ${nData}`).replace(/[\\"]/g, ''))
        return
    }

    response.end(JSON.stringify(`Not Found`).replace(/[\\"]/g, ''))
}

export default dolar;