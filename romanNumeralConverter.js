// This function will convert any given number up to the maximum number possible by conventional
// notation (3999) into a roman numeral

function convertToRoman(num) {
  // define the powerKeys for the different powers of ten
  const powerKeys = [
    {
      one: "I",
      five: "V"
    },
    {
      one: "X",
      five: "L"
    },
    {
      one: "C",
      five: "D"
    },
    {
      one: "M"
    }
  ];

  const numLength = num.toString().length;
  let romanStringBuilder = [];
  const modulo = 10;
  let multiplier = 1;
  // loop through the number starting from the ones, then the tens, then 100's etc
  for (let i = 0; i < numLength; i++) {
    // build the set of numerals depending on the digit and then add the numerals
    // to the front of the string builder array
    switch (Math.floor((num / multiplier) % modulo)) {
      case 1:
        romanStringBuilder.unshift(`${powerKeys[i].one}`);
        break;
      case 2:
        romanStringBuilder.unshift(`${powerKeys[i].one}${powerKeys[i].one}`);
        break;
      case 3:
        romanStringBuilder.unshift(
          `${powerKeys[i].one}${powerKeys[i].one}${powerKeys[i].one}`
        );
        break;
      case 4:
        romanStringBuilder.unshift(`${powerKeys[i].one}${powerKeys[i].five}`);
        break;
      case 5:
        romanStringBuilder.unshift(`${powerKeys[i].five}`);
        break;
      case 6:
        romanStringBuilder.unshift(`${powerKeys[i].five}${powerKeys[i].one}`);
        break;
      case 7:
        romanStringBuilder.unshift(
          `${powerKeys[i].five}${powerKeys[i].one}${powerKeys[i].one}`
        );
        break;
      case 8:
        romanStringBuilder.unshift(
          `${powerKeys[i].five}${powerKeys[i].one}${powerKeys[i].one}${
            powerKeys[i].one
          }`
        );
        break;
      case 9:
        romanStringBuilder.unshift(
          `${powerKeys[i].one}${powerKeys[i + 1].one}`
        );
        break;
    }
    // increment the multiplier to gain access to the next power / digit
    multiplier *= modulo;
  }
  // combine the final string builder array into a string and return it
  console.log(romanStringBuilder.join(""));
  return romanStringBuilder.join("");
}

//Tests
convertToRoman(2); // should return "II".
convertToRoman(3); // should return "III".
convertToRoman(4); // should return "IV".
convertToRoman(5); // should return "V".
convertToRoman(8); // should return "VIII".
convertToRoman(9); // should return "IX".
convertToRoman(10); // should return "X".
convertToRoman(12); // should return "XII".
convertToRoman(16); // should return "XVI".
convertToRoman(29); // should return "XXIX".
convertToRoman(44); // should return "XLIV".
convertToRoman(45); // should return "XLV"
convertToRoman(68); // should return "LXVIII"
convertToRoman(83); // should return "LXXXIII"
convertToRoman(97); // should return "XCVII"
convertToRoman(99); // should return "XCIX"
convertToRoman(400); // should return "CD"
convertToRoman(500); // should return "D"
convertToRoman(501); // should return "DI"
convertToRoman(649); // should return "DCXLIX"
convertToRoman(798); // should return "DCCXCVIII"
convertToRoman(891); // should return "DCCCXCI"
convertToRoman(1000); // should return "M"
convertToRoman(1004); // should return "MIV"
convertToRoman(1006); // should return "MVI"
convertToRoman(1023); // should return "MXXIII"
convertToRoman(2014); // should return "MMXIV"
convertToRoman(3999); // should return "MMMCMXCIX"
