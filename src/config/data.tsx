import mandaTreads from '../assets/img/MandaTreadsLogo.png';
import mulherHeader from '../assets/img/mulher.png';
import vectorMandaTreads from '../assets/img/VectorMandaTreadsLogo.png';
import rigtharrow from '../assets/img/rigtharrow.png';
import waveline from '../assets/img/waveline.png';
import nrfPrincipal from '../assets/img/Layer 18.png';
import nbaLayer from '../assets/img/Layer 19.png';
import whatsLayer from '../assets/img/Layer 22.png';

type imgHead = {
    name: string,
    paraghap?: string,
    img?: typeof mandaTreads
};

type imgArtigos = {
    id: number
    title: string,
    img: typeof mandaTreads,
    sumary: string,
    font: string
}

export const headersImg:imgHead[] = [
    {
        name: 'MandaTreads',
        img: mandaTreads
    },
    {
        name: 'Vector',
        img: vectorMandaTreads
    },
    {
        name: 'Mulher',
        img: mulherHeader
    },
    {
        name: 'waveline',
        img: rigtharrow
    },
    {
        name: 'rightarrow',
        img: waveline
    }
];

export const artigosBody:imgArtigos[] = [
    {
        id: 0,
        title: 'NRF 2020: Conheça os top 5 assuntos do evento.',
        img: nrfPrincipal,
        sumary: 'O maior evento sobre varejo do mundo mostrando os tendências, oportunidades e inovações para o setor.',
        font: 'Fonte: CMO ADOBE'
    },
    {
        id: 1,
        title: 'Petição para colocar Kobe Bryant no logo da NBA.',
        img: nbaLayer,
        sumary: 'Fãs da NBA estão unidos em uma petição para homenagear Kobe Bryant, propondo que sua imagem substitua o atual logo da liga. A iniciativa visa imortalizar a lenda do basquete e seu impacto global.',
        font: 'Fonte: Daily Mail'
    },
    {
        id: 2,
        title: 'WhatsApp terá função de pagamentos em 2020',
        img: whatsLayer,
        sumary: 'WhatsApp anuncia planos para introduzir uma função de pagamentos em 2020. A popular plataforma de mensagens busca expandir suas capacidades, permitindo que os usuários realizem transações financeiras diretamente pelo aplicativo.',
        font: 'Fonte: Proxxima'
    }
]