import romano from "./romano";

test("Convierte 1 a I", () => {
  expect(romano(1)).toEqual("I");
});

test("Convierte 2 a II", () => {
  expect(romano(2)).toEqual("II");
});



