let reg_brk = new RegExp("[(|)]"),
    a = 0,
    b = 0,
    c = 0;

function checkBrackets(str) {
    if (!str || !reg_brk.test(str)) {
        return -1;
    }
    for (let i = 0; i <= str.length; i++) {
        if (str[i] == "(") {
            a++;
        } else if (str[i] == ")") {
            b++;
        }
        if (a > b) {
            c = a - b;
        }
        else if (b > a) {
            c = b - a;
        }else if (a = b){
            c = 2;
        }
    }
    return c;
}
console.log(checkBrackets('1)()(())2(()'));
// 2
console.log( checkBrackets(NaN));
// -1

