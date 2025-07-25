'use strict'
console.log('Ⓒ Rea Meir 2022');

const notesByRange = [['Cbb', 0], ['Cb', 0], ['CN', 0], ['C#', 0], ['Cx', 0], ['Dbb', 0], ['Db', 0], ['DN', 0], ['D#', 0], ['Dx', 0], ['Ebb', 0], ['Eb', 0], ['EN', 0], ['E#', 0], ['Ex', 0], ['Fbb', 0], ['Fb', 0], ['FN', 0], ['F#', 0], ['Fx', 0], ['Gbb', 0], ['Gb', 0], ['GN', 0], ['G#', 0], ['Gx', 0], ['Abb', 0], ['Ab', 0], ['AN', 0], ['A#', 0], ['Ax', 0], ['Bbb', 0], ['Bb', 0], ['BN', 0], ['B#', 0], ['Bx', 0], ['Cbb', 1], ['Cb', 1], ['CN', 1], ['C#', 1], ['Cx', 1], ['Dbb', 1], ['Db', 1], ['DN', 1], ['D#', 1], ['Dx', 1], ['Ebb', 1], ['Eb', 1], ['EN', 1], ['E#', 1], ['Ex', 1], ['Fbb', 1], ['Fb', 1], ['FN', 1], ['F#', 1], ['Fx', 1], ['Gbb', 1], ['Gb', 1], ['GN', 1], ['G#', 1], ['Gx', 1], ['Abb', 1], ['Ab', 1], ['AN', 1], ['A#', 1], ['Ax', 1], ['Bbb', 1], ['Bb', 1], ['BN', 1], ['B#', 1], ['Bx', 1], ['Cbb', 2], ['Cb', 2], ['CN', 2], ['C#', 2], ['Cx', 2], ['Dbb', 2], ['Db', 2], ['DN', 2], ['D#', 2], ['Dx', 2], ['Ebb', 2], ['Eb', 2], ['EN', 2], ['E#', 2], ['Ex', 2], ['Fbb', 2], ['Fb', 2], ['FN', 2], ['F#', 2], ['Fx', 2], ['Gbb', 2], ['Gb', 2], ['GN', 2], ['G#', 2], ['Gx', 2], ['Abb', 2], ['Ab', 2], ['AN', 2], ['A#', 2], ['Ax', 2], ['Bbb', 2], ['Bb', 2], ['BN', 2], ['B#', 2], ['Bx', 2], ['Cbb', 3], ['Cb', 3], ['CN', 3], ['C#', 3], ['Cx', 3], ['Dbb', 3], ['Db', 3], ['DN', 3], ['D#', 3], ['Dx', 3], ['Ebb', 3], ['Eb', 3], ['EN', 3], ['E#', 3], ['Ex', 3], ['Fbb', 3], ['Fb', 3], ['FN', 3], ['F#', 3], ['Fx', 3], ['Gbb', 3], ['Gb', 3], ['GN', 3], ['G#', 3], ['Gx', 3], ['Abb', 3], ['Ab', 3], ['AN', 3], ['A#', 3], ['Ax', 3], ['Bbb', 3], ['Bb', 3], ['BN', 3], ['B#', 3], ['Bx', 3], ['Cbb', 4], ['Cb', 4], ['CN', 4], ['C#', 4], ['Cx', 4], ['Dbb', 4], ['Db', 4], ['DN', 4], ['D#', 4], ['Dx', 4], ['Ebb', 4], ['Eb', 4], ['EN', 4], ['E#', 4], ['Ex', 4], ['Fbb', 4], ['Fb', 4], ['FN', 4], ['F#', 4], ['Fx', 4], ['Gbb', 4], ['Gb', 4], ['GN', 4], ['G#', 4], ['Gx', 4], ['Abb', 4], ['Ab', 4], ['AN', 4], ['A#', 4], ['Ax', 4], ['Bbb', 4], ['Bb', 4], ['BN', 4], ['B#', 4], ['Bx', 4], ['Cbb', 5], ['Cb', 5], ['CN', 5], ['C#', 5], ['Cx', 5], ['Dbb', 5], ['Db', 5], ['DN', 5], ['D#', 5], ['Dx', 5], ['Ebb', 5], ['Eb', 5], ['EN', 5], ['E#', 5], ['Ex', 5], ['Fbb', 5], ['Fb', 5], ['FN', 5], ['F#', 5], ['Fx', 5], ['Gbb', 5], ['Gb', 5], ['GN', 5], ['G#', 5], ['Gx', 5], ['Abb', 5], ['Ab', 5], ['AN', 5], ['A#', 5], ['Ax', 5], ['Bbb', 5], ['Bb', 5], ['BN', 5], ['B#', 5], ['Bx', 5], ['Cbb', 6], ['Cb', 6], ['CN', 6], ['C#', 6], ['Cx', 6], ['Dbb', 6], ['Db', 6], ['DN', 6], ['D#', 6], ['Dx', 6], ['Ebb', 6], ['Eb', 6], ['EN', 6], ['E#', 6], ['Ex', 6], ['Fbb', 6], ['Fb', 6], ['FN', 6], ['F#', 6], ['Fx', 6], ['Gbb', 6], ['Gb', 6], ['GN', 6], ['G#', 6], ['Gx', 6], ['Abb', 6], ['Ab', 6], ['AN', 6], ['A#', 6], ['Ax', 6], ['Bbb', 6], ['Bb', 6], ['BN', 6], ['B#', 6], ['Bx', 6], ['Cbb', 7], ['Cb', 7], ['CN', 7], ['C#', 7], ['Cx', 7], ['Dbb', 7], ['Db', 7], ['DN', 7], ['D#', 7], ['Dx', 7], ['Ebb', 7], ['Eb', 7], ['EN', 7], ['E#', 7], ['Ex', 7], ['Fbb', 7], ['Fb', 7], ['FN', 7], ['F#', 7], ['Fx', 7], ['Gbb', 7], ['Gb', 7], ['GN', 7], ['G#', 7], ['Gx', 7], ['Abb', 7], ['Ab', 7], ['AN', 7], ['A#', 7], ['Ax', 7], ['Bbb', 7], ['Bb', 7], ['BN', 7], ['B#', 7], ['Bx', 7], ['Cbb', 8], ['Cb', 8], ['CN', 8], ['C#', 8], ['Cx', 8], ['Dbb', 8], ['Db', 8], ['DN', 8], ['D#', 8], ['Dx', 8], ['Ebb', 8], ['Eb', 8], ['EN', 8], ['E#', 8], ['Ex', 8], ['Fbb', 8], ['Fb', 8], ['FN', 8], ['F#', 8], ['Fx', 8], ['Gbb', 8], ['Gb', 8], ['GN', 8], ['G#', 8], ['Gx', 8], ['Abb', 8], ['Ab', 8], ['AN', 8], ['A#', 8], ['Ax', 8], ['Bbb', 8], ['Bb', 8], ['BN', 8], ['B#', 8], ['Bx', 8]]


// console.log(notesByRange);

//add ABCJS notation to notesByRange

notesByRange.forEach(function (note) {
    //octaves
    if (note[1] <= 4) { note.push(note[0][0]) } else { note.push(note[0][0].toLowerCase()) }

    if (note[1] <= 3) { note[2] = note[2] + ',' }
    if (note[1] <= 2) { note[2] = note[2] + ',' }
    if (note[1] <= 1) { note[2] = note[2] + ',' }
    if (note[1] <= 0) { note[2] = note[2] + ',' }
    if (note[1] >= 6) { note[2] = note[2] + "'" }
    if (note[1] >= 7) { note[2] = note[2] + "'" }
    if (note[1] >= 8) { note[2] = note[2] + "'" }

    //accidentals
    if (note[0][1] == 'b' && note[0][2] == 'b') { note[2] = '__' + note[2] }
    if (note[0][1] == 'b' && note[0][2] !== 'b') { note[2] = '_' + note[2] }
    if (note[0][1] == '#') { note[2] = '^' + note[2] }
    if (note[0][1] == 'x') { note[2] = '^^' + note[2] }

})
// console.log(notesByRange);

const noteClass = ['F', 'C', 'G', 'D', 'A', 'E', 'B',]

// console.log(noteClass)

const accidentls = ['bb', 'b', 'N', '#', 'x']
// CircleOfFifths
const cof = []
// counter 0-6 of noteclass
for (let i = 0; i < noteClass.length; i++) {
    cof.push(noteClass[i] + accidentls[0])
};

for (let i = 0; i < noteClass.length; i++) {
    cof.push(noteClass[i] + accidentls[1])
};

for (let i = 0; i < noteClass.length; i++) {
    cof.push(noteClass[i] + accidentls[2])
};
for (let i = 0; i < noteClass.length; i++) {
    cof.push(noteClass[i] + accidentls[3])
};
for (let i = 0; i < noteClass.length; i++) {
    cof.push(noteClass[i] + accidentls[4])
};
// console.log(accidentls)
// console.log(cof)



let currentScale = []
//scale or chord DATABASE - movements from tonic on the circle of fifths

//add more scales and chords here...
const scales = new Map()
scales
    .set('majorScale', [0, 2, 4, -1, 1, 3, 5])
    .set('minorScale', [0, 2, -3, -1, 1, -4, -2])
    .set('minorPentatonicScale', [0, -3, -1, 1, -2])
    .set('majorPentatonicScale', [0, 2, 4, 1, 3])
    .set('harmonicMinor', [0, 2, -3, -1, 1, -4, 5])
    .set('melodicMinorScale', [0, 2, -3, -1, 1, 3, 5])
    .set('augChord', [0, 4, 8])
    .set('majorChord', [0, 4, 1])
    .set('minorChord', [0, -3, 1])
    .set('dimChord', [0, -3, 6])
    .set('sus4Chord', [0, -1, 1])
    .set('sus2Chord', [0, 2, 1])
    .set('major7Chord', [0, 4, 1, 5])
    .set('7Chord', [0, 4, 1, -2])
    .set('minor7Chord', [0, -3, 1, -2])
    .set('m7b5', [0, -3, -6, -2])
    .set('dim7Chord', [0, -3, 6, 3])
    .set('custom', [0])
    .set('Ionian', [0, 2, 4, -1, 1, 3, 5])
    .set('Dorian', [0, 2, -3, -1, 1, 3, -2])
    .set('Phrygian', [0, -5, -3, -1, 1, -4, -2])
    .set('Lydian', [0, 2, 4, 6, 1, 3, 5])
    .set('Mixolydian', [0, 2, 4, -1, 1, 3, -2])
    .set('Aeolian', [0, 2, -3, -1, 1, -4, -2])
    .set('Locrian', [0, -5, -3, -1, -6, -4, -2])
    .set('Lydb7', [0, 2, 4, 6, 1, 3, -2])
    .set('H-P5↓', [0, -5, 4, -1, 1, -4, -2])
    .set('AugLyd', [0, 2, 4, 6, 8, 3, 5])
    .set('Alterd', [0, -5, 9, 4, 6, -4, -2])
    .set('Blues', [0, -3, -1, 6, 1, -2])
    .set('MajBlues', [0, 2, -3, 4, 1, 3])
    .set('WholeTone', [0, 2, 4, 6, 8, -2])
    .set('SymDim', [0, -5, -3, 4, 6, 1, 3, -2])
    .set('SymAug', [0, -3, 4, 1, 8, 5])
    .set('minorMaj7Chord', [0, -3, 1, 5])
    .set('augmented7Chord', [0, 4, 8, -2])
    .set('augmentedMaj7Chord', [0, 4, 8, 5])
    .set('7sus4Chord', [0, -1, 1, -2])


// console.log(scales);

//test pattern

// const diatonicTriadsPattern = [2, 2, -3]


// function octaves() { if (currentNoteIndexFromCSWR + 8 <= currentScaleWithRange.length - 1) { [1, 1, 1, 1, 1, 1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1] } else { [1, 1, 1, 1, 1, 1, 1] } }

const patterns = new Map()
patterns
    .set('default', [1])
    .set('3rds', [2, -1])
    // .set('4ths', [3, -2])
    .set('3noteGroup', [1, 1, -1])
    .set('4noteGroup', [1, 1, 1, -2])
// .set('5noteGroup', [1, 1, 1, 1, -3])
// .set('6noteGroup', [1, 1, 1, 1, 1, -4])
// .set('diatonicTriads', [2, 2, -3])
// .set('diatonic7ch', [2, 2, 2, -5])
// .set('octaves', [1, 1, 1, 1, 1, 1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1])
// .set('spider', [2, 1, -2, 1])
// .set('custom', [])



//get (default) value from drop down menus

const meters = new Map()
    .set('1', 'M: \n L:1/4 \n')
    .set('2', 'M:4/4 \n L:1/4 \n')
    .set('3', 'M:4/4 \n L:1/8 \n')
    .set('4', 'M:3/4 \n L:1/4 \n')
    .set('5', 'M:3/4 \n L:1/8 \n')
    .set('6', 'M:6/8 \n L:1/8 \n')

// const clefs = new set(['treble', 'alto', 'tenor', 'bass'])
const clefs = new Map()
clefs
    .set('treble', 142)
    .set('alto', 112)
    .set('tenor', 102)
    .set('bass', 82)

let onKeyDataFromLocalStorage = JSON.parse(window.localStorage.getItem('LocalOnKeyData'));
// if localstorage is empty creat an empty object
let onKeyData = onKeyDataFromLocalStorage ? onKeyDataFromLocalStorage : {};
// console.log(onKeyDataFromLocalStorage);


let selectedTonic = onKeyDataFromLocalStorage?.tonic ?? document.getElementById("tonic").value
//set display of tonic dropdown to match data from local storage
document.getElementById("tonic").value = selectedTonic


let selectedType = onKeyDataFromLocalStorage?.scaleType ?? scales.get((document.getElementById('scaleType').value));

//set display of scale type dropdown to match data from local storage

function getKeyByValue(map, value) {
    for (let [key, val] of map.entries()) {
        if (val.length === value.length && val.every((element, index) => element === value[index])) {
            return key;
        }
    }
    return null; // Value not found in the map
}

const foundKey = getKeyByValue(scales, selectedType);

document.getElementById('scaleType').value = foundKey

let abcString = ''
let abcStringPor = ''
let abcStringForSoundOnly = ''
const statement = document.getElementById('statement');
const generateBTN = document.getElementById('generate');
const stratDownBtn = document.getElementById('startnotedown');
const stratUpBtn = document.getElementById('startnoteup');
const endDownBtn = document.getElementById('endnotedown');
const endUpBtn = document.getElementById('endnoteup');
const settingBTN = document.getElementById('settingsBTN');
const settingsMenu = document.getElementById('settingsMenu');
const editCustomScaleBtn = document.getElementById('editcustomscale');
const gridItem = document.querySelectorAll('.grid-item');
const doneEditCustomScaleBTN = document.getElementById('doneEditCustomScale');
const DoReMiSwitch = document.getElementById('DoReMi');
const tonicMenu = document.getElementById('tonic');
const tonicLowHighSwitch = document.getElementById('lowTon');
const aboutBTN = document.getElementById('about');
const closeInfoBTN = document.getElementById('closeinfo');
const splash = document.querySelector('.splash')
const displyNoteNameSwitch = document.getElementById('NoteNames');
const upgradegBTN = document.getElementById('whitelogo');
const lightSwitch = document.getElementById('lightSwitch');
// const rangeBtns = document.querySelectorAll('.btns')
const keySignatureSwitch = document.getElementById('keySignature');
const tempoUpBtn = document.getElementById('upBtn');
const tempoDnBtn = document.getElementById('dnBtn');
let bpm = onKeyDataFromLocalStorage?.bpm ?? 120;
const speedDisplay = document.getElementById('bpm');
const reversePatternSwitch = document.getElementById('reversePatternSwitch');
const startDownSwitch = document.getElementById('startDownSwitch');

speedDisplay.innerText = bpm

tonicLowHighSwitch.checked = onKeyDataFromLocalStorage?.tonicLowHighSwitchIsChecked ?? false;
lightSwitch.checked = onKeyDataFromLocalStorage?.darkMode ?? false;
lightSwitch.checked ? lightDarkFunc() : {}
displyNoteNameSwitch.checked = onKeyDataFromLocalStorage?.dispNoteNames ?? false;
// displyNoteNameSwitch.checked ?

//set defult range for treble
let indexDelta = onKeyDataFromLocalStorage?.indexDelta ?? 0
let lowNoteIndex = onKeyDataFromLocalStorage?.lowNoteIndex ?? 142 + indexDelta
let highNoteIndex = onKeyDataFromLocalStorage?.highNoteIndex ?? 197 + indexDelta

let lowestNote = notesByRange[lowNoteIndex]
let highestNote = notesByRange[highNoteIndex]

