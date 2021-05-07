// add whatever parameters you deem necessary
function merge(arr1, arr2) {
    let sorted = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length){
        if (arr1[i] < arr2[j]) {
            sorted.push(arr1[i]);
            i++;
        } else {
            sorted.push(arr2[j]);
            j++;
        };
    };
    while (i < arr1.length) {
        sorted.push(arr1[i]);
        i++;
    };
    while (j < arr2.length) {
        sorted.push(arr2[j]);
        j++;
    };
    return sorted;
};

function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left, right);
};

function countPairs(arr, target) {
    arr = mergeSort(arr);
    let left = 0;
    let right = arr.length - 1;
    let counter = 0;
    while (left < right){
        if (arr[left] + arr[right] === target) {
            left ++;
            right --;
            counter ++;
        } else if (arr[left] + arr[right] > target) {
            right --;
        } else {
            left ++;
        };
    };
    return counter;
};
