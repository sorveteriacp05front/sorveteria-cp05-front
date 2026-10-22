import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <header >
            <h1 >
                Sorveteria <span>FEMAR</span>
            </h1>

            <nav>
                <ul >

                    <li>
                        <Link to="/" >Home</Link>
                    </li>

                    <li>
                        <Link to="/Sorvetes" >Sorvetes</Link>
                    </li>

                    <li>
                        <Link to="/contato">Contato</Link>
                    </li>

                    <li>
                        <Link to="/login" >Login</Link>
                    </li>

                </ul>
            </nav>
        </header>
    )
}

export default Navbar