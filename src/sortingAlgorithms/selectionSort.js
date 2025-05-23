export function selectionSort(arr) {
    const plan = {
        sorted: [],
        pos: [],
        swap: []
    };

    let minidx = 0;
    for (let i = 0; i < arr.length - 1; i++) {
        minidx = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minidx]) {
                minidx = j;
            }
            plan.pos.push([minidx, j]);
            plan.swap.push(false);
        }

        swap(arr, minidx, i);

        plan.pos.push([minidx, i]);
        plan.swap.push(true);

        plan.pos.push([minidx, i]);
        plan.swap.push(false);
    }

    plan.sorted = arr;
    console.log(arr);
    return plan;
}

function swap(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
