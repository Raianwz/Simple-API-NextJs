async function dolar(request, response){

    const dolarResponse =  await fetch("https://economia.awesomeapi.com.br/all/USD-BRL");
    const dolarResponseJson = await dolarResponse.json();
    const dol = dolarResponseJson.USD;
    let rp = (valor) => parseFloat(valor).toFixed(4).replace('.',',')

    response.json({
       [0]:`${dol.name} está valendo R$ ${rp(dol.bid)}💵 ➖ Max. R$ ${rp(dol.high)} ⬆ ➖ Min. R$ ${rp(dol.low)} ⬇ ➖ elementsOkay Dados de ${dol.create_date}`
    })
}

export default dolar;