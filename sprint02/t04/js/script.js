

function solver(a, b, c, d, e) {
    let x = 0;


    if (!a || !b || !c || !d || !e) {
        return ("Wrong input");
    }
    else if (typeof (a) != 'number' ||
        typeof (b) != 'number' ||
        typeof (c) != 'number' ||
        typeof (d) != 'number' ||
        typeof (e) != 'number') {
        return ("Wrong input");

    }
    else {
        x = (a * a) - (5 * b * c) + (d / 3) + e;
        return x.toFixed(2);
    }
}
// alert(solver(40, -9, 0.5, 7, 100));
// // displays 1724.83
// alert(solver(40, "doesn't look like a number", 0.5, 7, 100));
// // // displays "Wrong input"
// alert(solver(40, -9, 0.5, 7));
// // // displays "Wrong input"