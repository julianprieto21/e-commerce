import { Category } from "../types";

export const CATEGORIES: Category[] = [
  {
    id: "national",
    name: "National Teams",
    desc: "Camisetas de selecciones nacionales",
    logoSrc: "/images/national/main-logo.png",
    items: ["arg", "deu", "jpn"],
  },
  {
    id: "premier-league",
    name: "Premier League",
    desc: "Camisetas de la Premier League de Inglaterra",
    logoSrc: "/images/premier-league/main-logo.png",
    items: ["cfc", "mun", "mac", "ars"],
  },
  {
    id: "bundesliga",
    name: "Bundesliga",
    desc: "Camisetas de la Bundesliga de Alemania",
    logoSrc: "/images/bundesliga/main-logo.png",
    items: ["bay", "bvb", "wol"],
  },
  {
    id: "serie-a",
    name: "Serie A",
    desc: "Camisetas de la Seria A de Italia",
    logoSrc: "/images/serie-a/main-logo.png",
    items: ["int", "mil", "juv", "laz", "rom"],
  },
  {
    id: "la-liga",
    name: "La Liga",
    desc: "Camisetas de La Liga de España",
    logoSrc: "/images/la-liga/main-logo.png",
    items: ["atc", "bar", "bet", "rma", "sev"],
  },
];
