// Shunday function tuzing, unga string argument pass bolsin.
// Function ushbu agrumentdagi digitlarni yangi stringda return qilsin
// MASALAN: getDigits("m14i1t") return qiladi "141"

function getDigits(input: string): string {
    const digitsArray = input.match(/\d/g);
    if (digitsArray) {
        return digitsArray.join("");
    } else {
        return "";
    }
}
const result = getDigits("m14i1t");
console.log(result);