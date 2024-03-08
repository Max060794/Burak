// Shunday function yozing, u string qabul qilsin va string ichidagi eng uzun sozni qaytarsin.
// MASALAN: findLongestWord("I come from Uzbekistan") return "Uzbekistan"

function findLongestWord(inputString: string): string {
    const words: string[] = inputString.split(' ');

    let longestWord: string = '';
    for (const word of words) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }
    return longestWord;
}
const inputString: string = "I come from Uzbekistan";
const result: string = findLongestWord(inputString);
console.log(result);  // Выводит "Uzbekistan"
