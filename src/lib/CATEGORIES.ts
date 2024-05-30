
export type CategoryType = {
    id: string;
    name: string;
    desc: string;
    logoSrc: string;
    items: Array<{
      id: string;
      name: string;
      price: number;
      images: Array<string>;
    }>;
  };

export const CATEGORIES: CategoryType[] = [
    {
      id: "national",
      name: "National Teams",
      desc: "Camisetas de selecciones nacionales",
      logoSrc: "/images/national/main-logo.png",
      items: [
        {id: "arg", name: "Camiseta de Argentina", price: 0, images: ["/arg-1.webp", "/arg-2.webp", "/arg-3.webp"]},
        {id: "deu", name: "Camiseta de Alemania", price: 0, images: ["/deu-1.webp", "/deu-2.webp", "/deu-3.webp"]},
        {id: "jpn", name: "Caminseta de Japón", price: 0, images: ["/jpn-1.webp", "/jpn-2.webp", "/jpn-3.webp"]}
    ]
    },
    {
      id: "premier-league",
      name: "Premier League",
      desc: "Camisetas de la Premier League de Inglaterra",
      logoSrc: "/images/premier-league/main-logo.png",
      items: [
        { id: "cfc", name: "Camiseta del Chelsea", price: 0, images: ["/cfc-1.webp", "/cfc-2.webp", "/cfc-3.webp"]},
        { id: "mun", name: "Camiseta de Manchester United", price: 0, images: ["/mun-1.webp", "/mun-2.webp", "/mun-3.webp"]},
        { id: "mac", name: "Camiseta de Manchester City", price: 0, images: ["/mac-1.webp", "/mac-2.webp", "/mac-3.webp"]},
        { id: "ars", name: "Camiseta de Arsenal", price: 0, images: ["/ars-1.webp", "/ars-2.webp", "/ars-3.webp"]},
      ]
    },
    {
      id: "bundesliga",
      name: "Bundesliga",
      desc: "Camisetas de la Bundesliga de Alemania",
      logoSrc: "/images/bundesliga/main-logo.png",
      items: [
        { id: "bay", name: "Camiseta de FC Bayern", price: 0, images: ["/bay-1.webp", "/bay-2.webp", "/bay-3.webp"]},
        { id: "bvb", name: "Camiseta de Borussia Dortmund", price: 0, images: ["/bvb-1.webp", "/bvb-2.webp", "/bvb-3.webp"]},
        { id: "wol", name: "Camiseta de Wolfsburg", price: 0, images: ["/wol-1.webp", "/wol-2.webp", "/wol-3.webp"]},

      ]
    },
    {
      id: "serie-a",
      name: "Serie A",
      desc: "Camisetas de la Seria A de Italia",
      logoSrc: "/images/serie-a/main-logo.png",
      items: [
        { id: "int", name: "Camiseta de Inter", price: 0, images: ["/int-1.webp", "/int-2.webp", "/int-3.webp"]},
        { id: "mil", name: "Camiseta de Milan", price: 0, images: ["/mil-1.webp", "/mil-2.webp", "/mil-3.webp"]},
        { id: "juv", name: "Camiseta de Juventus", price: 0, images: ["/juv-1.webp", "/juv-2.webp", "/juv-3.webp"]},
        { id: "laz", name: "Camiseta de Lazio", price: 0, images: ["/laz-1.webp", "/laz-2.webp", "/laz-3.webp"]},
        { id: "rom", name: "Camiseta de Roma", price: 0, images: ["/rom-1.webp", "/rom-2.webp", "/rom-3.webp"]},
      ]
    },
    {
      id: "la-liga",
      name: "La Liga",
      desc: "Camisetas de La Liga de España",
      logoSrc: "/images/la-liga/main-logo.png",
      items: [
        { id: "atc", name: "Camiseta de Atlético Madrid", price: 0, images: ["/atc-1.webp", "/atc-2.webp", "/atc-3.webp"]},
        { id: "bar", name: "Camiseta de Barcelona", price: 0, images: ["/bar-1.webp", "/bar-2.webp", "/bar-3.webp"]},
        { id: "bet", name: "Camiseta de Betis", price: 0, images: ["/bet-1.webp", "/bet-2.webp", "/bet-3.webp"]},
        { id: "rma", name: "Camiseta de Real Madrid", price: 0, images: ["/rma-1.webp", "/rma-2.webp", "/rma-3.webp"]},
        { id: "sev", name: "Camiseta de Sevilla", price: 0, images: ["/sev-1.webp", "/sev-2.webp", "/sev-3.webp"]},
      ]
    }
  ];
  