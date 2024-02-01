
//Количество гласных
function getCount(str) {
    let sum = 0;
    let vs = "aeiou";
    let newStr = str.toLowerCase().split('');
    let r = newStr.reduce((acc, cur) => {
        if (vs.indexOf(cur) !== -1) {
            sum++
        }
        return sum;
    }, 0);
    return r;
}
// Классифицировать нового участника
function openOrSenior(data) {
    let result = data.map(function (member) {
        if (member[0] >= 55 && member[1] > 7) {
            return "Senior";
        } else return "Open";

    })
    return result;
}
// Сумма двух наименьших положительных целых чисел
function sumTwoSmallestNumbers(numbers) {
    let arr = numbers.sort((a, b) => a - b);
    let result = arr[0] + arr[1];
    return result;
}
//Рост населения
function nbYear(p0, percent, aug, p) {
    let year = 0;
    while (p0 < p) {
        year++;
        p0 = Math.floor(p0 + (p0 * (percent / 100)) + aug)
    };

    return year;
};
//Друг или враг?
function friend(friends) {
    return friends.filter((name) => name.length === 4);
}
//Мили на галлон в километры на литр
function converter(mpg) {
    let lpg = 4.54609188;
    let kmpm = 1.609344;
    let kpl = +((kmpm / lpg) * mpg).toFixed(2);

    return kpl;
}
//Перевернутые струны
function solution(str) {
    return str.split("").reverse().join("");
}
//Подсчет битов
var countBits = function (n) {
    let newNum = n.toString(2);
    let sum = 0;
    for (let i = 0; i < newNum.length; i++) {
        if (newNum[i] === '1') {
            sum += 1
        }
    }
    return sum;
};

//Simple Pig Latin
function pigIt(str) {
    return str.split(" ").map(word => {
        if (word.match(/[^a-z]/i)) return word
        return word.slice(1) + word[0] + "ay"
    }).join(" ")
}

//Counting Duplicates
function duplicateCount(text) {
    let textArr = text.toLowerCase().split("").sort();
    let count = [];
    for (let i = 0; i < textArr.length; i++) {
        if (textArr[i] === textArr[i + 1]) {
            count.push(textArr[i])
        }
    }
    let setArr = new Set(count);
    return setArr.size;
}
//Number of People in the Bus
var number = function (busStops) {
    let count = 0;
    for (let i = 0; i < busStops.length; i++) {
        let sum = busStops[i][0] - busStops[i][1];
        count += sum;
    }
    return count;
}
//Two to One
function longest(s1, s2) {
    let arrS1 = s1.split('');
    let arrS2 = s2.split('');
    let arr = arrS1.concat(arrS2).sort();
    let set = Array.from(new Set(arr)).join('');
    return set;
}

//A Needle in the Haystack
function findNeedle(haystack) {
    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] === "needle") {
            return "found the needle at position " + haystack.indexOf(haystack[i]);
        }
    }
}
