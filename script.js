const url = new URL('https://intita.com/?user=User&age=25#test');


const queryParams = url.searchParams;
const user = queryParams.get('user');
const age = queryParams.get('age');

const hash = url.hash;

console.log(`query params: user -> ${user}; age -> ${age}.`);
console.log(`hash: ${hash}.`);
