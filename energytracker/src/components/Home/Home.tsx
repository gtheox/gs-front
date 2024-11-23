import Image from 'next/image'; // Importa o componente Image do Next.js
import energyImage from '@/assets/imgs/content/home/energia.png';

export default function Home() {
    return (
        <section className="flex flex-col lg:flex-row items-start justify-center bg-white p-16 shadow-lg rounded-lg gap-10 w-11/12 lg:w-4/4 mx-auto my-16">
            <div className="flex-shrink-0">
                <Image 
                    className="rounded-lg" 
                    src={energyImage} 
                    alt="Imagem sobre monitoramento energético" 
                    width={600} 
                    height={400} 
                />
            </div>
            <div className="flex flex-col justify-start w-full max-w-lg">
                <h1 className="text-[#0B3D91] font-bold text-5xl mb-2">EnergyTracker</h1>
                <hr className="mb-4" />
                <p className="text-[#0B3D91] font-medium text-lg mb-4">
                    O **EnergyTracker** é uma solução inovadora para monitorar e gerenciar o consumo energético em edifícios e instalações.
                    A plataforma oferece insights detalhados, ajudando a identificar oportunidades para otimizar o uso de energia, reduzir
                    custos e minimizar impactos ambientais.
                    <br />
                    Explore nossas funcionalidades e transforme a maneira como você gerencia energia em seus projetos!
                </p>
                <a href="/consumo">
                    <button className="bg-[#0B3D91] text-white font-jura text-base rounded-lg w-48 h-12 hover:scale-110 transition-transform duration-300">
                        Acessar Dashboard
                    </button>
                </a>
            </div>
        </section>
    );
}
