
let masStrEn = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", "\\",
    '`','z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/'];
let masStrRu = ['й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'ё',
    ']','я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '/'];

let masNum = ['§', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '='];
let masNumEn = ['±', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+'];
let masNumRu = ['<', '!', '"', '№', '%', ':', '^', '&', '*', '(', ')', '_', '+'];

let flagShift = false;
let flagCapsLock = false;
let flagStart = false;
let flagLanguage = 'en';
let positionCursor = 0;

document.addEventListener('click', outputButinLine);

checkStart()
shiftStart()
infoLine();

function cursorOut() {
    let num = document.getElementById('lineOut').innerHTML.length;
    if (num !== 0) {
        // positionCursor = num;
        document.getElementById('lineOut').innerHTML += '|';
    }
}

function cursorDel() {
    let str = document.getElementById('lineOut').innerText
    let num = str.search("\\|");

    if (num === 0 || checkInfoLine()) {
        document.getElementById('lineOut').innerHTML = ''
    } else if (num !== 0) {
        document.getElementById('lineOut').innerHTML = (str.split('').slice(0, num ).join('') + str.split('').slice(num + 1, str.length).join(''));
    }
    return num;
}

// function cardOffsetLeft() {
//     let str = document.getElementById('lineOut').innerText
//     let num = str.search("\\|");
//     if (num != 0) {
//         document.getElementById('lineOut').innerHTML = (str.split('').slice(0, num).join('') + '|' + str.split('').slice(num, str.length).join(''));
//     }
// }
//
// function cardOffsetRight() {
//     let str = document.getElementById('lineOut').innerText
//     let num = str.search("\\|");
//     if (num != 0) {
//         document.getElementById('lineOut').innerHTML = (str.split('').slice(0, num).join('') + '|' + str.split('').slice(num, str.length).join(''));
//     }
// }

function clearOutputLine() {
    document.getElementById('lineOut').innerHTML = '';
}

function infoLine() {
    let num = document.getElementById('lineOut').innerHTML.length
    let str = document.getElementById('lineOut').innerHTML
    let infoLineRu = "Пожайлуста, введите текст...",
        infoLineEn = "Please enter text..."
    if (infoLineEn === str || infoLineRu === str) num = 0;

    if (num === 0) {
        clearOutputLine()
        if (flagLanguage === 'en') {
            document.getElementById('lineOut').innerHTML = infoLineEn
        } else if (flagLanguage === 'ru') {
            document.getElementById('lineOut').innerHTML = infoLineRu
        }
    }

}

function checkInfoLine() {
    let str = document.getElementById('lineOut').innerHTML
    let infoLineRu = "Пожайлуста, введите текст...",
        infoLineEn = "Please enter text..."
    if (infoLineEn === str || infoLineRu === str) return true
    else return false
}

function checkEmptyLine() {
    let num = document.getElementById('lineOut').innerText.length
    if (num === 0 || checkInfoLine()) {
        return true
    } else {
        return false
    }
}

function playAudio() {
    let audioBut = new Audio();
    audioBut.src = 'Sound_22465.mp3'
    audioBut.play();
}

function checkStart() {
    let num = document.getElementById('lineOut').innerHTML.length
    if (num === 0 || checkInfoLine()) {
        flagStart = false
    } else {
        flagStart = true
    }
}

function outputButinLine(event) {
    let num = document.getElementById('lineOut').innerText.length
    if (event.target.localName === 'button' && num < 150) {
        cursorDel()
        playAudio();
        if (event.target.id === 'deleteBut') {
            let size = document.getElementById('lineOut').innerText.length
            document.getElementById('lineOut').innerText = document.getElementById('lineOut').innerText.substr(0, size - 1);
            if (size === 1) shiftStart();
        } else if (event.target.id === 'probelId') {
            document.getElementById('lineOut').innerText += '\ ';
        } else if (event.target.id === 'TabId') {
            document.getElementById('lineOut').innerText += '\    ';
        } else if (event.target.id === 'arrowRight') {
            positionCursor++;
            // cardOffsetRight()
        } else if (event.target.id ==='arrowLeft') {
            positionCursor--;
            // cardOffsetLeft()
        } else if (event.target.id === 'EnterId') {
            inputHistory()
        } else if (event.target.id < 48 && event.target.id >= 0) {
            document.getElementById('lineOut').innerHTML += event.target.innerText;
            if (flagShift === true) shiftSymbol();
        }
        cursorOut()
        infoLine();
    }
}

function changeLanguage() {
    if (flagLanguage === 'en') {
        for (let i = 13, j = 0; i < 48, j < masStrRu.length; i++, j++) {
            document.getElementById(String(i)).innerText = masStrRu[j];
        }
        flagLanguage = 'ru';
    } else if (flagLanguage === 'ru' || flagLanguage === '') {
        for (let i = 13, j = 0; i < 48, j < masStrRu.length; i++, j++) {
            document.getElementById(String(i)).innerText = masStrEn[j];
        }
        flagLanguage = 'en';
    }

    if (checkEmptyLine()) {
        flagShift = false;
        shiftStart();
        return
    }

    if (flagCapsLock === true) {
        flagCapsLock = false
        capsSymbol();

    } else if (flagShift === true) {
        flagShift = false;
        shiftSymbol()
    }
}

function capsSymbol() {
    if (flagCapsLock === false) {
        for (let i = 13; i < 48; i++) {
            document.getElementById(String(i)).innerText = document.getElementById(String(i)).textContent.toUpperCase();
        }
        flagCapsLock = true;
        document.getElementById('CapsCircleId').style.background = '#29C83F';
    } else {
        for (let i = 13; i < 48; i++) {
            console.log(document.getElementById(String(i)).value);
            console.log(document.getElementById(String(i)).value.toLowerCase());
            document.getElementById(String(i)).innerText = document.getElementById(String(i)).textContent.toLowerCase();
        }
        flagCapsLock = false;
        document.getElementById('CapsCircleId').style.background = '#767676';
    }

    if (flagShift === true) {
        shiftSymbol()
    }
}

function shiftSymbol() {
    if (flagShift === false) {
        for (let i = 0; i < 13; i++) {
            if (flagLanguage === 'en') {
                document.getElementById(String(i)).innerText = masNumEn[i];
            } else if (flagLanguage === 'ru') {
                document.getElementById(String(i)).innerText = masNumRu[i];
            }
        }
        for (let i = 13; i < 48; i++) {
            document.getElementById(String(i)).innerText = document.getElementById(String(i)).textContent.toUpperCase();
        }
        flagShift = true;
    } else if (flagShift === true && flagCapsLock === false) {
        for (let i = 0; i < 13; i++) {
            document.getElementById(String(i)).innerText = masNum[i];
        }
        for (let i = 11; i < 45; i++) {
            document.getElementById(String(i)).innerText = document.getElementById(String(i)).textContent.toLowerCase();
        }
        flagShift = false;
    }
}

function shiftStart() {
    if (flagShift === false) {
        for (let i = 0; i < 13; i++) {
            document.getElementById(String(i)).innerText = masNum[i];
        }
        for (let i = 13; i < 48; i++) {
            document.getElementById(String(i)).innerText = document.getElementById(String(i)).textContent.toUpperCase();
        }
        flagShift = true;
    }
}

function inputHistory() {
    let ulID = document.getElementById('historyListId')
    let liID = document.createElement('li');
    liID.innerHTML = document.getElementById('lineOut').innerHTML;
    ulID.appendChild(liID);
    document.getElementById('lineOut').innerHTML = ''
}
