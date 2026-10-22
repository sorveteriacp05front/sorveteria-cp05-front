const Card = ({ titulo, preco, imagem }) => {
    return (
        <div>
            <img src={imagem} alt={titulo}  />

            <article>

                <h2 >{titulo}</h2>
                <p>{preco}</p>
                <button>
                    Comprar
                </button>
            </article>

        </div>
    )
}

export default Card