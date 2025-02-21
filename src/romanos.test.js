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

