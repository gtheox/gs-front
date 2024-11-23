import Image from 'next/image';
import Link from 'next/link';
import logoEnergy from '@/assets/imgs/header/logo.png';
import Chat from '../Chat/Chat';
import Entry from '../Entry/Entry';

export default function Header() {
  return (
    <header className="flex items-center justify-between p-4 bg-[#1F2937] w-full shadow-md">
      {/* Logotipo */}
      <Link href="/">
        <Image
          className="cursor-pointer"
          src={logoEnergy}
          alt="Logotipo do EnergyTracker"
          width={208}
          height={50}
        />
      </Link>

      {/* Navegação */}
      <nav className="flex items-center">
        <ul className="flex space-x-6">
          <li>
            <Link href="/" className="text-white text-lg font-medium hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link href="/consumo" className="text-white text-lg font-medium hover:underline">
              Consumo
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-white text-lg font-medium hover:underline">
              Sobre
            </Link>
          </li>
        </ul>
      </nav>
      <Entry />
      <Chat />
    </header>
  );
}
