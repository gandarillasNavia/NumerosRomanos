function romano(a) {
  const nroRomano = [
    { nro: 1000, simbolo: "M" },
    { nro: 900, simbolo: "CM" },
    { nro: 500, simbolo: "D" },
    { nro: 400, simbolo: "CD" },
    { nro: 100, simbolo: "C" },
    { nro: 90, simbolo: "XC" },
    { nro: 50, simbolo: "L" },
    { nro: 40, simbolo: "XL" },
    { nro: 10, simbolo: "X" },
    { nro: 9, simbolo: "IX" },
    { nro: 5, simbolo: "V" },
    { nro: 4, simbolo: "IV" },
    { nro: 1, simbolo: "I" }
  ];
  let convertido = "";
  for (const { nro, simbolo } of nroRomano) {
    while (a >= nro) {
      convertido += simbolo;
      a -= nro;
    }
  }
  return convertido;
}

export default romano;
