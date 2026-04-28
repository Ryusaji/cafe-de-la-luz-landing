export interface Review {
  id: number;
  author: string;
  rating: number;
  text: string;
  title: string;
  avatar: string;
}

export const reviews: Review[] = [
  {
    id: 1,
    author: "Cliente local",
    rating: 5,
    title: "Servicio impecable",
    text: "Los camareros encantadores dando un excelente servicio y profesionalidad.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"
  },
  {
    id: 2,
    author: "Viajero Gourmet",
    rating: 5,
    title: "El mejor combo de Madrid",
    text: "Consiste en zumo naranja, café con leche, tosta y tarta todo por 10€. Insuperable.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aria"
  },
  {
    id: 3,
    author: "Amante del dulce",
    rating: 5,
    title: "Todo delicioso",
    text: "Buen café, buena tarta de zanahoria y buena tostada con jamón. Un sitio muy acogedor.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Leo"
  }
];
