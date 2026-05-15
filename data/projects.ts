import dashBoard from '@/public/imgProjects/DashboardJupi.webp'
import cellMedics from '@/public/imgProjects/cellMedics.webp'
import ecommerce from '@/public/imgProjects/ecommerce.webp'
import hotel from '@/public/imgProjects/hotels.webp'
import emiRescata from '@/public/imgProjects/emiliaRescata.webp'

export const projects = [
  {
    title: 'Dashboard Qlik',
    description: 'Dashboard analítico para visualización de ventas y métricas comerciales.',

    stack: ['Qlik Sense', 'Analytics', 'Data Visualization'],

    image: dashBoard,

    github: 'https://github.com/elias-92',

    demo: ''
  },
  {
    title: 'Cell Medics',
    description:
      'Plataforma web desarrollada para un servicio técnico de celulares, enfocada en la presentación de servicios, solicitud de diagnósticos y generación de presupuestos preliminares mediante formularios personalizados.',

    stack: ['React Js', 'Tailwind', 'MongoDB'],

    image: cellMedics,

    github: 'https://github.com/elias-92/2023-eCommerce',

    demo: 'https://cellmedics.netlify.app/'
  },
  {
    title: 'Emilia Rescata Animales',
    description:
      'Aplicación para gestión de adopciones de animales, con perfiles de mascotas, formulario de adopción y donaciones.',

    stack: ['React Js', 'Tailwind'],

    image: emiRescata,

    github: 'https://github.com/elias-92/2023-eCommerce',

    demo: 'https://www.emiliarescataanimales.org/'
  },
  {
    title: 'E-commerce Fullstack',
    description:
      'Aplicación de e-commerce moderna con gestión de productos, autenticación y carrito de compras.',

    stack: ['React Js', 'Tailwind', 'Firebase', 'Express'],

    image: ecommerce,

    github: 'https://github.com/elias-92/2023-eCommerce',

    demo: 'https://2023-ecommerce.netlify.app'
  },
  {
    title: 'Reservas de Hotel',
    description: 'Sistema para gestión de reservas, habitaciones y clientes en un hotel.',

    stack: ['React', 'Node.js', 'Express', 'MongoDB'],

    image: hotel,

    github: 'https://github.com/elias-92/reservahotelera',

    demo: 'https://2023-reserva-hotelera.netlify.app'
  }
]
