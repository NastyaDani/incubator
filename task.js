
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
function openOrSenior(data){
    let result = data.map(function(member){
      if (member[0]>=55 && member[1]>7){
        return "Senior";
      }else return "Open";
      
    })
      return result;
    }
// Сумма двух наименьших положительных целых чисел

    function sumTwoSmallestNumbers(numbers) {
        let arr = numbers.sort((a,b)=> a-b);
        let result = arr[0]+arr[1];
        return result;
      }