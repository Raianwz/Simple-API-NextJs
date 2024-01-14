
export default async function NotFound(req, res) {
    res.status(404).json({ message: 'Não encontrado 😕', error: 'Not Found', status: 404 });
};