function uniqueOccurrences(arr) {
    let freq = {};

    // Step 1: Count frequency
    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];
        if (freq[num]) {
            freq[num]++;
        } else {
            freq[num] = 1;
        }
    }

    // Step 2: Create frequency array
    let freqArr = [];
    for (let key in freq) {
        freqArr.push(freq[key]);
    }

    // Step 3: Brute force uniqueness check
    for (let i = 0; i < freqArr.length; i++) {
        for (let j = i + 1; j < freqArr.length; j++) {
            if (freqArr[i] === freqArr[j]) {
                return false; // Duplicate frequency found
            }
        }
    }

    return true; // ✅ All frequencies are unique
}


// Optimal Approch

function frequencyofUnique(arr){
    let freq = {};
    
    for(let i=0; i<arr.length; i++){
        let num = arr[i];
        if(freq[num]){
            freq[num]++;
        }
        else {
            freq[num]=1;
        }
    }

    let freqSet = new Set();
    for(let key in freq){
        let frequency = freq[key];
        if(freqSet.has(frequency)){
            return false;
        }
        freqSet.add(frequency);
    }
    return true;
}

let arr = [1, 2, 3, 1, 1, 2];
let result = frequencyofUnique(arr);
console.log("Are occurrences unique? ", result);