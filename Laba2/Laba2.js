let myName = 'Іван';
const birthYear = 2000;
function greet(name) {
  console.log(`Привіт, ${name}!`);}
greet(myName);
function range(start, end) {
  const arr = [];
  for (let i = start; i <= end; i++) {
    arr.push(i);}
  return arr;}
console.log(range(15, 30));
function rangeOdd(start, end) {
  const arr = [];
  for (let i = start; i <= end; i++) {
    if (i % 2 !== 0) {
      arr.push(i);
    }}
  return arr;}
console.log(rangeOdd(15, 30));
function average(a, b) {
  return (a + b) / 2;}
function square(x) {
  return x * x;}
function cube(x) {
  return x * x * x;}
function calculate() {
  const results = [];
  for (let i = 0; i <= 9; i++) {
    const sq = square(i);
    const cb = cube(i);
    const avg = average(sq, cb);
    results.push(avg);}
  return results;}
console.log(calculate());
function fn() {
  const constObj = { name: 'Marcus' };
  let varObj = { name: 'Aurelius' };
  constObj.name = 'Marcus Aurelius';
  varObj.name = 'Emperor Aurelius';
  varObj = { name: 'Reassigned Object' };
  console.log(constObj);
  console.log(varObj);}
fn();
function createUser(name, city) {
  return { name, city };}
console.log(createUser('Marcus Aurelius', 'Roma'));
const phoneBookArray = [
  { name: 'Marcus Aurelius', phone: '+380445554433' },
  { name: 'Lucius Verus', phone: '+380501112233' },
  { name: 'Commodus', phone: '+380931234567' },];
function findPhoneByNameArray(name) {
  for (let i = 0; i < phoneBookArray.length; i++) {
    if (phoneBookArray[i].name === name) {
      return phoneBookArray[i].phone;
    }
  }
  return 'Не знайдено';}
console.log(findPhoneByNameArray('Commodus'));
const phoneBookHash = {
  'Marcus Aurelius': '+380445554433', 'Lucius Verus': '+3805011111111', 'Commodus': '+3809311111111',};
function findPhoneByNameHash(name) {
  return phoneBookHash[name] || 'Не знайдено';
}
console.log(findPhoneByNameHash('Lucius Verus'));