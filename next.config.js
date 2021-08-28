module.exports = {
    trailingSlash: true,
    rewrites: async () => [
        { source: '/dolar/', destination: '/api/dolar/' },
        { source: '/smlurker/:user*/', destination: '/api/smlurker/:user*/' },
        { source: '/bonecoins/:bones*/', destination: '/api/bonecoins/:bones*/' },
        { source: '/flocoins/:flocos*/', destination: '/api/flocoins/:flocos*/' },
        { source: '/lirocoins/:liro*/', destination: '/api/lirocoins/:liro*/' },
        { source: '/suncoins/:suns*/', destination: '/api/suncoins/:suns*/' },
      ],
}
