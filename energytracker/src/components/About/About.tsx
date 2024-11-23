"use client"; // Marca o componente como Client-side

import dynamic from 'next/dynamic';
import { StaticImageData } from 'next/image';
import edu from '@/assets/imgs/content/about/edu.jpg';
import gabriel from '@/assets/imgs/content/about/gabriel.jpg';
import luka from '@/assets/imgs/content/about/luka.jpg';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CardAbout from '@/components/CardAbout/CardAbout';

// Carregar o Slider dinamicamente para evitar erros no SSR
const Slider = dynamic(() => import('react-slick'), { ssr: false });

interface IPropsCardAbout {
  image: StaticImageData;
  name: string;
  rm: string;
  urlGithub: string;
  urlInstagram: string;
  urlLinkedin: string;
}

export default function About() {
  // Dados dos membros da equipe
  const membros: IPropsCardAbout[] = [
    {
      image: edu,
      name: 'Eduardo Ribeiro Giovaninni',
      rm: 'rm555030',
      urlGithub: 'https://github.com/DuGiovannini',
      urlInstagram: 'https://www.instagram.com/dugiovannini_/',
      urlLinkedin: 'https://www.linkedin.com/in/eduardo-giovannini-157216262/',
    },
    {
      image: gabriel,
      name: 'Gabriel Teodoro Gonçalves Rosa',
      rm: 'rm555962',
      urlGithub: 'https://github.com/gtheox',
      urlInstagram: 'https://www.instagram.com/thexx___._/',
      urlLinkedin: 'https://www.linkedin.com/in/gabriel-teodoro-gon%C3%A7alves-rosa-a26970236/',
    },
    {
      image: luka,
      name: 'Luka Yuiti Ura Shibuya',
      rm: 'rm558123',
      urlGithub: 'https://github.com/lukashibuya',
      urlInstagram: 'https://www.instagram.com/lukashibuya/',
      urlLinkedin: 'https://www.linkedin.com/in/luka-shibuya-b62a322b3/',
    },
  ];

  // Configurações do slider
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <main className="w-full max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8 mt-14 mb-24">
      <h1 className="text-white text-center font-extrabold text-5xl mt-5 sm:text-4xl md:text-6xl lg:text-7xl">
        Sobre nós
      </h1>
      <p className="text-white text-lg font-light mt-4 mb-8 text-center sm:text-base md:text-lg lg:text-xl">
        Nós somos uma equipe criada na Instituição FIAP Paulista, composta por
        alunos dedicados ao estudo e ao progresso de novas tecnologias. O nosso
        foco como equipe é trazer soluções rápidas e de boa acessibilidade para
        nossos clientes, sempre buscando por conhecer novos caminhos e interagir
        com novas pessoas. Sinta-se livre para nos comunicar, caso interessados
        em nossos serviços!
      </p>
      <div className="w-full overflow-hidden">
        <Slider {...settings}>
          {membros.map((membro, index) => (
            <div key={index}>
              <CardAbout
                image={membro.image}
                name={membro.name}
                rm={membro.rm}
                urlInstagram={membro.urlInstagram}
                urlLinkedin={membro.urlLinkedin}
                urlGithub={membro.urlGithub}
              />
            </div>
          ))}
        </Slider>
      </div>
    </main>
  );
}
