// add whatever parameters you deem necessary
function averagePair(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        if ((arr[left] + arr[right]) / 2 === target) return true;
        if ((arr[left] + arr[right]) / 2 > target) right --;
        if ((arr[left] + arr[right]) / 2 < target) left ++;
    };
    return false;
};
