export function bubbleSort(arr) {
    let sorted = false;
    const moves = {
        sorted: [],
        pos: [],
        swap: []
    };

    console.log(arr);

    // Traverse through all array elements
    for (let i = 0; i < arr.length - 1; i++) {
        // Last i elements are already sorted
        for (let j = 0; j < arr.length - i - 1; j++) {
            // Compare the adjacent elements
            if (arr[j] > arr[j + 1]) {
                moves.pos.push([j, j + 1]);
                moves.swap.push(true);
                swap(arr, j, j + 1);

                moves.pos.push([j, j + 1]);
                moves.swap.push(false);
            } else {
                moves.pos.push([j, j + 1]);
                moves.swap.push(false);
            }
        }
    }

    console.log(moves);
    moves.sorted = arr; // Store the sorted array
    return moves;
}

function swap(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
