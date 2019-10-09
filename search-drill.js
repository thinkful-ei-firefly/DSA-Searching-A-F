const arr = [3, 5, 6, 8, 11, 12, 14, 15, 17, 18]

const binarySearch = (array, value, start=0, end=array.length) => {
    //var start = start === undefined ? 0 : start;
    //var end = end === undefined ? array.length : end;

    if (start > end) {
        return -1;
    }

    const index = Math.floor((start + end) / 2);
    const item = array[index];

    console.log(start, end);
    if (item === value) {
        return index;
    }
    else if (item < value) {
        return binarySearch(array, value, index + 1, end);
    }
    else if (item > value) {
        return binarySearch(array, value, start, index - 1);
    }
};

//binarySearch(arr, 8)
/*
To find 8 we need 3 recursive calls;
1. [3, 5, 6, 8, 11, 12, 14, 15, 17, 18]
2. [3, 5, 6, 8, 11]
3. [8, 11]
4. [8]
*/

//binarySearch(arr, 16)
/*
We didn't 16 because it is not in the array.
1. [3, 5, 6, 8, 11, 12, 14, 15, 17, 18]
2. [14, 15, 17, 18]
3. [14, 15]
4. [7]
*/
