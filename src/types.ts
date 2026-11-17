export interface NavItem {
  label: string;
  href: string;
}

export const BOOK_DETAILS = {
  title: 'De Glasfabriek',
  author: 'Cees Meijs',
  genre: 'Historische roman',
  isbn: '9789083672007',
  language: 'Nederlands',
  format: 'Paperback',
  coverImage: '/assets/images/book-cover.jpg',
  coverImageWeb: '/assets/images/book-cover-web.jpg',
  authorImage: '/assets/images/author-cees-meijs.jpg',
  orderUrl: 'https://www.boekenbestellen.nl/boek/de-glasfabriek/80213',
  trailerEmbedUrl: 'https://drive.google.com/file/d/1Qn6DaOTv3yY6yTVB_j0EndithpcI-GXI/preview',
  trailerDirectUrl: 'https://drive.google.com/file/d/1Qn6DaOTv3yY6yTVB_j0EndithpcI-GXI/view?usp=sharing',
  tagline: 'Tussen het rustige boerenleven van de Kempen en de industriële activiteiten van Eindhoven.',
  synopsisLead: 'De afstand tussen het stille Kempische dorp waar de tijd stil lijkt te staan en de bruisende stad Eindhoven waar Philips aan een imperium bouwt, is groot. Letterlijk en figuurlijk.',
  synopsisFull: 'Dorpeling Peer zoekt zijn toekomst in de stad. Twee werelden ontmoeten elkaar; het rustige boerenleven en de industriële activiteiten van de nieuwe ondernemingen. De eenvoudige woningen op het platteland en de deftige villa’s van rijke ondernemers. Hoewel Peer Verdonk niets weet van het moderne leven vindt hij werk bij de bouw van de glasfabriek op Strijp S en bij de bouw van Philipswoningen. Hij maakt vrienden in het pension waar hij komt te wonen. De toekomst samen met zijn vriendin Sija lijkt rooskleurig. Maar het pakt anders uit dan hij had gedacht.',
  authorBioParagraph1: 'Cees Meijs (1953) schreef eerder Het provinciehuis in de steigers en Steengoed. Ook verschenen korte verhalen van zijn hand in Brabants Dagblad en in Brabeau.',
  authorBioParagraph2: 'Zijn belangstelling voor de ontwikkelingen aan het begin van de 20e eeuw was aanleiding tot het schrijven van De Glasfabriek. Zijn achtergrond als bouwkundige en zijn interesse in de heemkunde hebben hun weerklank in de belevenissen van de hoofdpersoon. Meijs’ toegankelijke schrijfstijl maakt het boek aangenaam om te lezen.'
} as const;

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'Het boek', href: '#het-boek' },
  { label: 'Boektrailer', href: '#boektrailer' },
  { label: 'Historische context', href: '#historische-context' },
  { label: 'Over de auteur', href: '#over-de-auteur' },
  { label: 'Bestellen', href: '#bestellen' },
  { label: 'Contact', href: '#contact' },
];
