import Card from '../components/Card'


const Home = () => {
    const sorvetes = [
        { id: 1, titulo: "-", preco: "R$ -", imagem: sorvete1 },
        { id: 2, titulo: "-", preco: "R$ -", imagem: sorvete2 },
        { id: 3, titulo: "-", preco: "R$ -", imagem: sorvete3 },
        { id: 4, titulo: "-", preco: "R$ -", imagem: sorvete4 }
    ];

    return (
        <main>

            <h2>Sorvetes em Destaque</h2>

            <section>

                {sorvetes.map((sorvete, index) => (

                    <div key={sorvete.id}  style={{ animationDelay: `${index * 150}ms` }}>

                        <Card
                            titulo={sorvete.titulo}
                            preco={sorvete.preco}
                            imagem={sorvete.imagem}
                        />

                    </div>
                ))}

            </section>

        </main>
    )
}

export default Home