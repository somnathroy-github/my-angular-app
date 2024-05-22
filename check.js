const serialize = require('serialize-javascript');

// Define a JavaScript object
const obj = {
  name: 'John',
  age: 30,
  isAdmin: true,
  roles: ['admin', 'user']
};

// Serialize the object into a string
const serializedString = serialize(obj);

console.log(serializedString);