let Clef = onKeyDataFromLocalStorage?.clef ?? 'treble'
let oldClef = onKeyDataFromLocalStorage?.oldClef ?? []
document.getElementById("clef").value = Clef
DoReMiSwitch.checked = onKeyDataFromLocalStorage?.DoReMiSwitchIsChecked ?? false
let keySignatureType = onKeyDataFromLocalStorage?.keySignatureType ?? '';
let keySignatureName = onKeyDataFromLocalStorage?.keySignatureName ?? 'C';
let showKeySignature = onKeyDataFromLocalStorage?.showKeySignature ?? false;
keySignatureSwitch.checked = showKeySignature;


let shouldStartDown = onKeyDataFromLocalStorage?.shouldStartDown ?? false;
startDownSwitch.checked = shouldStartDown;
let shouldNotReversePattern = onKeyDataFromLocalStorage?.shouldNotReversePattern ?? true;
reversePatternSwitch.checked = shouldNotReversePattern;

let currentRange = ''
let transposition = onKeyDataFromLocalStorage?.transposition ?? document.getElementById('transId').value
let countdownBars = onKeyDataFromLocalStorage?.countdownBars ?? document.getElementById('countdownBarsId').value
let meter = onKeyDataFromLocalStorage?.meter ?? meters.get(document.getElementById('timeSigId').value)
let currentScaleWithRange = []
let currentPattern = onKeyDataFromLocalStorage?.pattern ?? patterns.get((document.getElementById('patternType').value));
// console.log(onKeyDataFromLocalStorage.pattern);

const foundPattern = getKeyByValue(patterns, currentPattern);
// console.log(foundPattern);
document.getElementById('patternType').value = foundPattern

function getMeterByValue(map, value) {
    for (let [key, mapValue] of map.entries()) {
        if (mapValue === value) {
            return key;
        }
    }
    return null; // Value not found in the map
}

document.getElementById('timeSigId').value = getMeterByValue(meters, meter)
document.getElementById('transId').value = transposition
document.getElementById('countdownBarsId').value = countdownBars

let selectedCustomNumbers = []
let reversePattern2 = currentPattern.map(x => (x = x - 2 * x))
let displayNoteNames = false
let selectedSorted
//chane a or an prefix on statement
const changeAan = function (t) {
    if (DoReMiSwitch.checked) { statement.innerHTML = 'I want to practice a' } else
        if (t[0] == 'A' || t[0] == 'E' || t[0] == 'F') {
            statement.innerHTML = 'I want to practice an'
        } else { statement.innerHTML = 'I want to practice a' }
}

const noteNameMap = new Map
noteNameMap
    .set('A', 'La')
    .set('B', 'Ti')
    .set('C', 'Do')
    .set('D', 'Re')
    .set('E', 'Mi')
    .set('F', 'Fa')
    .set('G', 'Sol')

// console.log(noteNameMap);
//add natural sign if needed
function addNatural(arr) {
    // console.log(arr);
    for (let i = 1; i < arr.length; i++) {
        if (
            arr[i][0][1] == 'N' && arr[i - 1][0][1] !== 'N' && arr[i][0][0] == arr[i - 1][0][0] || arr[i][0][1] == 'N' && arr[i - 1][0][1] == '#' && arr[i][0][0] == arr[i - 1][0][0]) {
            arr[i][2] = '=' + arr[i][2]
        }
        if (arr[i][2][0] == '=' && arr[i - 1][0][0] !== arr[i][0][0]) {
            arr[i][2] = arr[i][2].slice(1)
        }
        if (arr[i - 1][0][1] !== 'N' && arr[i][0][1] == 'N' && arr[i - 1][0][0] == arr[i][0][0]) {
            arr[i][2] = '=' + arr[i][2]
        }
    }
}

//generate FN
const generateExBTN = function () {
    // console.log('click', selectedType);

    getNotesOfScale(selectedTonic, selectedType);
    findNotes()
    toggleDoReMiABC(false)
    dispNames(false)
    generate()
}



const checkDownLogic = function () {
    if (lowNoteIndex > 0) {
        if (lowestNote[0][1] === '#') { lowNoteIndex = lowNoteIndex - 1 }
        if (lowestNote[0][1] === 'N' && lowestNote[0][0] !== 'C' && lowestNote[0][0] !== 'F') { lowNoteIndex = lowNoteIndex - 1 }
        if (lowestNote[0][1] === 'b') { lowNoteIndex = lowNoteIndex - 4 }
        if (lowestNote[0] === 'CN' || lowestNote[0] === 'FN') { lowNoteIndex = lowNoteIndex - 5 }


    }
}

const checkUpLogic = function () {
    if (lowNoteIndex <= 315) {
        if (lowestNote[0][1] === 'b' || lowestNote[0][1] === 'N' && lowestNote[0][0] !== 'B' && lowestNote[0][0] !== 'E') { lowNoteIndex = lowNoteIndex + 1 }
        if (lowestNote[0] === 'BN' || lowestNote[0] === 'EN') { lowNoteIndex = lowNoteIndex + 5 }
        if (lowestNote[0][1] === '#') { lowNoteIndex = lowNoteIndex + 4 }
    }
}

const checkDownLogicHi = function () {
    if (highNoteIndex > 0) {
        if (highestNote[0][1] === '#') { highNoteIndex = highNoteIndex - 1 }
        if (highestNote[0][1] === 'N' && highestNote[0][0] !== 'C' && highestNote[0][0] !== 'F') { highNoteIndex = highNoteIndex - 1 }
        if (highestNote[0][1] === 'b') { highNoteIndex = highNoteIndex - 4 }
        if (highestNote[0] === 'CN' || highestNote[0] === 'FN') { highNoteIndex = highNoteIndex - 5 }


    }
}

const checkUpLogicHi = function () {
    if (highNoteIndex <= 315) {
        if (highestNote[0][1] === 'b' || highestNote[0][1] === 'N' && highestNote[0][0] !== 'B' && highestNote[0][0] !== 'E') { highNoteIndex = highNoteIndex + 1 }
        if (highestNote[0] === 'BN' || highestNote[0] === 'EN') { highNoteIndex = highNoteIndex + 5 }
        if (highestNote[0][1] === '#') { highNoteIndex = highNoteIndex + 4 }
    }
}
const displayLowRangePitch = function () {
    lowestNote = notesByRange[lowNoteIndex]
    //show lowest note
    ABCJS.renderAbc('target1', `L: 1/4 \n V:4 \n [K: clef=${Clef}] \n ${lowestNote[2]}`)

    generateExBTN()
}

//a function that saves lowest note index to local storage
function saveLowNoteIdxToLocal() {
    // console.log(lowNoteIndex);
    onKeyData = { ...onKeyData, lowNoteIndex: lowNoteIndex }
    updateLocalStorage()
}

function saveHighNoteIdxToLocal() {
    // console.log(lowNoteIndex);
    onKeyData = { ...onKeyData, highNoteIndex: highNoteIndex }
    updateLocalStorage()
}

stratDownBtn.addEventListener('click', function () {
    checkDownLogic()
    displayLowRangePitch()
})

stratUpBtn.addEventListener('click', function () {
    checkUpLogic()
    displayLowRangePitch()
})

const displayHighRangePitch = function () {
    highestNote = notesByRange[highNoteIndex]

    //show highest note
    ABCJS.renderAbc('target2', `L: 1/4 \n V:4 \n [K: clef=${Clef}] \n${highestNote[2]}`)

    generateExBTN()
}

endDownBtn.addEventListener('click', function () {
    checkDownLogicHi()
    displayHighRangePitch()
    saveHighNoteIdxToLocal()
})

endUpBtn.addEventListener('click', function () {
    checkUpLogicHi()
    displayHighRangePitch()
    saveHighNoteIdxToLocal()
})

//gets value of new tonic from dropdown menu

function updateLocalStorage() { localStorage.setItem("LocalOnKeyData", JSON.stringify(onKeyData)) }

//gets value of new tonic from dropdown menu

const setTonicValue = function () {
    selectedTonic = document.getElementById('tonic').value;
    //write selected value to onkeydata
    onKeyData = { ...onKeyData, tonic: selectedTonic, }

    //save data lo local storage
    updateLocalStorage()

    changeAan(selectedTonic)
    getNotesOfScale(selectedTonic, selectedType);
    findNotes()
    generate()

}




const notAvailableMsg = document.getElementById('notAvailable')

function displayNAmsg() {
    notAvailableMsg.style.display = 'inline-block'
}
//gets value of new scaleType from dropdown menu

function setScaleTypeValue() {
    selectedType = scales.get((document.getElementById('scaleType').value));
    // console.log(`Selected scale or chord is a ${(document.getElementById('scaleType').value)}`);

    //save to locale storage
    //write selected value to onkeydata
    onKeyData = { ...onKeyData, scaleType: selectedType, }

    updateLocalStorage()

    //check if locked
    var scaleType = document.getElementById('scaleType')
    var scaleTypeText = scaleType.options[scaleType.selectedIndex].text
    // console.log(scaleTypeText);
    if (scaleTypeText.includes('🔒')) {
        displayNAmsg()
        // notAvailableMsg.style.display = 'inline-block';
        // alert('this feature is available with OnKey (Pro)')
    } else {


        getNotesOfScale(selectedTonic, selectedType);
        // return selectedType
        findNotes()
        generate()
    }
}

function setPatternValue() {
    //check if locked
    var selectedPattern = document.getElementById('patternType')
    var selectedPatternText = selectedPattern.options[selectedPattern.selectedIndex].text
    // console.log(selectedPatternText);


    if (selectedPatternText.includes('🔒')) {
        displayNAmsg();
        // alert('this feature is available with OnKey (Pro)')
    } else {
        currentPattern = patterns.get((document.getElementById('patternType').value));
        reversePattern2 = currentPattern.map(x => (x = x - 2 * x))
        generateExBTN()
        onKeyData = { ...onKeyData, pattern: currentPattern }
        updateLocalStorage()
    }
}
function getNotesOfScale(tonic = 'CN', scaleType = scales.get('majorScale')) {
    currentScale = []

    //check for tonic's location on COF
    // console.log(cof.indexOf(tonic))

    // findes the notes of the scale(or chord) depending on the starting point at COF and the formula for the scale as defined in scaleType

    for (let i = 0; i < scaleType.length; i++) {

        currentScale.push(cof[cof.indexOf(tonic) + scaleType[i]])


    }
    // console.log(currentScale);
    return currentScale

}



// console.log(clefs.get('bass'));

function changeClef() {
    oldClef[0] = Clef
    Clef = document.getElementById('clef').value
    // console.log(Clef, oldClef[0]);
    indexDelta = clefs.get(Clef) - clefs.get(oldClef[0])
    // console.log(indexDelta, clefs.get(Clef), clefs.get(oldClef[0]));
    lowNoteIndex = lowNoteIndex + indexDelta
    highNoteIndex = highNoteIndex + indexDelta
    lowestNote = notesByRange[lowNoteIndex]
    highestNote = notesByRange[highNoteIndex]
    ABCJS.renderAbc('target1', `L: 1/4 \n V:4 clef=${Clef} \n ${lowestNote[2]}`)
    ABCJS.renderAbc('target2', `L: 1/4 \n V:4 clef=${Clef} \n ${highestNote[2]}`)
    // ABCJS.renderAbc('target4', `L: 1/4 \n V:4 clef=${Clef} \n ${selectedSortedABC.join('')}`);
    // console.log(`L: 1/4 \n clef=${Clef} \n ${lowestNote[2]}`);
    // //show exercise notes
    // ABCJS.renderAbc('target3', `${meter}  \n clef=${Clef} \n ${abcString} |]`)
    // calcNoteChange(Clef, oldClef)
    onKeyData = { ...onKeyData, clef: Clef, indexDelta: indexDelta, lowNoteIndex: lowNoteIndex, highNoteIndex: highNoteIndex }
    updateLocalStorage()

    generateExBTN()

}
// console.log(scaleType);
// console.log();

//1st default sacle - C major
getNotesOfScale();




// console.log(currentScale);


//find notes of scale by range


//show lowest note
ABCJS.renderAbc('target1', `L: 1/4 \n V:4 clef=${Clef} \n ${lowestNote[2]}`)

//show highest note
ABCJS.renderAbc('target2', `L: 1/4 \n V:4 clef=${Clef} \n ${highestNote[2]}`)




//find all notes by range

function findNotes() {
    lowestNote = notesByRange[lowNoteIndex]
    highestNote = notesByRange[highNoteIndex]


    //make it enharmonic range :) 
    let lowNoteIndexEnharmonic
    let highNoteIndexEnharmonic
    if (lowestNote[0][0] === 'C' || lowestNote[0][0] === 'F') { lowNoteIndexEnharmonic = lowNoteIndex - 4 } else { lowNoteIndexEnharmonic = lowNoteIndex - 3 }
    if (highestNote[0][0] === 'B' || highestNote[0][0] === 'E') { highNoteIndexEnharmonic = highNoteIndex + 4 } else { highNoteIndexEnharmonic = highNoteIndex + 3 }


    currentRange = notesByRange.slice(lowNoteIndexEnharmonic, highNoteIndexEnharmonic + 1)

    //fix top range for enharmonic notes higher than it

    switch (highestNote[0]) {
        case 'CN':
        case 'DN':
        case 'FN':
        case 'GN':
        case 'AN':
            currentRange.splice(currentRange.length - 3, 2);
            break;
        case 'C#':
        case 'D#':
        case 'F#':
        case 'G#':
        case 'A#':
            currentRange.splice(currentRange.length - 3, 1);
            break;
        case 'Db':
        case 'Ab':
            currentRange.splice(currentRange.length - 6, 1);
            currentRange.splice(currentRange.length - 3, 3);
            break;
        case 'EN':
        case 'BN':
            currentRange.splice(currentRange.length - 4, 2);
            break;
        case 'Bb':
        case 'Eb':
            currentRange.splice(currentRange.length - 7, 1);
            currentRange.splice(currentRange.length - 4, 3);
    }

    switch (lowestNote[0]) {
        case 'CN':
            currentRange.splice(1, 3);
            break;
        case 'C#':
        case 'F#':
            currentRange.splice(6, 1);
            currentRange.splice(1, 3);
            break;
        case 'Db':
        case 'Ab':
            currentRange.splice(7, 1);
            currentRange.splice(2, 1);
            break;
        case 'DN':
        case 'GN':
        case 'AN':
            currentRange.splice(1, 2);
            break;
        case 'D#':
        case 'G#':
        case 'A#':
            currentRange.splice(5, 1);
            currentRange.splice(0, 3);
            break;
        case 'Eb':
        case 'Bb':
            currentRange.splice(2, 1);
            break;
        case 'EN':
        case 'BN':
            currentRange.splice(6, 1);
            currentRange.splice(1, 2);
            break;
        case 'FN':
            currentRange.splice(2, 2);
            break;
    }

    //filter only notes that are in the scale



    let currentScaleSet = new Set(currentScale)

    // console.log(currentScaleSet);
    // console.log(lowestNote, highestNote);
    // console.log(currentScaleSet);

    currentScaleWithRange = []
    currentRange.forEach(function (note) {

        if (currentScaleSet.has(note[0])) { currentScaleWithRange.push(note) }


    })

    // console.log(currentScaleWithRange);
}



