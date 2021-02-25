let mas1 = [];
let mas2 = [];

let flag = 0;
let oper = 0;

let result = 0;

function clearMonitor() {
    document.getElementById('input-output').innerHTML = '';
    mas1 = []
    mas2 = []
    flag = 0;
    oper = 0;
    result = 0;
}

function clearLine() {
    document.getElementById('input-output').innerHTML = '';
}

function newOperation() {
    mas2 = [];
    oper = 0;
    flag = 1;
}

function printOnScreen(arr) {
    for (let i in arr) {
        document.getElementById('input-output').innerHTML = arr.join('');
    }
}

function setOperation(symbol) {
    flag++;
    oper = symbol;
}

function addToMass(number) {
    if ((mas1[mas1.length - 1] != number && mas2[mas2.length - 1] != number && number === 0) || number != 0) {
        if (flag === 0) {
            mas1.push(number)
            printOnScreen(mas1);
        } else {
            if (flag === 1) {
                clearLine();
                flag++;
            }
            mas2.push(number)
            printOnScreen(mas2);
        }
    }
}

function registersPlus() {
    if (flag === 0 && mas1.length != 0) {
        // if (mas1[0] === '-') {
            mas1[0] *= -1;
            printOnScreen(mas1)
        // } else {
        //     mas1[0] *= -1;
        //     printOnScreen(mas1)
        // }
    } else if (mas2.length != 0){
        // if (mas2[0] === '-') {
            mas2[0] *= -1;
            printOnScreen(mas2)
        // } else {
        //     mas2[0] *= -1;
        //     printOnScreen(mas2)
        // }
    }
}

function findElem(symbol, arr) {
    for (let i in arr) {
        if (arr[i] === symbol) return true
    }
    return false
}

function findPosElem(symbol, arr) {
    for (let i in arr) {
        if (arr[i] === symbol) return i
    }
    return 0
}

function registersDot() {
    if (flag === 0) {
        if (findElem('.', mas1)) {
            // deleteElem
            printOnScreen(mas1)
        } else {
            mas1.push('.');
            printOnScreen(mas1)
        }
    } else {
        if (findElem('.', mas2)) {
            printOnScreen(mas2)
        } else {
            mas2.push('.');
            printOnScreen(mas2)
        }
    }
}

function operation(type) {
    if (flag === 0) {
        switch (type) {
            case '+':
                setOperation('+');
                return
            case '-':
                setOperation('-');
                return
            case '*':
                setOperation('*');
                return
            case '/':
                setOperation('/');
                return
            case '%':
                setOperation('%');
                return
            default:
                return
        }
    } else {
        theOutcome();
        return
    }
}

function toInt(arr) {
    let resultat = 0;
    for (let i = 0, j = arr.length - 1; i < arr.length; i++, j--) {
        if (arr[i] != ',') {
            // if (arr[i] != 0) {
                resultat += arr[i] * Math.pow(10, j)
        }
    }
    return resultat;
}

function toFloat(arr) {
    let resultat = 0, counter = findPosElem('.', arr);
    for (let i = 0, j = 0; i < arr.length; i++) {
        if (i >= counter) {
            if (i == counter) i++
            j++;
            resultat += arr[i] / Math.pow(10, j);
        } else {
            resultat *= 10;
            resultat += arr[i];
        }
    }
    return resultat;
}

function theOutcome() {
    let result1, result2;

    if (!findElem('.', mas1)) {
        result1 = toInt(mas1);
    } else {
        result1 = toFloat(mas1);
    }
    if (!findElem('.', mas2)) {
        result2 = toInt(mas2);
    } else {
        result2 = toFloat(mas2);
    }

    switch (oper) {
        case '+':
            result = result1 + result2;
            break;

        case '-':
            result = Math.abs((result1 - result2));
            break;

        case '*':
            result = result1 * result2;
            break;

        case '/':
            result = result1 / result2;
            break;

        case '%':
            result = result1 % result2;
            break;
        default:
            break;
    }

    document.getElementById('input-output').innerHTML = result.toString();
    newOperation();
}