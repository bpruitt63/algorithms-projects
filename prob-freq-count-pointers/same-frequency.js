// add whatever parameters you deem necessary
function sameFrequency(num1, num2) {
    num1 = num1.toString();
    num2 = num2.toString();
    if (num1.length !== num2.length) return false;
    const freq = {};
    for (let num of num1) {
        num in freq ? freq[num] ++ : freq[num] = 1;
    };
    for (let num of num2) {
        if (num in freq && freq[num] > 0) {
           freq[num] --; 
        } else {
            return false;
        }
    };
    return true;
}
