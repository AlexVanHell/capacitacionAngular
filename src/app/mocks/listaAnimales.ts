import { Animal } from '../models/animal';

export const animales: Animal[] = [
    {
      nombre: 'Chencho',
      especie: 'Perro',
      edad: 2,
      patas: 4,
      sexo: false, //macho
      imagen: 'http://static.vix.com/es/sites/default/files/styles/large/public/btg/curiosidades.batanga.com/files/Por-qu%C3%A9-los-perros-mueven-la-cola.jpg?itok=KgkMRlDM',
    },
    {
      nombre: 'Mira',
      especie: 'Gato',
      edad: 5,
      patas: 4,
      sexo: true, //hembra
      imagen: 'http://product.cdn.cevaws.com/var/storage/images/feliway-v2/comportamiento-del-gato/test-de-bienestar/tu-gato-tiene-un-riesgo-de-estres-moderado/507378-47-esl-ES/Tu-gato-tiene-un-riesgo-de-estres-moderado.jpg',
    },
    {
      nombre: 'Pancho',
      especie: 'Serpiente',
      edad: 5,
      patas: 0,
      sexo: false, //macho
      imagen: '',
    },
    {
      nombre: 'Benita',
      especie: 'Oso',
      edad: 8,
      patas: 4,
      sexo: true, //hembra
      imagen: 'http://www.curiosfera.com/wp-content/uploads/2016/10/Caracter%C3%ADsticas-del-oso.jpg',
    }
  ];