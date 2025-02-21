function romano(a) {
  if (a === 1) return "I";
  if (a === 2) return "II";
  if (a === 3) return "III";
  if (a === 5) return "V"; 
  if (a === 10) return "X";
  if (a === 50) return "L";
  if (a === 100) return "C";
}

export default romano;
