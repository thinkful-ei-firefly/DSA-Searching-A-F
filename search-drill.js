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

const books = [
{code:'500', title:'Natural sciences and mathematics', name:'Name 1'},
{code:'510', title:'Mathematics', name:'Name 2'},
{code:'516', title:'Geometry', name:'Name 3'},
{code:'516.3', title:'Analytic geometries', name:'Name 4'},
{code:'516.37', title:'Metric differential geometries', name:'Name 5'},
{code:'516.375', title:'Finsler geometry', name:'Name 6'},
{code:'517', title:'Geometry 1', name:'Name 7'},
{code:'517.3', title:'Analytic geometries 1', name:'Name 8'},
{code:'517.37', title:'Metric differential geometries 1', name:'Name 9'},
{code:'517.375', title:'Finsler geometry 1', name:'Name 10'}
]

const binarySearchBook = (array, value, start=0, end=array.length) => {
    if (start > end || start>=array.length) {
        return 'Not found';
    }
    const index = Math.floor((start + end) / 2);
    const item = array[index];
    if (item.code === value.code && item.title === value.title) {
        return array[index].name;
    }
    else if (parseFloat(item.code) < parseFloat(value.code)) {
        return binarySearchBook(array, value, index + 1, end);
    }
    else if (parseFloat(item.code) > parseFloat(value.code)) {
        return binarySearchBook(array, value, start, index - 1);
    }
};

/*console.log(binarySearchBook(books, {code:'516.37', title:'Metric differential geometries'}));
console.log(binarySearchBook(books, {code:'517.37', title:'Metric differential geometries 1'}));
console.log(binarySearchBook(books, {code:'518.37', title:'Metric differential geometries 1'}));
*/
