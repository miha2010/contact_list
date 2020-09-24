import { v4 as uuidv4 } from 'uuid';

import { man1, man2, man3, man4, woman1, woman2, woman3, woman4, woman5, woman6, woman7 } from './Images/people';

export default [
  { id: uuidv4(), isFavorite: true, fullName: 'Addie Hernandez ', email: 'addie@gmail.com', numbers: [{ type: 'Mobile', number: '+385 4671 231' }], image: woman1 },
  { id: uuidv4(), isFavorite: true, fullName: 'Oscar Arnold', email: 'oscar@gmail.com', numbers: [{ type: 'Mobile', number: '+385 4671 231' }], image: man1 },
  { id: uuidv4(), isFavorite: false, fullName: 'Isaiah McGuire', email: 'isaiah@gmail.com', numbers: [{ type: 'Mobile', number: '+385 4671 231' }], image: man2 },
  { id: uuidv4(), isFavorite: true, fullName: 'Ann Schneider', email: 'ann@gmail.com', numbers: [{ type: 'Mobile', number: '+385 4671 231' }], image: woman2 },
  { id: uuidv4(), isFavorite: true, fullName: 'Agnes Terru', email: 'agnes@gmail.com', numbers: [{ type: 'Mobile', number: '+385 4671 231' }], image: woman3 },
  { id: uuidv4(), isFavorite: false, fullName: 'Rose Bush', email: 'rose@gmail.com', numbers: [{ type: 'Mobile', number: '+385 4671 231' }, { type: 'Home', number: '+385 123 321' }], image: woman4 },
  { id: uuidv4(), isFavorite: false, fullName: 'Duane Reese', email: 'duane@gmail.com', numbers: [{ type: 'Mobile', number: '+385 4671 231' }, { type: 'Home', number: '+385 123 321' }], image: man3 },
  { id: uuidv4(), isFavorite: true, fullName: 'Mae Chandler', email: 'mae@gmail.com', numbers: [{ type: 'Mobile', number: '+385 4671 231' }, { type: 'hOME', number: '+385 123 321' }, { type: 'Husband', number: '+385 4671 231' }], image: woman5 },
  { id: uuidv4(), isFavorite: false, fullName: 'Evelyn Weaver', email: 'evelyn@gmail.com', numbers: [{ type: 'Mobile', number: '+385 4671 231' }], image: woman6 },
  { id: uuidv4(), isFavorite: true, fullName: 'Catherine Moore', email: 'catherine@gmail.com', numbers: [{ type: 'Mobile', number: '+385 4671 231' }], image: woman7 },
  { id: uuidv4(), isFavorite: false, fullName: 'Sam Manning', email: 'sam@gmail.com', numbers: [{ type: 'Mobile', number: '+385 4671 231' }], image: man4 },
];
