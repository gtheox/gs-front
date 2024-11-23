import Image from 'next/image';
import logoEnergy from "@/assets/imgs/footer/logo.png"; 
import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="bg-[#1F2937] flex flex-col items-center p-6 text-white">
            {/* Logotipo */}
            <div className="mb-4">
                <Image 
                    src={logoEnergy} 
                    alt="Logotipo do EnergyTracker" 
                    width={120} 
                    height={40} 
                />
            </div>

            {/* Redes Sociais */}
            <div className="flex gap-4 mb-4">
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-green-400">
                    <FaInstagram className="text-2xl" />
                </a>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-green-400">
                    <FaLinkedin className="text-2xl" />
                </a>
                <a href="https://www.github.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-green-400">
                    <FaGithub className="text-2xl" />
                </a>
            </div>

            {/* Contatos */}
            <div className="text-center text-sm">
                <p>Contato: contato@energytracker.com</p>
                <p>Telefone: (11) 98765-4321</p>
                <p>© {new Date().getFullYear()} EnergyTracker. Todos os direitos reservados.</p>
            </div>
        </footer>
    );
}
