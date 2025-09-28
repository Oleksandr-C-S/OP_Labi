//Скалярні типи та посилання
//Підготуйте дві реалізації функції inc:
//З сигнатурою inc(n: number): number, приклад виклику: const a = 5; const b = inc(a); console.dir({a, b});

function inc(n) {
  return n + 1;
}
let a = 5;
let b = inc(a);
console.log("a =", a, "b =", b);
