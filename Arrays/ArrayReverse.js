let arr = [1, 2, 3, 4, 5];
let start = 0;
let end = arr.length - 1;
while(start<end){
    // [arr[start], arr[end]] = [arr[end], arr[start]];
    let temp=arr[start];
    arr[start]=arr[end];
    arr[end]=temp;
    start++;
    end--;
}
console.log(arr)