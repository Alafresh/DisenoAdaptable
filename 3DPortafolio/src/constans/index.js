const navLinks = [
  {
    name: 'Proyectos',
    link: '#work',
  },
  {
    name: 'Habilidades',
    link: '#skills',
  },
  {
    name: 'Experiencia',
    link: '#experiencia',
  },
  {
    name: 'Testimonios',
    link: '#testimonials',
  },
];

const words = [
  { text: 'Ideas', imgPath: '/images/ideas.svg' },
  { text: 'Diseños', imgPath: '/images/designs.svg' },
  { text: 'Código', imgPath: '/images/code.svg' },
  { text: 'Videojuegos', imgPath: '/images/ideas.svg' },
  { text: 'Figma', imgPath: '/images/code.svg' },
];

// counterItems se ignora

const logoIconsList = [
  {
    imgPath: '/images/logos/company-logo-4.png',
  },
];

const abilities = [
  {
    imgPath: '/images/seo.png',
    title: 'Entrega de software funcional',
    desc: 'Nos enfocamos en entregar software que funcione correctamente y que cumpla los requerimientos esperados.',
  },
  {
    imgPath: '/images/chat.png',
    title: 'Comunicación clara y transparente',
    desc: 'Mantenemos una comunicación constante, clara y asegurada para que estés al tanto en cada etapa del proceso.',
  },
  {
    imgPath: '/images/time.png',
    title: 'Entrega a tiempo',
    desc: 'Nos comprometemos a entregar los proyectos en el plazo acordado, con calidad y atención al detalle.',
  },
];

const techStackImgs = [
  {
    name: 'React Developer',
    imgPath: '/images/logos/react.png',
  },
  {
    name: 'Python Developer',
    imgPath: '/images/logos/python.svg',
  },
  {
    name: 'Backend Developer',
    imgPath: '/images/logos/node.png',
  },
  {
    name: 'Interactive Developer',
    imgPath: '/images/logos/three.png',
  },
];

const techStackIcons = [
  {
    name: 'React Developer',
    modelPath: '/models/react_logo-transformed.glb',
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: 'Python Developer',
    modelPath: '/models/python-transformed.glb',
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: 'Backend Developer',
    modelPath: '/models/node-transformed.glb',
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: 'Interactive Developer',
    modelPath: '/models/three.js-transformed.glb',
    scale: 0.05,
    rotation: [0, 0, 0],
  },
];

// expCards, expLogos y testimonials ignorados

const socialImgs = [
  {
    name: 'github',
    url: 'https://github.com/',
    imgPath: '/images/github.png',
  },
  {
    name: 'gmail',
    url: 'mailto:tucorreo@gmail.com',
    imgPath: '/images/gmail.png',
  },
];

export {
  words,
  abilities,
  logoIconsList,
  techStackIcons,
  techStackImgs,
  navLinks,
  socialImgs,
};