// Shunday function tuzing, u string qabul qilib teskari qilib return qilsin
// MASALAN: gerReverse("hello") return qiladi "olleh"


function getReverse(inputString: string): string {
    return inputString.split('').reverse().join('');
}
const reversedString: string = getReverse("hello");
console.log(reversedString); 
