import { Link } from 'react-router-dom'

const Error = () => {
    return (
        <main>
            <h2>404</h2>

            <p>Ops! Esta página derreteu!</p>

            <p>Parece que você chegou a uma página que não existe. Mas calma, seu sorvete continua geladinho! 🍨</p>

            <Link to="/">
                Voltar para a Home
            </Link>

        </main>
    )
}

export default Error