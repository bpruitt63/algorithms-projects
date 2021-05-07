// add whatever parameters you deem necessary
function constructNote(msg, letters) {
    if (msg.length > letters.length) return false;
    const freq = {};
    for (let letter of letters) {
        letter in freq ? freq[letter] ++ : freq[letter] = 1;
    };
    for (let char of msg) {
        if (char in freq && freq[char] > 0) {
           freq[char] --; 
        } else {
            return false;
        }
    };
    return true;
};
