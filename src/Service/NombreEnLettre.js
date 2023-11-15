export default function NombreEnLettres(nombre) {
  let integerPart = Math.floor(nombre);
  const decimalPart = Math.round((nombre - integerPart) * 100);

  const units = ["", "un", "deux", "trois", "quatre", "cinq", "six", "sept", "huit", "neuf"];
  const teens = ["", "onze", "douze", "treize", "quatorze", "quinze", "seize", "dix-sept", "dix-huit", "dix-neuf"];
  const tens = ["", "dix", "vingt", "trente", "quarante", "cinquante", "soixante", "soixante-dix", "quatre-vingt", "quatre-vingt-dix"];
  const thousands = ["", "mille", "million", "milliard", "billion"];

  const convertToWords = (number) => {
    if (number < 10) {
      return units[number];
    }
    else if (number === 10) {
      return "dix";
    }
    else if (number < 20) {
      return teens[number - 10];
    }
    else if (number < 70) {
      const ten = Math.floor(number / 10);
      const remainder = number % 10;
      return tens[ten] + (remainder !== 0 ? "-" + units[remainder] : "");
    }
    else if (number === 70) {
      return "soixante-dix";
    }
    else if (number < 80) {
      const remainder = number - 60;
      return "soixante" + (remainder !== 0 ? "-" + convertToWords(remainder) : "-dix");
    }
    else if (number === 90) {
      return "quatre-vingt-dix";
    }
    else if (number < 100) {
      const remainder = number - 80; 
      return "quatre-vingt" + (remainder !== 0 ? "-" + convertToWords(remainder) : "-dix");
    }
    else {
      const hundred = Math.floor(number / 100);
      const remainder = number % 100;
      return (hundred===1 ? units[0] :units[hundred]) + (hundred === 1 ? " cent" : " cents") + (remainder !== 0 ? " " + convertToWords(remainder) : "");
    }
  };
  
  if (integerPart === 0) {
    return "zéro";
  }

  let words = "";
  let currentScale = 0;
  while (integerPart > 0) {
    const triplet = integerPart % 1000;
    if (triplet !== 0) {
      words = (triplet === 1 && currentScale === 1 ? "" : convertToWords(triplet)) + (currentScale > 0 ? " " + thousands[currentScale] : "") + (words ? " " + words : "");
    }
    integerPart = Math.floor(integerPart / 1000);
    currentScale++;
  }

  if (decimalPart > 0) {
    words += " virgule " + convertToWords(decimalPart);
  }

  return words;
}