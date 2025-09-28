//Типи даних
//Підрахунок елементів різних типів у масиві.
  //Змініть приклад: видаліть усі ключі з початкової колекції та додайте їх динамічно у циклі.

const arr = [true, 'hello', 5, 12, -200, false, false, 'word', null, undefined, { x: 1 }, [1,2,3], () => 42, 3.14];
const types = {};
for (const item of arr) {
  const t = typeof item;
  if (!(t in types)) {
    types[t] = 0;
  }
  types[t] += 1;}
console.dir(types);
