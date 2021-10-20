module.exports = {
  trailingSlash: true,
  rewrites: async () => [
    { source: '/dolar/', destination: '/api/dolar/' },
    { source: '/rd/chatters/:canal*/', destination: '/api/random/chatters/:canal*/' },
    { source: '/smlurker/:user*/', destination: '/api/smlurker/:user*/' },
    { source: '/bonecoins/:bones*/', destination: '/api/bonecoins/:bones*/' },
    { source: '/flocoins/:flocos*/', destination: '/api/flocoins/:flocos*/' },
    { source: '/josecoins/:zes*/', destination: '/api/josecoins/:zes*/' },
    { source: '/lirocoins/:liro*/', destination: '/api/lirocoins/:liro*/' },
    { source: '/suncoins/:suns*/', destination: '/api/suncoins/:suns*/' },
  ],
}
