// add whatever parameters you deem necessary
function longestFall(arr) {
    if (!arr[0]) return 0;
    if (!arr[1]) return 1;
    let max = 1;
    let count = 1;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > arr[i + 1]) {
            count ++;
            if (count > max) {
                max = count;
            };
        } else {
            count = 1;
        };
    };
    return max;
};
