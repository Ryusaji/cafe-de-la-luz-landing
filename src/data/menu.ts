export interface MenuItem {
  id: number;
  name: string;
  price: string;
  description: string;
  category: 'cafes' | 'postres' | 'brunch';
  image: string;
}

export const menuItems: MenuItem[] = [
  {
    id: 1,
    name: 'Café de la Luz',
    price: '2.50€',
    description: 'Nuestro espresso con leche, cremoso y con el tueste perfecto.',
    category: 'cafes',
    image: '/images/caffe.png'
  },
  {
    id: 2,
    name: 'Batido de Helado',
    price: '4.90€',
    description: 'Vaso artesanal con helado de vainilla y toppings de temporada.',
    category: 'postres',
    image: '/images/Alimento.png'
  },
  {
    id: 3,
    name: 'Tarta de Queso',
    price: '5.50€',
    description: 'Receta casera de la casa, cremosa y horneada a diario.',
    category: 'postres',
    image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 4,
    name: 'Tostada con Jamón',
    price: '6.50€',
    description: 'Pan de cristal con tomate natural y jamón ibérico de bellota.',
    category: 'brunch',
    image: 'https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 5,
    name: 'Croissant Francés',
    price: '2.20€',
    description: 'Masa de mantequilla pura, crujiente por fuera y tierno por dentro.',
    category: 'brunch',
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 6,
    name: 'Combo Luz Especial',
    price: '10.00€',
    description: 'Zumo de naranja natural, café, tosta y un trozo de tarta artesana.',
    category: 'brunch',
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }
];
