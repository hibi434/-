let all = 0
let x = [1, 2, 3, 4, 5, 6, 7, 8, 9]
for (let i = 0; i < x.length; i++) {
    if (x[i] % 2 == 1) {
        all = all + x[i] ** 2
    }
}
console.log(all);
