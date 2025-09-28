//Підрахунок елементів різних типів у масиві.

//Створіть вихідний масив, що містить значення різних типів, як елементів, наприклад: [true, 'hello', 5, 12, -200, false, false, 'word'] але бажано більш довгий та різноманітний.
//Створіть об'єкт-колекцію (хеш) з іменами типів у вигляді ключів та 0 як значення, наприклад: { number: 0, string: 0, boolean: 0 }
//Пройдіться по масиву циклом for..of і для кожного елемента масиву, збільшуйте відповідне значення в об'єкті-колекції.

const arr = [true, 'hello', 5, 12, -200, false, false, 'word', null, undefined, { x: 1 }, [1,2,3], () => 42, 3.14];
const typesCount = {
  number: 0,
  string: 0,
  boolean: 0,
  object: 0,
  undefined: 0,
  function: 0,};
for (const it of arr) {
  const t = typeof it;
  typesCount[t] += 1;}
console.dir(typesCount);