// let genrateCall = 0
function generate() {
    // genrateCall++
    // console.log('generate call', genrateCall);
    //find lowest tonic in range

    let tonic = currentScale[0]
    // if (isSymmetric) { tonic = firstNoteForSymmetricalScale }
    // console.log(tonic);


    const lowestTonic = currentScaleWithRange.find(element => element[0] === tonic)

    // console.log(lowestTonic);


    const lowestTonicIndex = currentScaleWithRange.findIndex(element => element[0] === tonic)

    // console.log(lowestTonicIndex);

    //find all index of tonics in range

    const IndexofTonics = []
    for (let i = 0; i < currentScaleWithRange.length; i++) {
        if (currentScaleWithRange[i][0] === tonic) {
            IndexofTonics.push(i)
        }
    }

    // console.log(IndexofTonics);

    //how many tonics in range?
    // const numberOfTonicsInRange = IndexofTonics.length




    //shows second tonic unless there is only one, than shows 1st tonic
    // console.log(numberOfTonicsInRange);
    const secondTonicinRange = currentScaleWithRange[IndexofTonics[1]] ?? currentScaleWithRange[IndexofTonics[0]]
    const firstTonicinRange = currentScaleWithRange[IndexofTonics[0]]

    // console.log(secondTonicinRange);

    ///build final exercise with pattern, using lowest tonic


    //check if pattern is possible within range


    let curSum = 0;
    let max = 0;
    let min = 0;

    // maybe put this into a function ? ...

    for (let i = 0; i < currentPattern.length; i++) {
        ;
        curSum = curSum + currentPattern[i];
        // console.log(curSum);
        if (curSum < min) { min = curSum };
        if (curSum > max) { max = curSum };
    }


    // console.log('pattern:', currentPattern, 'sum', curSum, 'min', min, 'max', max);
    //making the same pattern going down (not reversing the pattern)

    // console.log(samePatternGoingDown);
    // this is how many moves lower from current position we can go, and how many up.

    // console.log(min, max);
    let startNote = '';
    let startNoteIndex = 0;
    // first note of exercise - currently lowest tonic
    if (firstTonicinRange) {
        startNote = firstTonicinRange
        if (tonicLowHighSwitch.checked) { startNote = secondTonicinRange } else { startNote = firstTonicinRange };
        startNoteIndex = lowestTonicIndex;
    } else {
        startNote = currentScaleWithRange[0];
        ;
    }
    const exercise = [startNote];



    let currentNoteIndexFromCSWR = currentScaleWithRange.findIndex(element => element === exercise[exercise.length - 1]);
    // console.log(currentNoteIndexFromCSWR);



    const samePatternGoingDown = [...currentPattern.slice(0, -1), -(max + curSum)];

    const canFitRegular = canExecutePattern(currentPattern);
    const canFitSamePatternGoingDown = canExecutePattern(samePatternGoingDown, currentScaleWithRange.length - 1 - max);

    // console.log('can fit regular:', canFitRegular, 'can fit with same pattern going down:', canFitSamePatternGoingDown);



    if (
        shouldNotReversePattern &&
        document.getElementById('patternType').value !== 'octaves' &&
        document.getElementById('patternType').value !== 'default' &&
        canFitSamePatternGoingDown
    ) {
        shouldStartDown ? startDownSamePatternGoingDown() : startUpSamePatternGoingDown();
    } else if (canFitRegular) { shouldStartDown ? startDown() : startUp(); } else {

    }


    function startUp() {
        //check if possible to move through whole pattern

        if (startNoteIndex + min >= 0 && startNoteIndex + max <= currentScaleWithRange.length - 1) {
            //move through pattern

            if (document.getElementById('patternType').value !== 'octaves') {
                //while can move up
                while (currentNoteIndexFromCSWR + max <= currentScaleWithRange.length - 1) {
                    currentPattern.forEach(function (move) {
                        currentNoteIndexFromCSWR = currentNoteIndexFromCSWR + move;
                        exercise.push(currentScaleWithRange[currentNoteIndexFromCSWR])
                    })
                }
            } else {
                //if octaves going up
                while (currentNoteIndexFromCSWR + max < currentScaleWithRange.length - 1) {
                    currentPattern.forEach(function (move) {
                        currentNoteIndexFromCSWR = currentNoteIndexFromCSWR + move;
                        exercise.push(currentScaleWithRange[currentNoteIndexFromCSWR])
                    })
                }


            }
            if (document.getElementById('patternType').value == 'octaves' && currentNoteIndexFromCSWR + 8 == currentScaleWithRange.length - 1) {
                [1, 1, 1, 1, 1, 1, 1, 1, -1, -1, -1, -1, -1, -1, -1, -1].forEach(function (move) {
                    currentNoteIndexFromCSWR = currentNoteIndexFromCSWR + move;
                    exercise.push(currentScaleWithRange[currentNoteIndexFromCSWR])
                })

            }

            if (document.getElementById('patternType').value == 'octaves' && currentNoteIndexFromCSWR + 7 == currentScaleWithRange.length - 1) {
                [1, 1, 1, 1, 1, 1, 1, -1, -1, -1, -1, -1, -1, -1, -1, -1].forEach(function (move) {
                    currentNoteIndexFromCSWR = currentNoteIndexFromCSWR + move;
                    exercise.push(currentScaleWithRange[currentNoteIndexFromCSWR])
                })

            }


            curSum = 0;
            let maxRev = 0;
            let minRev = 0;

            // maybe put this into a function ? ...


            for (let i = 0; i < reversePattern2.length - 1; i++) {

                curSum = curSum + reversePattern2[i];
                // consoleRev.log(cuRevrSum);
                if (curSum < minRev) { minRev = curSum };
                if (curSum > maxRev) { maxRev = curSum };
            }

            // console.log(reversePattern2, minRev, maxRev);
            // console.log(downPattern);
            //while can go down

            if (document.getElementById('patternType').value !== 'octaves') {
                exercise.pop()
                exercise.push(currentScaleWithRange[currentScaleWithRange.length - 1])
                currentNoteIndexFromCSWR = currentScaleWithRange.length - 1


                while (currentNoteIndexFromCSWR + minRev >= 0) {
                    reversePattern2.forEach(function (move) {
                        currentNoteIndexFromCSWR = currentNoteIndexFromCSWR + move;
                        exercise.push(currentScaleWithRange[currentNoteIndexFromCSWR])
                    })
                }
            }

            while (document.getElementById('patternType').value == 'octaves' && currentNoteIndexFromCSWR > 1) {

                [1, 1, 1, 1, 1, 1, 1, -1, -1, -1, -1, -1, -1, -1, -1, -1].forEach(function (move) {
                    currentNoteIndexFromCSWR = currentNoteIndexFromCSWR + move;
                    exercise.push(currentScaleWithRange[currentNoteIndexFromCSWR])
                })

            }
            if (document.getElementById('patternType').value == 'octaves' && currentNoteIndexFromCSWR == 1) {
                [1, 1, 1, 1, 1, 1, 1, -1, -1, -1, -1, -1, -1, -1, -1, +1].forEach(function (move) {
                    currentNoteIndexFromCSWR = currentNoteIndexFromCSWR + move;
                    exercise.push(currentScaleWithRange[currentNoteIndexFromCSWR])
                })

            }
            // console.log(currentPattern.length, currentPattern[0]);


            if (document.getElementById('patternType').value == 'octaves') {
                //if current note == start note => stop
                //if not - continue till it is
                while (currentScaleWithRange[currentNoteIndexFromCSWR] !== startNote) {
                    [1, 1, 1, 1, 1, 1, 1, 1, -1, -1, -1, -1, -1, -1, -1, +1].forEach(function (move) {
                        currentNoteIndexFromCSWR = currentNoteIndexFromCSWR + move;
                        exercise.push(currentScaleWithRange[currentNoteIndexFromCSWR])
                    })
                }
            } else {
                exercise.pop()

                // console.log((document.getElementById('patternType').value));
                //check if lowest note == start note
                if (exercise[exercise.length - 1] !== currentScaleWithRange[0]) { exercise.push(currentScaleWithRange[0]) }
                if (currentScaleWithRange[0] !== startNote) {
                    exercise.push(currentScaleWithRange[0])
                    if (document.getElementById('patternType').value == 'default' || document.getElementById('patternType').value == 'octaves') {
                        exercise.pop()
                    }

                    //go back up till current note == start note

                    currentNoteIndexFromCSWR = 0
                    while (currentNoteIndexFromCSWR + max <= currentScaleWithRange.length - 1 && exercise[exercise.length - 1] != startNote) {
                        currentPattern.forEach(function (move) {
                            currentNoteIndexFromCSWR = currentNoteIndexFromCSWR + move;
                            exercise.push(currentScaleWithRange[currentNoteIndexFromCSWR])
                        })

                    }

                    if (startNote === currentScaleWithRange[currentScaleWithRange.length - 1] && document.getElementById('patternType').value !== 'default') { exercise.pop() }
                }
            }
            //implement repeat if tonic is NOT met...

            // console.log(exercise);







        } else {
            startDown();
        }
    };

    // startUp();

    function startDown() {
        let curSum = 0;
        let maxRev = 0;
        let minRev = 0;

        // maybe put this into a function ? ...

        for (let i = 0; i < reversePattern2.length - 1; i++) {

            curSum = curSum + reversePattern2[i];
            // consoleRev.log(cuRevrSum);
            if (curSum < minRev) { minRev = curSum };
            if (curSum > maxRev) { maxRev = curSum };
        }

        if (startNoteIndex + minRev < 0 && document.getElementById('patternType').value !== 'octaves') {
            startUp()
            return
        }
        //while can go down
        // console.log(curSum, minRev, maxRev);
        // console.log(startNoteIndex);

        if (document.getElementById('patternType').value !== 'octaves') {


            while (currentNoteIndexFromCSWR + minRev >= 0) {
                reversePattern2.forEach(function (move) {
                    currentNoteIndexFromCSWR = currentNoteIndexFromCSWR + move;
                    exercise.push(currentScaleWithRange[currentNoteIndexFromCSWR])
                })
            }
        }

        while (document.getElementById('patternType').value == 'octaves' && currentNoteIndexFromCSWR > 1) {

            [1, 1, 1, 1, 1, 1, 1, -1, -1, -1, -1, -1, -1, -1, -1, -1].forEach(function (move) {
                currentNoteIndexFromCSWR = currentNoteIndexFromCSWR + move;
                exercise.push(currentScaleWithRange[currentNoteIndexFromCSWR])
            })

        }
        if (document.getElementById('patternType').value == 'octaves' && currentNoteIndexFromCSWR == 1) {
            [1, 1, 1, 1, 1, 1, 1, -1, -1, -1, -1, -1, -1, -1, -1, +1].forEach(function (move) {
                currentNoteIndexFromCSWR = currentNoteIndexFromCSWR + move;
                exercise.push(currentScaleWithRange[currentNoteIndexFromCSWR])
            })

        }
        // console.log(currentPattern.length, currentPattern[0]);


        if (document.getElementById('patternType').value == 'octaves') {
            //if current note == start note => stop
            //if not - continue till it is
            // while (currentScaleWithRange[currentNoteIndexFromCSWR] !== startNote) {
            //     [1, 1, 1, 1, 1, 1, 1, 1, -1, -1, -1, -1, -1, -1, -1, +1].forEach(function (move) {
            //         currentNoteIndexFromCSWR = currentNoteIndexFromCSWR + move;
            //         exercise.push(currentScaleWithRange[currentNoteIndexFromCSWR])
            //     })
            // }
        } else {
            exercise.pop()

            // console.log((document.getElementById('patternType').value));
            //check if lowest note == start note
            if (exercise[exercise.length - 1] !== currentScaleWithRange[0]) { exercise.push(currentScaleWithRange[0]) }
            if (currentScaleWithRange[0] !== startNote) {
                exercise.push(currentScaleWithRange[0])
                if (document.getElementById('patternType').value == 'default' || document.getElementById('patternType').value == 'octaves') {
                    exercise.pop()
                }
            }
        }

        //go up
        currentNoteIndexFromCSWR = 0


        if (document.getElementById('patternType').value !== 'octaves') {
            //while can move up
            while (currentNoteIndexFromCSWR + max <= currentScaleWithRange.length - 1) {
                currentPattern.forEach(function (move) {
                    currentNoteIndexFromCSWR = currentNoteIndexFromCSWR + move;
                    exercise.push(currentScaleWithRange[currentNoteIndexFromCSWR])
                })
            }
            //remove last note
            exercise.pop();
            //add top range note
            currentNoteIndexFromCSWR = currentScaleWithRange.length - 1

            exercise.push(currentScaleWithRange[currentNoteIndexFromCSWR])
        } else {
            //if octaves going up   <--- HERE IS A PROBLEM TO FIX
            // console.log(max);
            while (currentNoteIndexFromCSWR + 8 < currentScaleWithRange.length - 1) {
                currentPattern.forEach(function (move) {
                    currentNoteIndexFromCSWR = currentNoteIndexFromCSWR + move;
                    exercise.push(currentScaleWithRange[currentNoteIndexFromCSWR])
                })
            }


        }
        if (document.getElementById('patternType').value == 'octaves' && currentNoteIndexFromCSWR + 8 == currentScaleWithRange.length - 1) {

            [1, 1, 1, 1, 1, 1, 1, 1, -1, -1, -1, -1, -1, -1, -1, -1].forEach(function (move) {
                currentNoteIndexFromCSWR = currentNoteIndexFromCSWR + move;
                exercise.push(currentScaleWithRange[currentNoteIndexFromCSWR])
            })

        }

        if (document.getElementById('patternType').value == 'octaves' && currentNoteIndexFromCSWR + 7 == currentScaleWithRange.length - 1) {
            // console.log('here');
            [1, 1, 1, 1, 1, 1, 1, -1, -1, -1, -1, -1, -1, -1, -1, -1].forEach(function (move) {
                currentNoteIndexFromCSWR = currentNoteIndexFromCSWR + move;
                exercise.push(currentScaleWithRange[currentNoteIndexFromCSWR])
            })

        }


        //go down till startNote

        // while (exercise[exercise.length - 1] != startNote) {

        curSum = 0;
        maxRev = 0;
        minRev = 0;

        // maybe put this into a function ? ...

        for (let i = 0; i < reversePattern2.length - 1; i++) {

            curSum = curSum + reversePattern2[i];
            // consoleRev.log(cuRevrSum);
            if (curSum < minRev) { minRev = curSum };
            if (curSum > maxRev) { maxRev = curSum };
        }

        //while can go down

        if (document.getElementById('patternType').value !== 'octaves') {


            while (currentNoteIndexFromCSWR + minRev >= 0 && exercise[exercise.length - 1] != startNote) {
                reversePattern2.forEach(function (move) {
                    currentNoteIndexFromCSWR = currentNoteIndexFromCSWR + move;
                    exercise.push(currentScaleWithRange[currentNoteIndexFromCSWR])
                })
            }
        }

        while (document.getElementById('patternType').value == 'octaves' && exercise[exercise.length - 1] != startNote) {

            [1, 1, 1, 1, 1, 1, 1, -1, -1, -1, -1, -1, -1, -1, -1, -1].forEach(function (move) {
                currentNoteIndexFromCSWR = currentNoteIndexFromCSWR + move;
                exercise.push(currentScaleWithRange[currentNoteIndexFromCSWR])
            })

        }


        if (document.getElementById('patternType').value == 'octaves' && currentNoteIndexFromCSWR == 1) {
            [1, 1, 1, 1, 1, 1, 1, -1, -1, -1, -1, -1, -1, -1, -1, +1].forEach(function (move) {
                currentNoteIndexFromCSWR = currentNoteIndexFromCSWR + move;
                exercise.push(currentScaleWithRange[currentNoteIndexFromCSWR])
            })

        }
        // console.log(currentPattern.length, currentPattern[0]);


        if (document.getElementById('patternType').value == 'octaves') {
            //if current note == start note => stop
            //if not - continue till it is
            while (currentScaleWithRange[currentNoteIndexFromCSWR] !== startNote) {
                [1, 1, 1, 1, 1, 1, 1, 1, -1, -1, -1, -1, -1, -1, -1, +1].forEach(function (move) {
                    currentNoteIndexFromCSWR = currentNoteIndexFromCSWR + move;
                    exercise.push(currentScaleWithRange[currentNoteIndexFromCSWR])
                })
            }
        }
    }

    function canExecutePattern(pattern, start = startNoteIndex, top = currentScaleWithRange.length - 1, bottom = 0) {
        let pos = start;

        for (const step of pattern) {
            pos += step;
            if (pos > top || pos < bottom) return false; // overflow detected
        }
        return true; // every step stayed inside the range
    }

    function startUpSamePatternGoingDown() {
        //check if possible to move through whole pattern
        // console.log(currentPattern);

        if (startNoteIndex + min >= 0 && startNoteIndex + max <= currentScaleWithRange.length - 1) {
            //move through pattern


            //while can move up
            while (currentNoteIndexFromCSWR + max <= currentScaleWithRange.length - 1) {
                currentPattern.forEach(function (move) {
                    currentNoteIndexFromCSWR = currentNoteIndexFromCSWR + move;
                    exercise.push(currentScaleWithRange[currentNoteIndexFromCSWR])
                })
            }
        } else {
            startDownSamePatternGoingDown();
            return
        }

        //finished going up
        //remove last note
        exercise.pop();
        // console.log('curSum:', curSum, 'min:', min, 'max:', max)
        //add first note of down pattern
        // it's -2 ant not -1 so that wont repeat the last iteration twice
        currentNoteIndexFromCSWR = currentScaleWithRange.length - 2 - max

        exercise.push(currentScaleWithRange[currentNoteIndexFromCSWR]);

        //go down
        // console.log(currentNoteIndexFromCSWR);
        // console.log(currentScaleWithRange);
        // console.log(samePatternGoingDown);


        while (currentNoteIndexFromCSWR > 0) {
            samePatternGoingDown.forEach(function (move) {
                currentNoteIndexFromCSWR = currentNoteIndexFromCSWR + move;
                exercise.push(currentScaleWithRange[currentNoteIndexFromCSWR])
            })
        }

        //go back up to start

        //go back up till current note == start note

        currentNoteIndexFromCSWR = 0
        while (currentNoteIndexFromCSWR + max <= currentScaleWithRange.length - 1 && exercise[exercise.length - 1] != startNote) {
            currentPattern.forEach(function (move) {
                currentNoteIndexFromCSWR = currentNoteIndexFromCSWR + move;
                exercise.push(currentScaleWithRange[currentNoteIndexFromCSWR])
            })

        }
    }
    function startDownSamePatternGoingDown() {


        // console.log(canExecutePattern(samePatternGoingDown));



        //if cannot go down - go up
        if (!canExecutePattern(samePatternGoingDown)) {
            startUpSamePatternGoingDown();
            return
        }

        //if can go down
        while (currentNoteIndexFromCSWR > 0) {
            samePatternGoingDown.forEach(function (move) {
                currentNoteIndexFromCSWR = currentNoteIndexFromCSWR + move;
                exercise.push(currentScaleWithRange[currentNoteIndexFromCSWR])
            })
        }

        //go up till top of range
        //while can move up
        while (currentNoteIndexFromCSWR + max <= currentScaleWithRange.length - 1) {
            currentPattern.forEach(function (move) {
                currentNoteIndexFromCSWR = currentNoteIndexFromCSWR + move;
                exercise.push(currentScaleWithRange[currentNoteIndexFromCSWR])
            })
        }

        //finished going up
        //remove last note
        exercise.pop();
        //add first note of down pattern
        // it's -2 ant not -1 so that wont repeat the last iteration twice
        currentNoteIndexFromCSWR = currentScaleWithRange.length - 2 - max

        exercise.push(currentScaleWithRange[currentNoteIndexFromCSWR]);

        //go down till returning to start note

        while (currentNoteIndexFromCSWR > startNoteIndex) {
            samePatternGoingDown.forEach(function (move) {
                currentNoteIndexFromCSWR = currentNoteIndexFromCSWR + move;
                exercise.push(currentScaleWithRange[currentNoteIndexFromCSWR])
            })
        }

        //safecheck - might be domething else if top note in range === to note in exercise
        if (exercise[exercise.length - 1] !== exercise[0]) { exercise[exercise.length - 1] = exercise[0] }
    }


    // console.log((document.getElementById('scaleType').value));

    addNatural(exercise)

    // console.log(exercise);

    //last element of ex
    // console.log(exercise[exercise.length - 1]);

    // console.log(currentNoteIndexFromCSWR + max <= currentScaleWithRange.length);
    // console.log(currentNoteIndexFromCSWR);
    // console.log(currentPattern);

    //get ABC string from execise

    let abcArr = exercise.map(function (note) {

        return note[2]
    })

    //testing for adding note names ♭ ♯
    const abcArrWithNoteNames = exercise.map(function (note) {
        //for ABC notation
        if (!DoReMiSwitch.checked) {
            if (note[0][2] === 'b') { return [`"^${note[0][0]}♭♭"`, note[2]] }
            if (note[0][1] === 'b') { return [`"^${note[0][0]}♭"`, note[2]] }
            if (note[0][1] === 'N') { return [`"^${note[0][0]}"`, note[2]] }
            if (note[0][1] === '#') { return [`"^${note[0][0]}♯"`, note[2]] }
            if (note[0][1] === 'x') { return [`"^${note[0][0]}x"`, note[2]] }

        }
        //for DoReMi notation
        else {
            if (note[0][2] === 'b') { return [`"^${noteNameMap.get(note[0][0])}♭♭"`, note[2]] }
            if (note[0][1] === 'b') { return [`"^${noteNameMap.get(note[0][0])}♭"`, note[2]] }
            if (note[0][1] === 'N') { return [`"^${noteNameMap.get(note[0][0])}"`, note[2]] }
            if (note[0][1] === '#') { return [`"^${noteNameMap.get(note[0][0])}♯"`, note[2]] }
            if (note[0][1] === 'x') { return [`"^${noteNameMap.get(note[0][0])}x"`, note[2]] }


        }
    })

    // console.log(abcArr);
    const abcArrForSoundOnly = [...abcArr];
    abcStringForSoundOnly = abcArrForSoundOnly.join('');
    // console.log(abcArrWithNoteNames);
    // console.log(exercise);
    let abcArrPor

    if (!displayNoteNames) { abcArrPor = [...abcArr] } else //display note names 
    {
        abcArrPor = [...abcArrWithNoteNames];
        abcArr = [...abcArrWithNoteNames]
    }
    // console.log(meter);
    function addFermata(arr) {
        arr[arr.length - 1] = '!fermata!' + arr[arr.length - 1];
    }

    function correctLastNoteQartersFourFour(arr) {

        // console.log(  (arr.length ) % 4, arr);
        if ((arr.length) % 4 === 1) {
            arr[arr.length - 1] = arr[arr.length - 1] + '4';
        }
        if ((arr.length) % 4 === 3) {
            arr[arr.length - 1] = arr[arr.length - 1] + '2';
        }
        addFermata(arr);
    }

    function correctLastNoteQartersThreeFour(arr) {

        // console.log(  (arr.length ) % 4, arr);
        if ((arr.length) % 3 === 1) {
            arr[arr.length - 1] = arr[arr.length - 1] + '3';
        }
        if ((arr.length) % 3 === 2) {
            arr[arr.length - 1] = arr[arr.length - 1] + '2';
        }
        addFermata(arr);
    }

    function correctLastNoteEightsFourFour(arr) {
        if ((arr.length) % 8 === 1) {
            arr[arr.length - 1] = arr[arr.length - 1] + '8';
        }
        if ((arr.length) % 8 === 3) {
            arr[arr.length - 1] = arr[arr.length - 1] + '6';
        }
        if ((arr.length) % 8 === 5) {
            arr[arr.length - 1] = arr[arr.length - 1] + '4';
        }
        if ((arr.length) % 8 === 7) {
            arr[arr.length - 1] = arr[arr.length - 1] + '2';
        }
        addFermata(arr);
    }

    function correctLastNoteEightsThreeFour(arr) {
        if ((arr.length) % 6 === 1) {
            arr[arr.length - 1] = arr[arr.length - 1] + '6';
        }
        if ((arr.length) % 6 === 3) {
            arr[arr.length - 1] = arr[arr.length - 1] + '4';
        }
        if ((arr.length) % 6 === 5) {
            arr[arr.length - 1] = arr[arr.length - 1] + '2';
        }
        addFermata(arr);
    }

    function correctLastNoteEightsSixEight(arr) {
        if ((arr.length) % 6 === 1) {
            arr[arr.length - 1] = arr[arr.length - 1] + '6';
            addFermata(arr);
        }
        if ((arr.length) % 6 === 3) {
            arr[arr.length - 1] = arr[arr.length - 1] + '-' + '!fermata!' + arr[arr.length - 1] + '3';
        }
        if ((arr.length) % 6 === 5) {
            arr[arr.length - 1] = arr[arr.length - 1] + '2';
            addFermata(arr);
        }
    }

    //Landcape design
    if (meter === 'M: \n L:1/4 \n') {
        //quarter notes and no time signiture
        for (var itemIndex = 24; itemIndex < abcArr.length; itemIndex += 24) {

            abcArr.splice(itemIndex, 0, '\n');
        }
    }
    if (meter === 'M:4/4 \n L:1/4 \n') {
        //quarter notes and 4/4 time signiture
        //if last note is on 1 or 3

        correctLastNoteQartersFourFour(abcArr);
        for (var itemIndex = 4; itemIndex < abcArr.length; itemIndex += 5) {

            abcArr.splice(itemIndex, 0, '|');
        }
        for (var itemIndex = 25; itemIndex < abcArr.length; itemIndex += 26) {

            abcArr.splice(itemIndex, 0, '\n');
        }


    }

    if (meter === 'M:4/4 \n L:1/8 \n') {
        correctLastNoteEightsFourFour(abcArr);
        for (var itemIndex = 4; itemIndex < abcArr.length; itemIndex += 9) {

            abcArr.splice(itemIndex, 0, ' ');
        }
        for (var itemIndex = 9; itemIndex < abcArr.length; itemIndex += 10) {

            abcArr.splice(itemIndex, 0, '|');
        }
        for (var itemIndex = 30; itemIndex < abcArr.length; itemIndex += 31) {

            abcArr.splice(itemIndex, 0, '\n');
        }

    }

    if (meter === 'M:3/4 \n L:1/4 \n') {
        correctLastNoteQartersThreeFour(abcArr);
        // for (var itemIndex = 4; itemIndex < abcArr.length; itemIndex += 9) {

        //     abcArr.splice(itemIndex, 0, ' ');
        // }
        for (var itemIndex = 3; itemIndex < abcArr.length; itemIndex += 4) {

            abcArr.splice(itemIndex, 0, '|');
        }
        for (var itemIndex = 32; itemIndex < abcArr.length; itemIndex += 33) {

            abcArr.splice(itemIndex, 0, '\n');
        }

    }

    if (meter === 'M:3/4 \n L:1/8 \n') {
        correctLastNoteEightsThreeFour(abcArr);
        for (var itemIndex = 2; itemIndex < abcArr.length; itemIndex += 3) {

            abcArr.splice(itemIndex, 0, ' ');
        }
        for (var itemIndex = 9; itemIndex < abcArr.length; itemIndex += 10) {

            abcArr.splice(itemIndex, 0, '|');
        }
        for (var itemIndex = 40; itemIndex < abcArr.length; itemIndex += 41) {

            abcArr.splice(itemIndex, 0, '\n');
        }

    }

    if (meter === 'M:6/8 \n L:1/8 \n') {
        correctLastNoteEightsSixEight(abcArr);
        for (var itemIndex = 3; itemIndex < abcArr.length; itemIndex += 4) {

            abcArr.splice(itemIndex, 0, ' ');
        }
        for (var itemIndex = 8; itemIndex < abcArr.length; itemIndex += 9) {

            abcArr.splice(itemIndex, 0, '|');
        }
        for (var itemIndex = 36; itemIndex < abcArr.length; itemIndex += 37) {

            abcArr.splice(itemIndex, 0, '\n');
        }

    }

    // console.log(abcArr);
    // console.log(tonic);
    // console.log(scaleType.selectedOptions[0].value);

    //these variables should be later moved up the scope of the function
    const scaleTypesThatCanBeUsedWithMajorKeySignature =
        ['majorScale',
            'Ionian',
            'Mixolydian',
            'Lydian',
            'Lydb7',
            'H-P5↓',
            'AugLyd',
            'majorPentatonicScale',
            'majorChord',
            'augChord',
            'sus4Chord',
            'sus2Chord',
            'major7Chord',
            '7Chord',
            '7sus4Chord',
            'augmented7Chord',
            'augmentedMaj7Chord',
        ];

    const scaleTypesThatCanBeUsedWithMinorKeySignature =
        ['minorScale',
            'harmonicMinor',
            'melodicMinorScale',
            'minorPentatonicScale',
            'minorChord',
            'minor7Chord',
            'm7b5',
            'minorMaj7Chord',
            'Dorian',
            'Phrygian',
            'Aeolian',
            'Locrian',

        ]


    function addKeySignature(arr) {
        if (!showKeySignature) {
            keySignatureName = 'C';
            return
        };  // Use the variable instead of directly checking the switch

        // Determine key signature type
        if (scaleTypesThatCanBeUsedWithMajorKeySignature.includes(scaleType.selectedOptions[0].value)) {
            keySignatureType = 'major';
        } else if (scaleTypesThatCanBeUsedWithMinorKeySignature.includes(scaleType.selectedOptions[0].value)) {
            keySignatureType = 'minor';
        } else {
            keySignatureName = 'C';
            return;
        }

        // Define key signature name
        keySignatureName = (tonic.endsWith('N') ? tonic.slice(0, -1) : tonic) +
            (keySignatureType === 'minor' ? ' minor' : '');

        // console.log(keySignatureName);

        // Handle specific key signatures
        if (keySignatureName === 'C' || keySignatureName === 'A minor'
            || keySignatureName === 'A#' || keySignatureName === 'D#' ||
            keySignatureName === 'B# minor' || keySignatureName === 'G#' ||
            keySignatureName === 'E# minor'
        ) {
            // Natural key signature - no changes needed
            keySignatureName = 'C';
            return;
        }

        // Function to handle flat removal and natural sign addition
        const processKeySignatureFlats = (notesToProcess) => {
            // Process each note in the array
            for (let i = 0; i < arr.length; i++) {
                if (typeof arr[i] === 'string') {
                    // Special handling for the last note
                    if (i === arr.length - 1) {
                        // Extract the note letter regardless of position
                        let noteLetter = '';
                        if (arr[i].includes('!fermata!')) {
                            const match = arr[i].match(/!fermata!_?([A-Ga-g])/);
                            if (match) noteLetter = match[1];
                        } else {
                            const match = arr[i].match(/^_?([A-Ga-g])/);
                            if (match) noteLetter = match[1];
                        }

                        // If this note should be processed
                        if (noteLetter && notesToProcess.includes(noteLetter.toUpperCase())) {
                            // Handle all possible flat positions
                            if (arr[i].includes('!fermata!')) {
                                // Handle flats after fermata
                                if (arr[i].includes('!fermata!_')) {
                                    arr[i] = arr[i].replace('!fermata!_', '!fermata!');
                                }
                                // Handle flats before fermata
                                if (arr[i].startsWith('_')) {
                                    arr[i] = arr[i].slice(1);
                                }
                            } else if (arr[i].startsWith('_')) {
                                arr[i] = arr[i].slice(1);
                            }
                        }
                        continue;
                    }

                    // Handle tied notes
                    if (arr[i].includes('-')) {
                        const parts = arr[i].split('-');
                        // Handle first part of tie
                        const firstNoteMatch = parts[0].match(/([A-Ga-g])([,']*)/);
                        if (parts[0].startsWith('_') && firstNoteMatch && notesToProcess.includes(firstNoteMatch[1].toUpperCase())) {
                            parts[0] = parts[0].slice(1);
                        } else if (/^[A-Ga-g][,']*$/.test(parts[0]) && notesToProcess.includes(parts[0][0].toUpperCase())) {
                            parts[0] = '=' + parts[0];
                        }
                        // Handle second part of tie - just remove flat if needed, no natural sign
                        if (parts[1].startsWith('!fermata!_')) {
                            const match = parts[1].match(/^!fermata!_([A-Ga-g][,']*?)(\d*)$/);
                            if (match && notesToProcess.includes(match[1][0].toUpperCase())) {
                                parts[1] = `!fermata!${match[1]}${match[2]}`;
                            }
                        }
                        arr[i] = parts.join('-');
                    }
                    // Handle regular notes with flat
                    else if (arr[i].startsWith('_')) {
                        const noteMatch = arr[i].match(/([A-Ga-g])([,']*)/);
                        if (noteMatch && notesToProcess.includes(noteMatch[1].toUpperCase())) {
                            arr[i] = arr[i].slice(1);
                        }
                    }
                    // Handle notes with fermata and flat
                    else if (arr[i].startsWith('!fermata!_')) {
                        const match = arr[i].match(/^!fermata!_([A-Ga-g][,']*?)(\d*)$/);
                        if (match && notesToProcess.includes(match[1][0].toUpperCase())) {
                            arr[i] = `!fermata!${match[1]}${match[2]}`;
                        }
                    }
                    // Handle natural notes - add natural sign only for notes in notesToProcess
                    else if (/^[A-Ga-g][,']*$/.test(arr[i])) {
                        if (notesToProcess.includes(arr[i][0].toUpperCase())) {
                            arr[i] = '=' + arr[i];
                        }
                    }
                    // Handle natural notes with fermata - add natural sign only for notes in notesToProcess
                    else if (arr[i].startsWith('!fermata!')) {
                        const noteMatch = arr[i].match(/([A-Ga-g])([,']*)/);
                        if (noteMatch && notesToProcess.includes(noteMatch[1].toUpperCase())) {
                            arr[i] = arr[i].replace('!fermata!', '!fermata!=');
                        }
                    }
                }
            }
        };

        // Function to handle sharp removal and natural sign addition
        const processKeySignatureSharps = (notesToProcess) => {
            // Process each note in the array
            for (let i = 0; i < arr.length; i++) {
                if (typeof arr[i] === 'string') {
                    // Special handling for the last note
                    if (i === arr.length - 1) {
                        // Extract the note letter regardless of position
                        let noteLetter = '';
                        if (arr[i].includes('!fermata!')) {
                            const match = arr[i].match(/!fermata!\^?([A-Ga-g])/);
                            if (match) noteLetter = match[1];
                        } else {
                            const match = arr[i].match(/^\^?([A-Ga-g])/);
                            if (match) noteLetter = match[1];
                        }

                        // If this note should be processed
                        if (noteLetter && notesToProcess.includes(noteLetter.toUpperCase())) {
                            // Handle all possible sharp positions
                            if (arr[i].includes('!fermata!')) {
                                // Handle sharps after fermata
                                if (arr[i].includes('!fermata!^')) {
                                    arr[i] = arr[i].replace('!fermata!^', '!fermata!');
                                }
                                // Handle sharps before fermata
                                if (arr[i].startsWith('^')) {
                                    arr[i] = arr[i].slice(1);
                                }
                            } else if (arr[i].startsWith('^')) {
                                arr[i] = arr[i].slice(1);
                            }
                        }
                        continue;
                    }

                    // Handle tied notes
                    if (arr[i].includes('-')) {
                        const parts = arr[i].split('-');
                        // Handle first part of tie
                        const firstNoteMatch = parts[0].match(/([A-Ga-g])([,']*)/);
                        if (parts[0].startsWith('^') && firstNoteMatch && notesToProcess.includes(firstNoteMatch[1].toUpperCase())) {
                            parts[0] = parts[0].slice(1);
                        } else if (/^[A-Ga-g][,']*$/.test(parts[0]) && notesToProcess.includes(parts[0][0].toUpperCase())) {
                            parts[0] = '=' + parts[0];
                        }
                        // Handle second part of tie - just remove sharp if needed, no natural sign
                        if (parts[1].startsWith('!fermata!^')) {
                            const match = parts[1].match(/^!fermata!\^([A-Ga-g][,']*?)(\d*)$/);
                            if (match && notesToProcess.includes(match[1][0].toUpperCase())) {
                                parts[1] = `!fermata!${match[1]}${match[2]}`;
                            }
                        }
                        arr[i] = parts.join('-');
                    }
                    // Handle regular notes with sharp
                    else if (arr[i].startsWith('^')) {
                        const noteMatch = arr[i].match(/([A-Ga-g])([,']*)/);
                        if (noteMatch && notesToProcess.includes(noteMatch[1].toUpperCase())) {
                            arr[i] = arr[i].slice(1);
                        }
                    }
                    // Handle notes with fermata and sharp
                    else if (arr[i].startsWith('!fermata!^')) {
                        const match = arr[i].match(/^!fermata!\^([A-Ga-g][,']*?)(\d*)$/);
                        if (match && notesToProcess.includes(match[1][0].toUpperCase())) {
                            arr[i] = `!fermata!${match[1]}${match[2]}`;
                        }
                    }
                    // Handle natural notes - add natural sign only for notes in notesToProcess
                    else if (/^[A-Ga-g][,']*$/.test(arr[i])) {
                        if (notesToProcess.includes(arr[i][0].toUpperCase())) {
                            arr[i] = '=' + arr[i];
                        }
                    }
                    // Handle natural notes with fermata - add natural sign only for notes in notesToProcess
                    else if (arr[i].startsWith('!fermata!')) {
                        const noteMatch = arr[i].match(/([A-Ga-g])([,']*)/);
                        if (noteMatch && notesToProcess.includes(noteMatch[1].toUpperCase())) {
                            arr[i] = arr[i].replace('!fermata!', '!fermata!=');
                        }
                    }
                }
            }
        };

        // Call appropriate function based on key signature
        switch (keySignatureName) {
            case 'C#':
            case 'A# minor':
                processKeySignatureSharps(['C', 'D', 'E', 'F', 'G', 'A', 'B']);
                break;
            case 'Db':
            case 'Bb minor':
                processKeySignatureFlats(['D', 'E', 'G', 'A', 'B']);
                break;
            case 'D':
            case 'B minor':
                processKeySignatureSharps(['C', 'F']);
                break;
            case 'Eb':
            case 'C minor':
                processKeySignatureFlats(['B', 'E', 'A']);
                break;
            case 'E':
            case 'C# minor':
                processKeySignatureSharps(['F', 'C', 'G', 'D']);
                break;
            case 'F':
            case 'D minor':
                processKeySignatureFlats(['B']);
                break;
            case 'F#':
            case 'D# minor':
                processKeySignatureSharps(['F', 'C', 'G', 'D', 'A', 'E']);
                break;
            case 'Gb':
            case 'Eb minor':
                processKeySignatureFlats(['D', 'E', 'G', 'A', 'B', 'C']);
                break;
            case 'G':
            case 'E minor':
                processKeySignatureSharps(['F']);
                break;
            case 'Ab':
            case 'F minor':
                processKeySignatureFlats(['B', 'E', 'A', 'D']);
                break;
            case 'A':
            case 'F# minor':
                processKeySignatureSharps(['F', 'C', 'G']);
                break;
            case 'Bb':
            case 'G minor':
                processKeySignatureFlats(['B', 'E']);
                break;
            case 'B':
            case 'G# minor':
                processKeySignatureSharps(['F', 'C', 'G', 'D', 'A']);
                break;
            // No default case needed since we already handle C major/A minor earlier
        }
    }
    addKeySignature(abcArr);
    addKeySignature(abcArrPor);
    abcString = abcArr.join('')

    //show exercise notes for landscape

    //original version:
    // const visualObj = ABCJS.renderAbc('target3', `%%staffwidth 7.2in \n%%printtempo false \n${meter} [K: clef=${Clef}] \nQ:1/4=${bpm} \n%%stretchlast false \n ${abcString} |]`,);
    //version for sound only without key signature:
    ABCJS.renderAbc('target3', `%%staffwidth 7.2in \n%%printtempo false \n${meter} 
        [K:${keySignatureName} clef=${Clef}] \nQ:1/4=${bpm} \n%%stretchlast false \n ${abcString} |]`,);

    // const visualObj = ABCJS.renderAbc('target3', `%%staffwidth 7.2in \n%%printtempo false \n${meter} [K: clef=${Clef}] \nQ:1/4=${bpm} \n%%stretchlast false \n ${abcString} |]`,);
    //version with key signature:
    const visualObj = ABCJS.renderAbc('target6', `%%staffwidth 7.2in \n%%printtempo false \n${meter} 
        [K: C clef=${Clef}] \nQ:1/4=${bpm} \n%%stretchlast false \n ${abcStringForSoundOnly} |]`,);


    //show exercise notes for Portrait
    if (meter === 'M: \n L:1/4 \n') {
        //quarter notes and no time signiture
        for (var itemIndex = 8; itemIndex < abcArrPor.length; itemIndex += 9) {

            abcArrPor.splice(itemIndex, 0, '\n');
        }
    }
    if (meter === 'M:4/4 \n L:1/4 \n') {
        //quarter notes and 4/4 time signiture
        correctLastNoteQartersFourFour(abcArrPor);
        for (var itemIndex = 4; itemIndex < abcArrPor.length; itemIndex += 5) {

            abcArrPor.splice(itemIndex, 0, '|');
        }
        for (var itemIndex = 10; itemIndex < abcArrPor.length; itemIndex += 11) {

            abcArrPor.splice(itemIndex, 0, '\n');
        }

    }

    if (meter === 'M:4/4 \n L:1/8 \n') {
        correctLastNoteEightsFourFour(abcArrPor);
        for (var itemIndex = 4; itemIndex < abcArrPor.length; itemIndex += 9) {

            abcArrPor.splice(itemIndex, 0, ' ');
        }
        for (var itemIndex = 9; itemIndex < abcArrPor.length; itemIndex += 10) {

            abcArrPor.splice(itemIndex, 0, '|');
        }
        for (var itemIndex = 10; itemIndex < abcArrPor.length; itemIndex += 11) {

            abcArrPor.splice(itemIndex, 0, '\n');
        }

    }

    if (meter === 'M:3/4 \n L:1/4 \n') {
        correctLastNoteQartersThreeFour(abcArrPor);
        // for (var itemIndex = 4; itemIndex < abcArrPor.length; itemIndex += 9) {

        //     abcArrPor.splice(itemIndex, 0, ' ');
        // }
        for (var itemIndex = 3; itemIndex < abcArrPor.length; itemIndex += 4) {

            abcArrPor.splice(itemIndex, 0, '|');
        }
        for (var itemIndex = 12; itemIndex < abcArrPor.length; itemIndex += 13) {

            abcArrPor.splice(itemIndex, 0, '\n');
        }

    }

    if (meter === 'M:3/4 \n L:1/8 \n') {
        correctLastNoteEightsThreeFour(abcArrPor);
        for (var itemIndex = 2; itemIndex < abcArrPor.length; itemIndex += 3) {

            abcArrPor.splice(itemIndex, 0, ' ');
        }
        for (var itemIndex = 9; itemIndex < abcArrPor.length; itemIndex += 10) {

            abcArrPor.splice(itemIndex, 0, '|');
        }
        for (var itemIndex = 20; itemIndex < abcArrPor.length; itemIndex += 21) {

            abcArrPor.splice(itemIndex, 0, '\n');
        }

    }

    if (meter === 'M:6/8 \n L:1/8 \n') {
        correctLastNoteEightsSixEight(abcArrPor);
        for (var itemIndex = 3; itemIndex < abcArrPor.length; itemIndex += 4) {

            abcArrPor.splice(itemIndex, 0, ' ');
        }
        for (var itemIndex = 8; itemIndex < abcArrPor.length; itemIndex += 9) {

            abcArrPor.splice(itemIndex, 0, '|');
        }
        for (var itemIndex = 18; itemIndex < abcArrPor.length; itemIndex += 19) {

            abcArrPor.splice(itemIndex, 0, '\n');
        }

    }






    abcStringPor = abcArrPor.join('')
    //original:


    ABCJS.renderAbc('target5', `%%staffwidth 3in \n${meter} [K:${keySignatureName} clef=${Clef}] \n ${abcStringPor} |]`,)


    playSound(visualObj, transposition)
}



generateExBTN()


function changeMeter() {
    meter = meters.get(document.getElementById('timeSigId').value)

    var meterDropdown = document.getElementById('timeSigId');
    var meterText = meterDropdown.options[meterDropdown.selectedIndex].text
    // console.log(meterText);
    if (meterText.includes('🔒')) {
        displayNAmsg()
        // notAvailableMsg.style.display = 'inline-block';
        // alert('this feature is available with OnKey (Pro)')
    } else {
        // console.log(meter);
        generate()
            ;
        onKeyData = { ...onKeyData, meter: meter }
        updateLocalStorage()
    }
}



function changeTransposition() {
    transposition = document.getElementById('transId').value

    generate();

    onKeyData = { ...onKeyData, transposition: transposition }
    // console.log(onKeyData);
    updateLocalStorage()

}

function changeCountdownBars() {
    countdownBars = document.getElementById('countdownBarsId').value

    generate();

    onKeyData = { ...onKeyData, countdownBars: countdownBars }
    updateLocalStorage()
}
//custom scale/chord

//select elements from dom

const gridOrder = ['CN', 'C#', 'Db', 'DN', 'D#', 'Eb', 'EN', 'FN', 'F#', 'Gb', 'GN', 'G#', 'Ab', 'AN', 'A#', 'Bb', 'BN']

let selected = ['CN']
ABCJS.renderAbc('target4', `L: 1/4 \n V:4 clef=${Clef} \n ${selected}`)

for (let i = 0; i < gridItem.length; i++) {


    gridItem[7].isActive = true

    if (i == 7) continue
    // console.log(gridItem[i].innerHTML);
    gridItem[i].addEventListener('click', function (e) {
        //   console.log(e);

        if (gridItem[i].isActive != true) { gridItem[i].isActive = true } else
            if (gridItem[i].isActive == true) { gridItem[i].isActive = false }

        if (gridItem[i].isActive == true) {
            gridItem[i].style.backgroundColor = 'blue'
        } else if (gridItem[i].isActive == false) { gridItem[i].style.backgroundColor = '#003366' }
        //     console.log(gridItem[i].isActive);


        //add selection to "selected" arr
        if (gridItem[i].isActive == true) { selected.push(gridItem[i].innerHTML) }
        // console.log(selected);
        const selectedSet = new Set(selected)
        //remove from set if deselected
        if (gridItem[i].isActive == false && selectedSet.has(gridItem[i].innerHTML)) {
            selectedSet.delete(gridItem[i].innerHTML);
            selected.pop();
        }
        // console.log(selectedSet);

        // let cofMap =
        //     cof.map(function (note) {
        //         if (selectedSet.has(note))
        //             return cof.indexOf(note) - 15
        //     })


        // selectedCustomNumbers = cofMap.filter(function (indexNum) {
        //     if (typeof indexNum === 'number') {
        //         indexNum = indexNum - 15
        //         return indexNum
        //     }
        //     console.log(selectedCustomNumbers, cofMap);
        //     // console.log(cof);
        // })


        selectedSorted = gridOrder.filter(el => selectedSet.has(el)).map(function (note) {
            if (Clef !== 'bass') {
                return [note, 4]
            } else { return [note, 3] }
        })
        // console.log(selected, selectedSet, selectedSorted);

        //add ABCJS notation to selected sorted, copied from line 9

        // add  3 for bass
        let selectedSortedABC = []

        selectedSorted.forEach(function (note) {
            //octaves
            if (note[1] <= 4) { note.push(note[0][0]) } else { note.push(note[0][0].toLowerCase()) }
            if (note[1] <= 3) { note[2] = note[2] + ',' }


            //accidentals

            if (note[0][1] == 'b' && note[0][2] !== 'b') { note[2] = '_' + note[2] }
            if (note[0][1] == '#') { note[2] = '^' + note[2] }


        })


        addNatural(selectedSorted)

        selectedSorted.forEach(function (note) {
            selectedSortedABC.push(note[2])
        })
        // console.log(selectedSortedABC);

        ABCJS.renderAbc('target4', `L: 1/4 \n V:4 clef=${Clef} \n ${selectedSortedABC.join('')}`);
        // console.log(selectedSorted);

        //input to custom scale from options select...
        selectedCustomNumbers = selectedSorted.map(function (el) {
            for (let i = 0; i < cof.length; i++)
                if (el[0] === cof[i]) { return (cof.indexOf(el[0]) - 15) }
        });
        scales.set('custom', selectedCustomNumbers)


        // scales.set('custom', selectedSorted.forEach((note[0])=>(cof.indexOf(note[0]) - 15)))
        // console.log(scales);
    })
    //   console.log(gridItem[i].isActive);

}

//click about button
aboutBTN.addEventListener('click', function () {
    document.getElementById('info').style.display = ''
    document.getElementById('info').scrollIntoView()
    settingsMenu.style.display = 'none'

})

//click 'X' info / about
closeInfoBTN.addEventListener('click', function () {
    document.getElementById('info').style.display = 'none'

})


//click edit custom button
editCustomScaleBtn.addEventListener('click', function () {
    document.querySelector('.card').style.opacity = '1'
    document.querySelector('.card').scrollIntoView()
    settingsMenu.style.display = 'none'

})

//click done button
doneEditCustomScaleBTN.addEventListener('click', function () {
    document.querySelector('.card').style.opacity = '0'
    setScaleTypeValue()
})

// click settings button
settingBTN.addEventListener('click', function () {
    (settingsMenu.style.display === 'none') ? settingsMenu.style.display = 'inline-block' : settingsMenu.style.display = 'none'
})

const closeSettingsBTN = document.getElementById('closeSettings')

closeSettingsBTN.addEventListener('click', function () {
    (settingsMenu.style.display === 'none') ? settingsMenu.style.display = 'inline-block' : settingsMenu.style.display = 'none'
})

//click upgrade button
upgradegBTN.addEventListener('click', function () {
    (upgrademsg.style.display === 'none') ? upgrademsg.style.display = 'inline-block' : upgrademsg.style.display = 'none'
})

const closeUpgradeBTN = document.getElementById('closeUpgrade')

closeUpgradeBTN.addEventListener('click', function () {
    (upgrademsg.style.display === 'none') ? upgrademsg.style.display = 'inline-block' : upgrademsg.style.display = 'none'
})

//close NA msg
const closeNA = document.getElementById('closeNA')
closeNA.addEventListener('click', function () {
    (notAvailableMsg.style.display === 'none') ? notAvailableMsg.style.display = 'inline-block' : notAvailableMsg.style.display = 'none'
})

function toggleDoReMiABC(callGenerate = true) {
    // console.log(DoReMiSwitch.checked);

    onKeyData = { ...onKeyData, DoReMiSwitchIsChecked: DoReMiSwitch.checked }
    updateLocalStorage()

    if (DoReMiSwitch.checked) {
        tonicMenu.innerHTML = ' <option value="CN">Do</option><option value="C#">Do ♯</option><option value="Db">Re ♭</option><option value="DN">Re</option><option value="D#">Re ♯</option><option value="Eb">Mi ♭</option><option value="EN">Mi</option><option value="FN">Fa</option><option value="F#">Fa ♯</option><option value="Gb">Sol ♭</option><option value="GN">Sol</option><option value="G#">Sol ♯</option><option value="Ab">La ♭</option><option value="AN">La</option><option value="A#">La ♯</option><option value="Bb">Ti ♭</option><option value="BN">Ti</option> '
        // changeAan()
        // console.log(tonicMenu.options[tonicMenu.selectedIndex].value);
        tonicMenu.value = selectedTonic
        // console.log(tonicMenu.options[tonicMenu.selectedIndex].value);

    }
    else { tonicMenu.innerHTML = ' <option value="CN">C</option><option value="C#">C♯</option><option value="Db">D♭</option><option value="DN">D</option><option value="D#">D♯</option><option value="Eb">E♭</option><option value="EN">E</option><option value="FN">F</option><option value="F#">F♯</option><option value="Gb">G♭</option><option value="GN">G</option><option value="G#">G♯</option><option value="Ab">A♭</option><option value="AN">A</option><option value="A#">A♯</option><option value="Bb">B♭</option><option value="BN">B</option> ' }
    // console.log(tonicMenu.innerHTML);
    tonicMenu.value = selectedTonic
    if (callGenerate) generate()
    changeAan(selectedTonic)
    // console.log(selectedTonic);
}

DoReMiSwitch.addEventListener('click', () => toggleDoReMiABC());

function dispNames(callGenerate = true) {
    if (displyNoteNameSwitch.checked) { displayNoteNames = true } else { displayNoteNames = false };
    onKeyData = { ...onKeyData, dispNoteNames: displyNoteNameSwitch.checked }
    updateLocalStorage();
    if (callGenerate) generate();
}

displyNoteNameSwitch.addEventListener('click', () => dispNames());


tonicLowHighSwitch.addEventListener('click', function () {
    // console.log('click');
    generate()
    onKeyData = { ...onKeyData, tonicLowHighSwitchIsChecked: tonicLowHighSwitch.checked }
    updateLocalStorage()
})


document.addEventListener('DOMContentLoaded', (e) => {

    setTimeout(() => {
        splash.classList.add('display-none')
    }, 2600);

})
keySignatureSwitch.addEventListener('click', function () {
    showKeySignature = keySignatureSwitch.checked;  // Update the variable
    onKeyData = {
        ...onKeyData,
        showKeySignature: showKeySignature,
        keySignatureType: keySignatureType,
        keySignatureName: keySignatureName
    };
    updateLocalStorage();
    generate();
});


startDownSwitch.addEventListener('click', function () {
    shouldStartDown = startDownSwitch.checked;  // Update the variable
    onKeyData = {
        ...onKeyData,
        shouldStartDown: shouldStartDown,

    };
    updateLocalStorage();
    generate();
});

reversePatternSwitch.addEventListener('click', function () {


    shouldNotReversePattern = reversePatternSwitch.checked;  // Update the variable
    onKeyData = {
        ...onKeyData,
        shouldNotReversePattern: shouldNotReversePattern,

    };
    updateLocalStorage();
    generate();
});

//dark mode

function lightDarkFunc() {
    const body = document.body;
    const scaleDropDn = document.getElementById('scaleType');
    const patternDropDn = document.getElementById('patternType');
    const clefDropDn = document.getElementById('clef');
    // const logo = document.getElementById('logo');
    const printBtn = document.getElementById('printIcn');
    // printBtn.classList.toggle("invert");
    tonicMenu.classList.toggle("dark-mode");
    scaleDropDn.classList.toggle("dark-mode");
    patternDropDn.classList.toggle("dark-mode");
    clefDropDn.classList.toggle("dark-mode");
    // settingBTN.classList.toggle("invert");
    // logo.classList.toggle("invert")
    body.classList.toggle("dark-mode");
    onKeyData = { ...onKeyData, darkMode: lightSwitch.checked }
    updateLocalStorage()
}




const scaleDropDown = document.getElementById('scaleType');


function playSound(visualObj, transposition) {
    var CursorControl = function () {
        this.beatSubdivisions = 2;
        this.onStart = function () {
            // console.log("The tune has started playing.");
        }
        this.onFinished = function () {
            // console.log("The tune has stopped playing.");
        }
        this.onBeat = function (beatNumber) {
            // console.log("Beat " + beatNumber + " is happening.");
        }
        this.onEvent = function (event) {
            // console.log("An event is happening", event);
        }
    }

    var cursorControl = new CursorControl();
    var audioParams = { chordsOff: true, midiTranspose: transposition, defaultQpm: bpm };

    if (ABCJS.synth.supportsAudio()) {
        // Initialize a single synth controller
        var synthControl = new ABCJS.synth.SynthController();
        synthControl.load("#audio",
            cursorControl,
            {
                displayPlay: true,
                displayProgress: true,
                displayWarp: true
            }
        );

        // Get number of beats and beat length for countdown based on time signature
        let numBeats = 4 * countdownBars; // Default to 4/4
        let countdownMeter = 'M:4/4\nL:1/4\n';
        // let beatLength = '4/4';
        let countdownNotes = '';

        if (meter.includes('3/4')) {
            numBeats = 3 * countdownBars;
            for (let i = 0; i < numBeats; i++) {
                countdownNotes += "C";
                if (i < numBeats - 1) countdownNotes += " ";
            }
        } else if (meter.includes('6/8')) {
            numBeats = 2 * countdownBars; // Two dotted quarter notes per measure in 6/8
            countdownMeter = 'M:6/8\nL:1/8\n'; // Set base unit to eighth notes
            // Create two dotted quarter notes (each equals 3 eighth notes)
            countdownNotes = "C3 C3";
        } else {
            // 4/4 time
            for (let i = 0; i < numBeats; i++) {
                countdownNotes += "C";
                if (i < numBeats - 1) countdownNotes += " ";
            }
        }

        // Create a single ABC string with both countdown and main tune
        let combinedAbc = `X:1\n${countdownMeter}[K: clef=${Clef}]\nQ:1/4=${bpm}\nV:1\n%%MIDI program 115\n`;

        // Add countdown with appropriate note lengths
        combinedAbc += countdownNotes;
        combinedAbc += "|\n"; // End countdown measure

        // Add main tune with program change and original meter/length
        combinedAbc += "%%MIDI program 0\n"; // Switch to piano
        combinedAbc += meter; // Reset to original meter and note length
        combinedAbc += abcStringForSoundOnly;

        // Render the combined music (hidden)
        var combinedVisualObj = ABCJS.renderAbc('countdown', combinedAbc, {
            displayWidth: 0,
            add_classes: true
        });

        // Set up the combined tune
        synthControl.setTune(combinedVisualObj[0], false, audioParams).then(function () {
            // console.log("Audio successfully loaded.");
        }).catch(function (error) {
            console.warn("Audio problem:", error);
        });
    } else {
        document.querySelector("#audio").innerHTML =
            "Audio is not supported in this browser.";
    }
}


//wrap display speed


function bpmDn() {
    if (bpm > 5) {
        bpm--
        speedDisplay.innerText = bpm
        onKeyData = { ...onKeyData, bpm: bpm }
        updateLocalStorage()
        //update bpm of playback
        generate()
    }
}

function bpmUp() {
    if (bpm < 300) {
        bpm++
        speedDisplay.innerText = bpm
        onKeyData = { ...onKeyData, bpm: bpm }
        updateLocalStorage()
        //update bpm of playback
        generate()
    }
}


let longPress;
let longPressUp;

const increaseTempoLongPress = function () {
    if (!(bpm < 295)) return
    bpm = Math.round(bpm / 5) * 5
    bpm = bpm + 5
    speedDisplay.innerText = bpm
    onKeyData = { ...onKeyData, bpm: bpm }
    updateLocalStorage()
    //update bpm of playback
    generate()

}

const decreaseTempoLongPress = function () {
    if (!(bpm > 10)) return
    bpm = Math.round(bpm / 5) * 5;
    bpm = bpm - 5
    speedDisplay.innerText = bpm
    onKeyData = { ...onKeyData, bpm: bpm }
    updateLocalStorage()
    //update bpm of playback
    generate()

}

function tempoUp() {
    longPress = setTimeout(

        function () {

            longPressUp = setInterval(
                function () { increaseTempoLongPress() }, 120)
        }
        , 500)
}


function clearTempoUp() {
    clearTimeout(longPress)
    clearInterval(longPressUp)

}

let longPress2;
let longPressDown;

function tempoDown() {

    longPress2 = setTimeout(

        function () {

            longPressDown = setInterval(
                function () { decreaseTempoLongPress() }, 120);
        }
        , 500);
};

function clearTempoDown() {
    clearTimeout(longPress2);
    clearInterval(longPressDown);

};




tempoUpBtn.addEventListener('mousedown', tempoUp);
tempoUpBtn.addEventListener('mouseup', clearTempoUp);
tempoUpBtn.addEventListener('touchstart', tempoUp);
tempoUpBtn.addEventListener('touchcancel', clearTempoUp);
tempoUpBtn.addEventListener('touchend', clearTempoUp);

tempoDnBtn.addEventListener('mousedown', tempoDown);
tempoDnBtn.addEventListener('mouseup', clearTempoDown);
tempoDnBtn.addEventListener('touchstart', tempoDown);
tempoDnBtn.addEventListener('touchcancel', clearTempoDown);
tempoDnBtn.addEventListener('touchend', clearTempoDown);
//need to add a slider to pick speed and insert it in target3 rendering instead of "100"




function printDiv() {
    const divContents = document.getElementById("target3").innerHTML;
    const patternDropDn = document.getElementById('patternType');
    const a = window.open('', '', '');
    a.document.write('<html>');
    a.document.write('<body style="display: flex; flex-direction: column; justify-content: space-between; align-items: center; height: 90%; padding: 20px;">');
    a.document.write('<div style="text-align: center; margin-top: 20px;">');  // Adjust the margin-top as needed
    // a.document.write('<h1>Div contents are <br>');
    a.document.write(`<h1 style="padding-bottom: 20px"> ${tonicMenu.options[tonicMenu.selectedIndex].text} ${scaleDropDown.options[scaleDropDown.selectedIndex].text} in ${patternDropDn.options[patternDropDn.selectedIndex].text.toLowerCase()} pattern </h1>`);
    a.document.write(divContents);
    a.document.write('</div>');
    a.document.write(' <div id="printFooter" style="margin-bottom:20px; justify-content: flex-end; text-align: center; display: flex; align-items: center; "><p>Generated by</p> <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="70" height="auto" viewBox="0 0 1816 1745" style="bottom: 20px"  >')
    a.document.write('<path d="M0 0 C599.28 0 1198.56 0 1816 0 C1816 575.85 1816 1151.7 1816 1745 C1216.72 1745 617.44 1745 0 1745 C0 1169.15 0 593.3 0 0 Z " fill="#FEFEFE" transform="translate(0,0)"/>');
    a.document.write('<path d="M0 0 C13.2 0 26.4 0 40 0 C40.03738281 3.403125 40.07476563 6.80625 40.11328125 10.3125 C40.15981486 13.69878698 40.21093103 17.08497702 40.26245117 20.47119141 C40.29520675 22.7806991 40.32338242 25.09027742 40.34643555 27.39990234 C40.91679325 83.10079341 54.27101974 136.0822339 94.85424805 176.27636719 C116.81273969 197.2436882 144.44951335 211.82724175 170.76831055 226.42724609 C191.35579336 237.86209326 210.8043418 249.76269855 228 266 C228.87140625 266.79535156 229.7428125 267.59070313 230.640625 268.41015625 C248.89419549 285.69889515 260.3866937 308.48632686 265.625 332.9375 C265.82867188 333.81728516 266.03234375 334.69707031 266.2421875 335.60351562 C269.73217467 351.63284774 270.33488619 367.97009539 270.26074219 384.31884766 C270.24997798 387.13075161 270.26074276 389.94202082 270.2734375 392.75390625 C270.28099376 404.30062843 269.54817844 415.55793861 268 427 C268.91821533 427.29189209 269.83643066 427.58378418 270.7824707 427.88452148 C274.53684765 429.18611859 277.80742667 431.01125084 281.1875 433.0625 C281.84169922 433.45735596 282.49589844 433.85221191 283.16992188 434.2590332 C289.22555003 437.99644496 294.63116179 442.33571032 300 447 C300.63164063 447.49886719 301.26328125 447.99773437 301.9140625 448.51171875 C307.46112555 452.93163885 311.66327485 458.42636541 316 464 C316.64839844 464.79792969 317.29679687 465.59585937 317.96484375 466.41796875 C343.02172629 498.64860089 349.64589885 541.17190572 345.23046875 580.89331055 C340.35667678 617.49026631 323.12481259 653.23387007 293.46948242 676.05786133 C278.25455743 687.38829972 261.48657548 695.59421734 243 700 C242.09894531 700.22558594 241.19789063 700.45117188 240.26953125 700.68359375 C224.07844797 704.07133845 204.21861398 703.46848189 188.3125 698.875 C187.54776367 698.65618164 186.78302734 698.43736328 185.99511719 698.21191406 C152.32459366 688.19274466 126.28412887 664.44831604 109.5012207 633.9831543 C105.09928158 625.64651108 101.93213842 616.94118706 99 608 C98.60039063 606.83339844 98.20078125 605.66679688 97.7890625 604.46484375 C85.74384593 566.47260052 89.61309348 520.9466515 107.88452148 485.61010742 C114.32447332 473.63618127 121.90725571 463.09685102 131 453 C131.59296875 452.33484375 132.1859375 451.6696875 132.796875 450.984375 C144.97859998 438.07898319 161.58918499 428.39949064 178 422 C178.99 422 179.98 422 181 422 C173.55972579 395.97285837 164.76342679 372.75263014 147 352 C146.30261719 351.18015625 145.60523438 350.3603125 144.88671875 349.515625 C118.52598999 319.36232248 82.51602533 305.4476227 44.32954407 296.96208191 C43.51884114 296.78193133 42.70813822 296.60178076 41.87286854 296.41617107 C41.25482192 296.27883462 40.6367753 296.14149817 40 296 C40.00170874 297.77147518 40.00170874 297.77147518 40.003452 299.57873774 C40.05347565 351.64399736 40.09975663 403.70925909 40.12702942 455.77453613 C40.12744359 456.56318998 40.12785776 457.35184383 40.12828448 458.16439628 C40.1372639 475.30533333 40.14557435 492.44627065 40.15319599 509.58720836 C40.15693789 517.99352308 40.16082757 526.39983773 40.16479492 534.80615234 C40.1651872 535.64266695 40.16557948 536.47918156 40.16598364 537.34104509 C40.17876012 564.43873377 40.20128841 591.53640363 40.22889166 618.63408092 C40.25721379 646.48815686 40.27566198 674.34222239 40.28174497 702.19631248 C40.28260939 706.13349444 40.2835863 710.07067636 40.28463173 714.00785828 C40.284834 714.78272693 40.28503627 715.55759558 40.28524467 716.3559451 C40.28878525 728.81256428 40.30268709 741.26915122 40.3204961 753.72575727 C40.33819227 766.25892173 40.34489533 778.79205433 40.34050413 791.32523084 C40.33842793 798.11189456 40.34151698 804.89845837 40.35761642 811.68510628 C40.37226251 817.90464814 40.37292172 824.1240326 40.36269668 830.34358186 C40.36143374 832.58746185 40.36519911 834.83135185 40.37464955 837.0752123 C40.43874075 853.23935355 39.14959807 868.02290176 33.875 883.4375 C33.5756958 884.31801025 33.2763916 885.19852051 32.96801758 886.10571289 C26.10360788 905.53530449 14.68744891 921.82037281 0.43310547 936.52001953 C-0.89935477 937.8960628 -2.21411942 939.28918089 -3.52734375 940.68359375 C-9.81359051 947.21436227 -16.67469637 952.70985225 -24 958 C-25.06089844 958.77859375 -26.12179687 959.5571875 -27.21484375 960.359375 C-44.68280879 972.78688353 -64.62083143 982.46174809 -85 989 C-85.98291016 989.32693848 -86.96582031 989.65387695 -87.97851562 989.99072266 C-101.93763559 994.62455285 -115.75716334 998.44011787 -130.31640625 1000.59423828 C-132.93798857 1000.99062382 -135.5449635 1001.44359088 -138.15625 1001.90234375 C-151.84923076 1004.12410616 -165.47254454 1004.29107816 -179.3125 1004.3125 C-180.24322327 1004.31608521 -181.17394653 1004.31967041 -182.13287354 1004.32336426 C-200.06097562 1004.36049802 -217.46190745 1002.82456712 -235.0625 999.375 C-236.03990143 999.184254 -236.03990143 999.184254 -237.03704834 998.98965454 C-258.26914646 994.80228956 -278.40400217 988.16341881 -298 979 C-298.72364746 978.66500488 -299.44729492 978.33000977 -300.19287109 977.98486328 C-321.22980611 968.15849675 -339.2286149 954.95560957 -356 939 C-357.15048828 937.94619141 -357.15048828 937.94619141 -358.32421875 936.87109375 C-381.23390928 915.19531833 -397.05821552 882.57273102 -398.23828125 850.92578125 C-398.62084024 831.58587352 -395.85058984 813.73739674 -388 796 C-387.48695313 794.83339844 -386.97390625 793.66679688 -386.4453125 792.46484375 C-380.0252877 778.84148968 -371.32616767 766.91623439 -361 756 C-359.80713534 754.60874846 -358.61935399 753.21311704 -357.4375 751.8125 C-321.4837366 710.65012095 -259.00821482 689.95991795 -206 686 C-201.99458028 685.84811642 -197.99242676 685.81293613 -193.984375 685.796875 C-192.85211487 685.79117493 -191.71985474 685.78547485 -190.55328369 685.77960205 C-188.16313597 685.77020026 -185.77297557 685.76363738 -183.3828125 685.75976562 C-179.80183976 685.75013935 -176.22146156 685.71910143 -172.640625 685.6875 C-158.16633108 685.62054187 -144.26529738 686.54889281 -130 689 C-128.76427246 689.20415527 -127.52854492 689.40831055 -126.25537109 689.61865234 C-123.26325284 690.13884234 -120.28823261 690.70611365 -117.3125 691.3125 C-116.27125977 691.52414795 -115.23001953 691.7357959 -114.15722656 691.95385742 C-104.52856969 693.98307988 -95.2641084 696.70189338 -86 700 C-84.74823975 700.43868408 -84.74823975 700.43868408 -83.47119141 700.88623047 C-51.8395136 712.07369337 -25.97519575 728.799826 -1 751 C-0.67 503.17 -0.34 255.34 0 0 Z " fill="#000000" transform="translate(727,317)"/>')
    a.document.write('<path d="M0 0 C1.97540125 10.35686079 2.43567219 20.42331114 2.4375 30.9375 C2.43989685 31.77117096 2.4422937 32.60484192 2.44476318 33.46377563 C2.44531137 56.6046709 -1.10340789 79.24048499 -5 102 C11.02928272 96.56453844 25.43990878 89.56612717 38 78 C38.52190918 77.52046875 39.04381836 77.0409375 39.58154297 76.546875 C47.63327781 69.06435932 54.16873146 61.35896344 60 52 C60.67546875 50.94683594 61.3509375 49.89367187 62.046875 48.80859375 C69.92166881 35.88233337 74.82397572 21.48927478 79 7 C93.46488466 13.80378321 100.9334748 32.80133899 106.2421875 46.9375 C114.88764429 71.10443965 115.2330762 97.17479419 115.25 122.5625 C115.25067474 123.4827597 115.25134949 124.40301941 115.25204468 125.35116577 C115.23535263 139.74392436 114.74392418 153.82925038 112 168 C111.82307617 168.91458984 111.64615234 169.82917969 111.46386719 170.77148438 C107.3099357 191.39048106 100.13034899 211.02902438 86 227 C85.47019531 227.62390625 84.94039062 228.2478125 84.39453125 228.890625 C74.582368 239.64766322 59.35617206 246.52834219 45 248 C41.54030696 248.15538395 38.08783742 248.18502654 34.625 248.1875 C33.73039063 248.19974609 32.83578125 248.21199219 31.9140625 248.22460938 C13.98358261 248.26370199 -2.77607226 240.65948232 -15.6953125 228.359375 C-42.75844988 200.65406147 -45.45971191 158.34366948 -45.25 121.6875 C-45.24656586 120.70109528 -45.24313171 119.71469055 -45.23959351 118.69839478 C-45.09320839 82.80570766 -42.84283026 44.83847088 -19 16 C-18.236875 14.989375 -17.47375 13.97875 -16.6875 12.9375 C-4.85106383 0 -4.85106383 0 0 0 Z " fill="#FDFDFD" transform="translate(911,756)"/>')
    a.document.write('<path d="M0 0 C41.58 0 83.16 0 126 0 C126 4.62 126 9.24 126 14 C125.03175293 14.01458252 124.06350586 14.02916504 123.06591797 14.04418945 C119.45373676 14.10241567 115.84216317 14.17964536 112.23046875 14.26245117 C110.67099919 14.29558667 109.11141298 14.3236537 107.55175781 14.34643555 C105.30223148 14.38019281 103.05376313 14.43251504 100.8046875 14.48828125 C100.1138205 14.49467117 99.42295349 14.5010611 98.71115112 14.50764465 C94.08952856 14.6462038 90.85462494 15.42809231 87 18 C81.87781522 23.57307592 82.42341293 29.33038892 82.45410156 36.61474609 C82.43859505 38.51800659 82.43859505 38.51800659 82.42277527 40.4597168 C82.39497814 43.92628041 82.39150916 47.39248678 82.39249516 50.85914564 C82.38936059 54.48671384 82.36373114 58.11412242 82.34051514 61.74160767 C82.29999304 68.60502023 82.27962341 75.46833787 82.26654124 82.3318516 C82.2506583 90.14813018 82.21223728 97.96424752 82.17194796 105.78043246 C82.08960095 121.85357525 82.03547646 137.92668397 82 154 C82.78907745 153.21059525 83.57815491 152.42119049 84.3911438 151.60786438 C86.35682168 149.6429338 88.32724314 147.68351165 90.3046875 145.73046875 C95.85825804 140.226277 101.37302008 134.76050392 106.4296875 128.7890625 C108.82947087 126.05498094 111.44409678 123.54736728 114.03515625 120.99609375 C115.92230744 119.07892823 117.68685375 117.10424678 119.4375 115.0625 C122.00665271 112.07198284 124.69317256 109.26883316 127.5 106.5 C130.28621141 103.7514401 132.95308392 100.97140209 135.5 98 C138.75044651 94.20781241 142.25449569 90.72864469 145.80859375 87.22265625 C148.42101068 84.5729856 150.83302621 81.78827197 153.25390625 78.96484375 C155.72603418 76.18300852 158.38430547 73.60624049 161.03515625 70.99609375 C162.92230744 69.07892823 164.68685375 67.10424678 166.4375 65.0625 C169.00665271 62.07198284 171.69317256 59.26883316 174.5 56.5 C187.01018659 44.53012887 187.01018659 44.53012887 192.375 28.6875 C192.2925401 24.78651253 191.65778599 22.09937012 188.78125 19.21484375 C180.74645594 13.73497324 169.36882089 14.34089813 160 14 C160 9.38 160 4.76 160 0 C196.96 0 233.92 0 272 0 C272 4.62 272 9.24 272 14 C270.91203125 14.02578125 269.8240625 14.0515625 268.703125 14.078125 C243.87085194 14.92061816 225.67024145 26.73898403 208.73046875 44.1328125 C207.08563982 45.90759406 205.50657772 47.72071104 203.9375 49.5625 C200.33883898 53.75955269 196.42540585 57.61262642 192.5 61.5 C186.82499254 67.08544012 186.82499254 67.08544012 181.5 73 C177.46928169 77.78647799 172.93513879 82.08855798 168.49291992 86.48754883 C164.59621868 90.3608318 160.82696956 94.27742401 157.30078125 98.49609375 C156 100 156 100 153.5 102.25 C152.7575 103.11625 152.7575 103.11625 152 104 C152.41989228 107.5044674 154.09404723 109.94355219 156.03515625 112.83203125 C156.67146973 113.78360107 157.3077832 114.7351709 157.96337891 115.71557617 C158.65608887 116.73756104 159.34879883 117.7595459 160.0625 118.8125 C160.77841309 119.87766846 161.49432617 120.94283691 162.23193359 122.0402832 C167.78559363 130.2760465 173.44936518 138.43367171 179.14355469 146.57275391 C184.03200152 153.57141608 188.79920598 160.64186153 193.51586914 167.75708008 C199.10272261 176.17828533 204.77462313 184.54087983 210.45776367 192.8972168 C211.27265 194.09552248 212.08750973 195.29384625 212.90234375 196.4921875 C213.51730965 197.39651268 213.51730965 197.39651268 214.1446991 198.31910706 C217.29683224 202.95758092 220.43341138 207.60639724 223.56640625 212.2578125 C224.9657634 214.33276266 226.36538616 216.40753339 227.7651062 218.48223877 C228.65529973 219.80307573 229.54444058 221.12462292 230.43240356 222.44696045 C244.17376533 245.13253711 244.17376533 245.13253711 266 258 C272.64561078 258.71077496 279.32205294 258.87033113 286 259 C286 263.62 286 268.24 286 273 C245.08 273 204.16 273 162 273 C162 268.38 162 263.76 162 259 C163.91683594 258.96261719 165.83367187 258.92523437 167.80859375 258.88671875 C170.35158121 258.82103273 172.8945491 258.75458631 175.4375 258.6875 C176.69755859 258.66494141 177.95761719 258.64238281 179.25585938 258.61914062 C189.48089726 258.40674069 189.48089726 258.40674069 199 255 C201.1163686 251.8254471 201.31929643 250.68113147 200.65136719 247.01708984 C199.29863871 242.82809333 196.63300479 239.3855196 194.125 235.8125 C193.50568604 234.90741699 192.88637207 234.00233398 192.24829102 233.06982422 C190.8923678 231.08917983 189.5312112 229.11211053 188.16552734 227.13818359 C185.568859 223.3752101 183.00456188 219.59092814 180.44268799 215.80421448 C180.06183044 215.24129196 179.6809729 214.67836945 179.28857422 214.09838867 C178.90312439 213.52865326 178.51767456 212.95891785 178.12054443 212.37191772 C176.10370449 209.39379336 174.08093489 206.41970265 172.05859375 203.4453125 C167.30499525 196.45227681 162.56192226 189.45214383 157.8210144 182.45050049 C156.5068703 180.51014411 155.19213205 178.57019172 153.87719727 176.63037109 C149.88103537 170.73454408 145.8877937 164.83683796 141.90802002 158.92993164 C140.15114437 156.32310311 138.39178213 153.71795829 136.63208008 151.11303711 C135.80160567 149.88224468 134.97231823 148.6506504 134.14428711 147.41821289 C133.00283839 145.71947 131.85735076 144.02351993 130.7109375 142.328125 C130.06431152 141.3680957 129.41768555 140.40806641 128.75146484 139.41894531 C127.2819292 137.38937197 125.83747171 135.6910117 124 134 C120.02456645 137.88250134 116.1227364 141.78323523 112.5 146 C109.48237647 149.51141648 106.26640919 152.75307402 102.96875 156 C100.45084396 158.5578728 98.13353196 161.26184809 95.796875 163.984375 C93.25654563 166.83396186 90.53890811 169.48633695 87.796875 172.140625 C83.58814797 176.49574253 82.62113806 178.86819104 82.58007812 185.07592773 C82.57160858 185.78049103 82.56313904 186.48505432 82.55441284 187.21096802 C82.53105211 189.53536122 82.53002039 191.85909213 82.53125 194.18359375 C82.52414789 195.80257939 82.51644881 197.42156251 82.50817871 199.0405426 C82.49473612 202.43245441 82.4931641 205.82413347 82.49902344 209.21606445 C82.50491984 213.55866685 82.47433068 217.90015134 82.43390656 222.2425375 C82.4080326 225.58577979 82.4051518 228.92875277 82.40879822 232.27208138 C82.4071067 233.8728523 82.39746099 235.47363562 82.37965393 237.0743084 C82.3574676 239.31518835 82.3671607 241.55380424 82.38476562 243.79467773 C82.38271118 245.06834702 82.38065674 246.3420163 82.37854004 247.65428162 C83.27388778 252.47451393 85.93616268 254.54359632 89.82324219 257.28662109 C93.11396438 258.36507446 96.39870441 258.35927622 99.828125 258.4140625 C100.57713074 258.43342865 101.32613647 258.4527948 102.09783936 258.4727478 C104.48177836 258.53235716 106.86576614 258.57885354 109.25 258.625 C110.86981231 258.66319701 112.48960468 258.70224975 114.109375 258.7421875 C118.07275406 258.83804313 122.03622819 258.92214246 126 259 C126 263.62 126 268.24 126 273 C84.42 273 42.84 273 0 273 C0 268.38 0 263.76 0 259 C2.24039063 258.96261719 4.48078125 258.92523437 6.7890625 258.88671875 C8.97356589 258.84042603 11.15790316 258.78922086 13.34228516 258.73754883 C14.85324904 258.70442074 16.36433307 258.67635145 17.87548828 258.65356445 C20.05553082 258.61979319 22.23448439 258.56747104 24.4140625 258.51171875 C26.37786865 258.47244263 26.37786865 258.47244263 28.38134766 258.43237305 C32.20988751 257.97492169 34.65485402 256.85249242 38 255 C38.66 255 39.32 255 40 255 C42.11741597 249.78709871 42.28736913 245.26014314 42.26742554 239.73228455 C42.27195665 238.80780299 42.27648776 237.88332144 42.28115618 236.93082529 C42.2938009 233.8378657 42.29217978 230.74508217 42.29052734 227.65209961 C42.29651237 225.43275221 42.30331786 223.2134069 42.31088257 220.99406433 C42.32854817 214.96947152 42.33323807 208.94493552 42.33451414 202.92031932 C42.33641335 197.89266438 42.34377078 192.86502268 42.35085833 187.83737284 C42.36621075 176.65683865 42.37219605 165.47632546 42.37084763 154.29578298 C42.37072776 153.29025053 42.37072776 153.29025053 42.37060547 152.2644043 C42.37052371 151.59322992 42.37044195 150.92205554 42.37035771 150.23054255 C42.36954418 139.3446119 42.38870134 128.45881939 42.4168822 117.57292872 C42.44560028 106.39123896 42.45905678 95.20959983 42.45769465 84.02786833 C42.4571841 77.75169504 42.46291949 71.47567826 42.48405075 65.19953728 C42.50337106 59.30042755 42.5036001 53.40162471 42.48901749 47.50250435 C42.48692086 45.33570535 42.49168077 43.16888744 42.5037384 41.00212097 C42.51911535 38.04796051 42.5099327 35.09486835 42.49447632 32.14073181 C42.50476344 31.28003442 42.51505057 30.41933703 42.52564943 29.5325579 C42.47869142 25.48135633 42.31602808 23.49489525 40.08345985 19.99872684 C33.26299763 13.45564855 22.76805818 14.46482604 13.9375 14.3125 C12.58134868 14.27925702 11.22522747 14.24476115 9.86914062 14.20898438 C6.57971009 14.12704127 3.28987002 14.06183165 0 14 C0 9.38 0 4.76 0 0 Z " fill="#020202" transform="translate(813,1039)"/>')
    a.document.write('<path d="M0 0 C2.54892988 2.18535552 4.90266776 4.45611125 7.234375 6.87109375 C7.99234375 7.64582031 8.7503125 8.42054687 9.53125 9.21875 C26.69403217 28.36412942 30.234375 53.10623761 30.234375 77.87109375 C-10.685625 77.87109375 -51.605625 77.87109375 -93.765625 77.87109375 C-90.32944746 113.2594838 -90.32944746 113.2594838 -70.765625 140.87109375 C-58.81659444 149.6534201 -45.31758186 152.49519608 -30.765625 150.87109375 C-16.943185 148.24426826 -6.65617441 142.76164316 3.234375 132.87109375 C3.935625 132.16984375 4.636875 131.46859375 5.359375 130.74609375 C11.02110385 124.73050684 15.10073678 117.98402973 19.234375 110.87109375 C22.68107125 111.44453708 25.45625665 112.30970953 28.546875 113.93359375 C29.24425781 114.29582031 29.94164062 114.65804688 30.66015625 115.03125 C31.17964844 115.30839844 31.69914062 115.58554688 32.234375 115.87109375 C20.40184938 139.4399456 3.63345529 156.86274909 -21.640625 165.62109375 C-40.69456463 171.85165956 -65.26987009 169.10911934 -83.015625 160.68359375 C-89.65768027 157.17514921 -95.2254227 152.91647735 -100.765625 147.87109375 C-101.80783203 146.96810547 -101.80783203 146.96810547 -102.87109375 146.046875 C-112.51067358 137.1769223 -119.52868955 125.16515234 -123.765625 112.87109375 C-124.05953125 112.0203125 -124.3534375 111.16953125 -124.65625 110.29296875 C-133.51839663 82.66392338 -129.8403788 52.43799156 -117.2109375 26.703125 C-107.60775027 8.94412087 -90.71451372 -6.012807 -71.5078125 -12.3515625 C-46.87429683 -19.33456765 -20.40442136 -15.70679328 0 0 Z " fill="#020202" transform="translate(1237.765625,1149.12890625)"/>')
    a.document.write('<path d="M0 0 C1.85582429 4.06853787 2.52367295 7.8417509 3.0703125 12.26953125 C3.15626678 12.95053391 3.24222107 13.63153656 3.33078003 14.33317566 C3.60182865 16.49221973 3.86354849 18.65227494 4.125 20.8125 C4.30797714 22.28327997 4.49156454 23.75398415 4.67578125 25.22460938 C5.12425239 28.81555642 5.56436888 32.40747001 6 36 C6.77597534 34.90788208 6.77597534 34.90788208 7.56762695 33.79370117 C20.36393169 15.95889776 35.93108619 3.72321502 58 0 C61.27682081 -0.2822206 64.52469388 -0.33480101 67.8125 -0.3125 C68.6890625 -0.30686035 69.565625 -0.3012207 70.46875 -0.29541016 C83.56296662 -0.05122332 96.54598173 3.50433831 106.3125 12.6875 C114.82847441 22.06920625 118.76024488 31.99148619 122 44 C122.18165018 44.64253031 122.36330036 45.28506062 122.55045509 45.94706154 C123.03102978 48.14170384 123.13035819 50.10536425 123.13803101 52.35092163 C123.14348434 53.2144072 123.14893768 54.07789276 123.15455627 54.96754456 C123.1555986 55.90686325 123.15664093 56.84618195 123.15771484 57.81396484 C123.16279556 58.80952896 123.16787628 59.80509308 123.17311096 60.83082581 C123.18380777 62.99211117 123.19243065 65.15340757 123.19923019 67.31470871 C123.21102403 70.73603851 123.23047778 74.15724236 123.25234985 77.57852173 C123.31395339 87.30588595 123.36802899 97.03323675 123.40136719 106.76074219 C123.42230982 112.71119686 123.45760856 118.66142097 123.50212479 124.61174393 C123.51628638 126.8787019 123.52500758 129.14570066 123.52817917 131.41270065 C123.53308675 134.58446137 123.55624108 137.75560976 123.58349609 140.92724609 C123.58048996 141.86251633 123.57748383 142.79778656 123.5743866 143.76139832 C123.64108993 148.98754217 124.27876059 152.39289699 127 157 C127 157.66 127 158.32 127 159 C135.82753882 162.44859625 144.6498111 162.68543448 154 163 C154 167.62 154 172.24 154 177 C123.97 177 93.94 177 63 177 C63 172.38 63 167.76 63 163 C66.155625 162.8453125 66.155625 162.8453125 69.375 162.6875 C80.40483852 161.99374529 80.40483852 161.99374529 89.5625 156.5 C92.2341268 151.85369252 92.15999906 147.68064752 92.17700195 142.46801758 C92.18685875 141.15991875 92.18685875 141.15991875 92.19691467 139.82539368 C92.21666007 136.93177194 92.22832028 134.03820245 92.23828125 131.14453125 C92.24439454 129.65612008 92.24439454 129.65612008 92.25063133 128.13764 C92.27150896 122.87374454 92.28579678 117.60987519 92.29516602 112.34594727 C92.30616364 106.94530827 92.34048095 101.54508893 92.38033772 96.14459705 C92.40668801 91.96371274 92.41487462 87.78292497 92.41844749 83.60196495 C92.42327528 81.61395153 92.43477838 79.62594129 92.45348549 77.63801003 C92.60100631 60.90562359 91.8404218 44.18131444 80.22265625 30.98046875 C71.88823387 22.88465969 62.26774654 21.36265274 51.0637207 21.45898438 C38.7762207 21.93735363 29.1865884 27.44356121 20.84375 36.28515625 C9.84742213 49.23046014 5.86627255 65.16592991 5.83886719 81.88134766 C5.83390228 82.62390305 5.82893738 83.36645844 5.82382202 84.1315155 C5.80935593 86.55904094 5.80242784 88.98650126 5.796875 91.4140625 C5.79404762 92.24874432 5.79122025 93.08342613 5.78830719 93.94340134 C5.77338473 98.35289571 5.76410907 102.7623579 5.75976562 107.171875 C5.75426373 111.71572985 5.73017995 116.25928768 5.70179367 120.80304909 C5.68315242 124.31011825 5.6779611 127.81711567 5.67642975 131.32423019 C5.67341054 132.99952204 5.6654068 134.67481284 5.65224457 136.35005569 C5.63513811 138.69274824 5.63707419 141.03471128 5.64355469 143.37744141 C5.6343399 144.06330826 5.62512512 144.74917511 5.6156311 145.45582581 C5.65511736 150.02598456 6.62360916 153.11028055 9 157 C13.25753496 161.03919983 16.60915663 162.03045783 22.328125 162.31640625 C23.12734375 162.35830078 23.9265625 162.40019531 24.75 162.44335938 C25.575 162.48267578 26.4 162.52199219 27.25 162.5625 C28.51070312 162.62727539 28.51070312 162.62727539 29.796875 162.69335938 C31.86440671 162.79908543 33.93218281 162.90001295 36 163 C36 167.62 36 172.24 36 177 C5.64 177 -24.72 177 -56 177 C-56 172.38 -56 167.76 -56 163 C-54.31583984 162.96132812 -54.31583984 162.96132812 -52.59765625 162.921875 C-41.69299863 162.61586147 -41.69299863 162.61586147 -31.56640625 158.83984375 C-30 158 -30 158 -28 158 C-26.41336379 154.48160104 -25.74632668 151.72465873 -25.72584534 147.87239075 C-25.71587021 146.86185638 -25.70589508 145.85132202 -25.69561768 144.81016541 C-25.69462067 143.16353661 -25.69462067 143.16353661 -25.69360352 141.48364258 C-25.68528 140.31879333 -25.67695648 139.15394409 -25.66838074 137.95379639 C-25.64427487 134.10067403 -25.63550702 130.24772103 -25.62890625 126.39453125 C-25.62220625 124.39077822 -25.61550394 122.38702519 -25.60847133 120.3832733 C-25.58701584 114.08062253 -25.57766829 107.77802556 -25.57446289 101.4753418 C-25.57083317 94.99335688 -25.54097543 88.51184707 -25.49905831 82.03000718 C-25.46425112 76.45016212 -25.44891263 70.87047363 -25.44821686 65.29052085 C-25.44742727 61.96451445 -25.43643669 58.63909862 -25.41021919 55.31318092 C-25.38325525 51.59614812 -25.38814732 47.88041193 -25.40063477 44.16333008 C-25.38580048 43.0756987 -25.37096619 41.98806732 -25.35568237 40.86747742 C-25.42471877 33.62253645 -26.86412144 28.03375928 -31 22 C-34.73025947 18.4684848 -38.93579561 16.9507476 -44.01171875 16.68359375 C-44.76904297 16.64169922 -45.52636719 16.59980469 -46.30664062 16.55664062 C-47.48516602 16.49766602 -47.48516602 16.49766602 -48.6875 16.4375 C-49.48478516 16.39431641 -50.28207031 16.35113281 -51.10351562 16.30664062 C-53.06881447 16.20072632 -55.03438496 16.09987449 -57 16 C-57 11.71 -57 7.42 -57 3 C-51.51297517 2.26260869 -46.0741629 1.75684667 -40.546875 1.46484375 C-39.374664 1.40037804 -39.374664 1.40037804 -38.17877197 1.33460999 C-36.53511003 1.24502666 -34.89137002 1.15686548 -33.24755859 1.07006836 C-30.77024055 0.93857435 -28.29333922 0.80064636 -25.81640625 0.66210938 C-17.20327772 0.19256749 -8.62967991 -0.14468539 0 0 Z " fill="#010101" transform="translate(1146,923)"/>')
    a.document.write('<path d="M0 0 C27.72 0 55.44 0 84 0 C84 3.96 84 7.92 84 12 C81.71283483 14.28716517 75.15121852 13.30241116 71.87695312 13.34179688 C66.34327071 13.53635807 63.27149269 14.41463684 59 18 C57.47127545 21.0574491 57.79969057 23.61648377 58 27 C59.0176799 30.13190523 59.0176799 30.13190523 60.5625 33.17578125 C61.10825684 34.32473877 61.65401367 35.47369629 62.21630859 36.6574707 C62.81077487 37.87586139 63.40534067 39.09420353 64 40.3125 C64.6026132 41.57242588 65.20367736 42.83309377 65.80322266 44.09448242 C66.69979054 45.98040901 67.59718728 47.86587066 68.49966431 49.74897766 C71.18327034 55.35053213 73.71653297 61.00971764 76.19921875 66.70239258 C80.68591632 76.9343489 85.52090353 87.01150619 90.33203125 97.09375 C91.4487491 99.43835155 92.56514873 101.7831043 93.68139648 104.12792969 C94.44268884 105.72445818 95.20574303 107.3201476 95.97045898 108.91503906 C97.09601984 111.26391125 98.21462178 113.61599128 99.33203125 115.96875 C99.84138969 117.02515686 99.84138969 117.02515686 100.36103821 118.10290527 C102.36459812 122.34082757 103.83230167 126.45792351 105 131 C105.66 131 106.32 131 107 131 C107.50273438 129.09347656 107.50273438 129.09347656 108.015625 127.1484375 C110.28716081 119.5951838 113.51321436 112.43481776 116.63641357 105.20443726 C118.15718606 101.6818214 119.66421827 98.15338234 121.17208862 94.62522888 C122.34115444 91.89013844 123.51187597 89.15576036 124.68261719 86.42138672 C127.94632372 78.79167461 131.18969659 71.15360857 134.40148926 63.50189209 C135.04261764 61.97769477 135.68635208 60.45459061 136.33288574 58.93267822 C144.90776352 40.53194099 144.90776352 40.53194099 143.875 21.0625 C139.40333979 16.14367377 133.38377548 15.2831406 127.125 14.3125 C126.34125 14.18294922 125.5575 14.05339844 124.75 13.91992188 C122.83474158 13.60460494 120.91754727 13.30108482 119 13 C119 8.71 119 4.42 119 0 C142.76 0 166.52 0 191 0 C191 4.29 191 8.58 191 13 C188.3084375 13.556875 188.3084375 13.556875 185.5625 14.125 C176.2795934 16.48672889 170.67862338 20.36669497 165.52172852 28.3744812 C162.80320448 33.06489469 160.74204292 38.00749378 158.65625 43.00390625 C158.1702684 44.14674576 157.6842868 45.28958527 157.18357849 46.46705627 C156.14930061 48.90214914 155.11829825 51.33831034 154.09298706 53.77716064 C152.47943604 57.61494885 150.85341306 61.44736921 149.22485352 65.27880859 C148.68023221 66.56041636 148.13563069 67.84203254 147.59104919 69.12365723 C147.18954053 70.06854256 147.18954053 70.06854256 146.77992058 71.03251648 C145.97559405 72.92667534 145.17249027 74.82134805 144.36976624 76.71618652 C140.62568532 85.54946307 136.81626622 94.35021661 132.9375 103.125 C128.69393271 112.74753051 124.5399066 122.40563113 120.4296875 132.0859375 C119.92911331 133.2643924 119.42853912 134.44284729 118.91279602 135.65701294 C116.41375282 141.54273967 113.91927421 147.43034601 111.43139648 153.32080078 C78.90572352 230.15259086 78.90572352 230.15259086 48.44140625 244.69921875 C39.28730438 248.15928223 25.11510652 249.22416362 15.875 245.4375 C13.88671875 244.3203125 13.88671875 244.3203125 12 243 C11.28457031 242.50242187 10.56914063 242.00484375 9.83203125 241.4921875 C4.75301123 237.51408439 1.52066564 233.32026655 0 227 C-0.68101462 221.09077939 -0.90818353 215.95608761 1.625 210.5 C9.49804479 202.21258443 9.49804479 202.21258443 14.390625 201.796875 C24.28846154 201.63461538 24.28846154 201.63461538 29 205 C32.70986716 208.69975853 34.91436825 211.81639047 35.125 217.1875 C35.03272851 220.0017804 34.82087151 222.6017801 34.4375 225.375 C34.293125 226.57125 34.14875 227.7675 34 229 C35.59468098 230.59468098 37.22826282 230.28538976 39.4375 230.375 C45.56481069 230.30497359 49.88659165 228.23271409 55 225 C55.61617187 224.61199219 56.23234375 224.22398437 56.8671875 223.82421875 C70.55576961 213.63663345 78.26251208 191.88476746 86 177 C86.58281738 175.98486328 87.16563477 174.96972656 87.76611328 173.92382812 C89.21165054 170.49847115 89.20864591 169.46692243 88 166 C86.85803459 163.35549556 85.67698765 160.77298816 84.421875 158.18359375 C83.87808952 157.04407257 83.87808952 157.04407257 83.32331848 155.88153076 C82.54366213 154.249156 81.761499 152.61797662 80.9770813 150.98788452 C79.31355301 147.5303819 77.66259126 144.06693133 76.01100159 140.60371399 C75.17748567 138.85610274 74.343368 137.10877836 73.50865173 135.36174011 C70.14759026 128.32448236 66.83710225 121.26547225 63.5625 114.1875 C63.06202148 113.10654053 62.56154297 112.02558105 62.04589844 110.91186523 C60.97296629 108.59300646 59.90056 106.27390432 58.82861328 103.95458984 C56.70004338 99.34979889 54.56681718 94.74716782 52.43359375 90.14453125 C52.03214645 89.27829636 51.63069916 88.41206146 51.21708679 87.51957703 C49.15809384 83.07689817 47.09868962 78.63441036 45.03881836 74.19213867 C38.27098991 59.59487326 38.27098991 59.59487326 35.00018311 52.48864746 C34.09687533 50.52645071 33.19222354 48.56487969 32.28710938 46.60351562 C31.22047714 44.29101684 30.15644447 41.97731622 29.09570312 39.66210938 C22.70205762 24.59417354 22.70205762 24.59417354 10 15.25 C6.60940554 14.03503699 3.68504378 13.61417396 0 13 C0 8.71 0 4.42 0 0 Z " fill="#020202" transform="translate(1291,1139)"/>')
    a.document.write('<path d="M0 0 C0.85980469 0.42410156 1.71960938 0.84820313 2.60546875 1.28515625 C11.66209633 6.20396004 18.17042621 13.43450071 22 23 C22.51949219 24.21171875 23.03898437 25.4234375 23.57421875 26.671875 C25.25022465 31.20174795 25.53827896 35.38741699 25.5 40.1875 C25.49500488 41.01612549 25.49000977 41.84475098 25.48486328 42.69848633 C25.10910665 56.0741266 19.26890046 66.11879511 9.8125 75.1875 C5.02642789 79.30255187 -0.12391193 81.78681646 -6 84 C-6.95261719 84.36609375 -7.90523438 84.7321875 -8.88671875 85.109375 C-20.25955944 88.36283507 -31.72090549 85.81838291 -41.94140625 80.45703125 C-53.57681882 73.53910568 -59.248401 64.42409436 -64 52 C-67.19483344 38.9011829 -64.30236849 27.03711889 -57.71484375 15.6015625 C-45.43754475 -3.02413485 -19.95757617 -10.21751507 0 0 Z " fill="#FDFDFD" transform="translate(479,1121)"/>')
    a.document.write('<path d="M0 0 C2.02213653 1.43010416 3.87798096 2.94897059 5.7421875 4.578125 C6.63164063 5.29355469 6.63164063 5.29355469 7.5390625 6.0234375 C13.7621725 11.5030786 19.42042296 21.26067982 20.7421875 29.578125 C21.64197552 44.13046584 19.34514487 56.86944659 10.1484375 68.61328125 C1.94164217 77.42010172 -9.47470664 82.59609432 -21.3671875 83.92578125 C-35.35790308 84.34260309 -47.01583605 79.22504475 -57.18359375 69.8203125 C-66.23978905 60.03075298 -69.65824741 48.40899603 -69.53515625 35.34765625 C-68.81845789 25.60661522 -65.40711475 17.12107752 -59.2578125 9.578125 C-58.70609375 8.89105469 -58.154375 8.20398437 -57.5859375 7.49609375 C-43.04970921 -8.74845196 -18.08812781 -11.39113931 0 0 Z " fill="#FDFDFD" transform="translate(641.2578125,1123.421875)"/>')
    a.document.write('<path d="M0 0 C11.624721 7.34667926 18.94006495 19.15460014 22 32.4375 C22.29016838 35.60984507 22.32507518 38.75346352 22.3125 41.9375 C22.32861328 42.75347656 22.34472656 43.56945313 22.36132812 44.41015625 C22.36569147 49.84688129 21.57671058 53.6284602 19 58.4375 C14.06262823 63.12800318 10.05839194 63.58384307 3.49926758 63.55102539 C2.73805099 63.55117142 1.97683441 63.55131744 1.19255066 63.5514679 C-1.3234848 63.55077124 -3.83944622 63.54299038 -6.35546875 63.53515625 C-8.09995992 63.53329119 -9.8444516 63.5318677 -11.58894348 63.53086853 C-16.18058722 63.52705026 -20.77219933 63.51722584 -25.36383057 63.50616455 C-30.04918998 63.49593561 -34.73455451 63.49136773 -39.41992188 63.48632812 C-48.61329515 63.47560298 -57.80664494 63.45853481 -67 63.4375 C-67.0150122 61.86591523 -67.02561739 60.29428805 -67.03442383 58.72265625 C-67.04081375 57.84746338 -67.04720367 56.97227051 -67.05378723 56.07055664 C-66.97310861 52.12108046 -66.38238136 48.31930969 -65.6875 44.4375 C-65.55069824 43.65568359 -65.41389648 42.87386719 -65.27294922 42.06835938 C-62.47388507 26.60441372 -56.80619365 12.33180191 -44.25 2.125 C-29.89663407 -7.67661759 -15.08483465 -8.16709606 0 0 Z " fill="#FBFBFB" transform="translate(1211,1150.5625)"/>')
    a.document.write('</svg>')
    a.document.write('</div>')

    a.document.write('</body></html>');
    a.document.close();
    a.print();
}