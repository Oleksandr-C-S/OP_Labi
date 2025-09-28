//Скалярні типи та посилання
//З сигнатурою inc(num: Num), де Num є об'єктом з полем n, щоб функція змінила поле вихідного об'єкта, переданого за посиланням,
  //приклад виклику const obj = { n: 5 }; inc(obj); console.dir(obj);

function inc(num) {
  num.n += 1;
}

const obj = { n: 5 };
inc(obj);

console.dir(obj);
