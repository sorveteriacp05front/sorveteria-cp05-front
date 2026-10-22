import Card from '../components/Card'
import Sorvete1 from "../assets/sorvete1.jpg"
import Sorvete2 from "../assets/sorvete2.jpg"
import Sorvete3 from "../assets/sorvete3.jpg"
import Sorvete4 from "../assets/sorvete4.jpg"

const Home = () => {
    const sorvetes = [
        { id: 1, titulo: "Copinho de baunilha", preco: "R$ 25,99", imagem: Sorvete1 },
        { id: 2, titulo: "Casquinha de chocolate", preco: "R$ 3,99", imagem: Sorvete2 },
        { id: 3, titulo: "Casquinha de morango", preco: "R$ 5,99", imagem: Sorvete3 },
        { id: 4, titulo: "Casquinha de pistache", preco: "R$ 8,99", imagem: Sorvete4 }
    ];

    return (
        <main className="px-[5%] mt-10 mb-16 grow bg-[#E5D5C3]">

            <h2 className="titulo text-3xl font-bold text-[#5C493B] mb-8 animate-[fadeIn_0.8s_ease-out]">Sorvetes em Destaque</h2>

            <section className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6">

                {sorvetes.map((sorvete, index) => (

                    <div key={sorvete.id} className="animate-[fadeInUp_0.6s_ease-out_both]" style={{ animationDelay: `${index * 150}ms` }}>

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