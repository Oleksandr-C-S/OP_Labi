function introspect(iface) {
  return Object.entries(iface)
    .filter(([key, value]) => typeof value === 'function')
    .map(([key, value]) => [key, value.length]);
}
const iface = {
  m1: x => [x],
  m2: function (x, y) {
    return [x, y];
  },
  m3(x, y, z) {
    return [x, y, z];
  }};
console.log(introspect(iface));
