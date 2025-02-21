import romano from "./romano";

test("Convierte 1 a I", () => {
  expect(romano(1)).toEqual("I");
});

test("Convierte 2 a II", () => {
  expect(romano(2)).toEqual("II");
});

test("Convierte 3 a III", () => {
  expect(romano(3)).toEqual("III");
});

test("Convierte 5 a V", () => {
  expect(romano(5)).toEqual("V");
});

test("Convierte 10 a X", () => {
  expect(romano(10)).toEqual("X");
});

test("Convierte 50 a L", () => {
  expect(romano(50)).toEqual("L");
});

test("Convierte 100 a C", () => {
  expect(romano(100)).toEqual("C");
});

test("Convierte 500 a D", () => {
  expect(romano(500)).toEqual("D");
});

test("Convierte 1000 a D", () => {
  expect(romano(1000)).toEqual("M");
});

test("Convierte 564 a DLXIV", () => {
  expect(romano(564)).toEqual("DLXIV");
});

test("Convierte 666 a DCLXVI", () => {
  expect(romano(666)).toEqual("DCLXVI");
});

test("Convierte 73 a LXXIII", () => {
  expect(romano(73)).toEqual("LXXIII");
});

test("Convierte 354 a CCCLIV", () => {
  expect(romano(354)).toEqual("CCCLIV");
});