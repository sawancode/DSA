function moveZeros(arr){
    let nonZero=0;
    for(let i=0; i<arr.length; i++){
        if(arr[i]!=0){
            [arr[i], arr[nonZero]] = [arr[nonZero], arr[i]];
            nonZero++;
        }
    }
    return arr;
}

let arr = [0, 1, 0, 2, 3, 0, 0, 5]
let result = moveZeros(arr);
console.log(result);