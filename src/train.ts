// H-TASK: 
// shunday function tuzing, u integerlardan iborat arrayni argument sifatida qabul qilib, 
// faqat positive qiymatlarni olib string holatda return qilsin
// MASALAN: getPositive([1, -4, 2]) return qiladi "12"


function getPositive(numbers: number[]): string {
    const positiveNumbers = numbers.filter(num => num > 0);
    const resultString = positiveNumbers.join('');
    return resultString;
}
const result = getPositive([1, -4, 2]);
console.log(result);
