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