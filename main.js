let array = [17, 84, 74, 65, 110, 254, 43, 22, 90, 71];
let array2 = []

for (let i = 0; i < array.length; i++) {
    let check = array[i] % 2
    
    if (check === 0) {
        let push = array2.push(array[i])
    } else {
        console.log();
    }

}

console.log(array + " - Boshlanishidagi array");
console.log(array2 + " - Juft sonlarga ajratilgan array");