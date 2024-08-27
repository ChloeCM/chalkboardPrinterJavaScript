const originalArr = [3, 6, 0, 1, 4, 6, 8, 112];

function createNewArray(value, start, end) {
    // Step 1: Create a copy of the original array
    let newArr = [...originalArr];

    // Step 2: Use the fill method on the copied array
    newArr.fill(value, start, end);

    // Step 3: Return the new array
    return newArr;
}

