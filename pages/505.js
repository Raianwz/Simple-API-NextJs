export default function Custom500() {
    return "Erro 505 Interno o Servidor Explodiu!"
}

Custom500.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404
    return { statusCode}
}