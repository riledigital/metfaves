import Dexie from 'dexie';

const db = new Dexie('met-faves');
db.version(1).stores({
  favorites: 'id, objectUrl, imageUrl, title, culture, department',
});

export default db;
