function generateKey(length, characters) {
  let result = '';
  for (let i = 0; i < length; i++) {
    const index = random(0, characters.length - 1);
    result += characters[index];}
  return result;}
const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
const key = generateKey(16, characters);
console.log(key); 