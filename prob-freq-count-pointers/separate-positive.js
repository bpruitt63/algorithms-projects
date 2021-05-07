// add whatever parameters you deem necessary
function separatePositive(arr) {
    const end = arr.length - 1;
    for (let i = end; i >= 0; i--) {
        if (arr[i] < 0) {
            let num = arr.splice(i, 1);
            arr[end] = num[0];
        };
    };
    return arr;
};
