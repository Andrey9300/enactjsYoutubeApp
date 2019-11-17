import {normalize, schema} from 'normalizr';

// Define a users schema
const user = new schema.Entity('users');

// Define your comments schema
const comment = new schema.Entity('comments', {
  commenter: user,
});

// Define your article
const article = new schema.Entity('articles', {
  author: user,
  comments: [comment],
});

// const normalizedData = normalize(originalData, article);
