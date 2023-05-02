export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
export const USERNAME = process.env.NEXT_PUBLIC_USERNAME;
export const PASSWORD = process.env.NEXT_PUBLIC_PASSWORD;

export const textDescription = `Atuo com desenvolvimento front-end há mais de cinco anos. Durante minha carreira, passei por consultoria de marketing digital e startups.`;

export const curiosities = `
- Entre os anos de 2012/2014, fui militar do Exército Brasileiro, ocupando o posto de segundo tenente da reserva (Tenente R/2);
<br /><br />
- Atuei como analista de suporte em empresa do comércio varejista de vestuário de 2015 até 2017;
<br /><br />
- Atualmente estou cursando minha segunda graduação em Nutrição, com entuito de unir os meus conhecimentos em tecnologia e com os conhecimentos que irei adquirir na área da saúde para empreender nesse ramo.
`;

export const aboutDescription = `
Meu nome é Yago, resido na cidade de São Paulo e atualmente sou
desenvolvedor de aplicativos dentro do universo Jira.
<br />
<br />
Possuo experiência com desenvolvimento web e mobile utilizando React,
Next.js e React Native, possuo bagagem em implementação de ecommerce
utilizando a plataforma VTEX, além de conhecimentos em HTML, CSS,
Javascript entre outras ferramentas.
`;

export const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
