// add whatever parameters you deem necessary
function isSubsequence(str1, str2) {
    if (str1.length > str2.length) return false;
    let i = 0;
    let j = 0;
    while (i < str1.length){
        if (str1[i] === str2[j]) i++;
        j++;
        if (j > str2.length) return false;
    };
    return true;
};
