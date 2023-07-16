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

//get data from local storage
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
const statement = document.getElementById('statement')
const generateBTN = document.getElementById('generate');
const stratDownBtn = document.getElementById('startnotedown')
const stratUpBtn = document.getElementById('startnoteup')
const endDownBtn = document.getElementById('endnotedown')
const endUpBtn = document.getElementById('endnoteup')
const settingBTN = document.getElementById('settingsBTN')
const settingsMenu = document.getElementById('settingsMenu')
const editCustomScaleBtn = document.getElementById('editcustomscale')
const gridItem = document.querySelectorAll('.grid-item')
const doneEditCustomScaleBTN = document.getElementById('doneEditCustomScale')
const DoReMiSwitch = document.getElementById('DoReMi')
const tonicMenu = document.getElementById('tonic')
const tonicLowHighSwitch = document.getElementById('lowTon')
const aboutBTN = document.getElementById('about')
const closeInfoBTN = document.getElementById('closeinfo')
const splash = document.querySelector('.splash')
const displyNoteNameSwitch = document.getElementById('NoteNames')
const upgradegBTN = document.getElementById('whitelogo')
const lightSwitch = document.getElementById('lightSwitch')
// const rangeBtns = document.querySelectorAll('.btns')


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

let currentRange = ''

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
    saveLowNoteIdxToLocal()
})

stratUpBtn.addEventListener('click', function () {
    checkUpLogic()
    displayLowRangePitch()
    saveLowNoteIdxToLocal()
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


    // console.log(lowestNote, highestNote);
    // console.log(currentRange);

    //fix enharmony spelling in top range


    // console.log(highestNote[0]);


    function removeItemsFromArrayEnd(array, ...positions) {
        // Sort positions in descending order
        positions.sort((a, b) => b - a);

        // Remove items from the array end
        for (let i = 0; i < positions.length; i++) {
            const index = array.length - positions[i];
            array.splice(index, 1);
        }

        return array;
    }

    let positionsToRemoveFromEnd = [];

    if (highestNote[0] === 'C#' || highestNote[0] === 'D#' || highestNote[0] === 'F#' || highestNote[0] === 'G#' || highestNote[0] === 'A#') { positionsToRemoveFromEnd = [3] }

    if (highestNote[0] === 'AN' || highestNote[0] === 'GN' || highestNote[0] === 'DN') {
        positionsToRemoveFromEnd = [2, 3]
    }

    if (highestNote[0] === 'CN' || highestNote[0] === 'FN') {
        positionsToRemoveFromEnd = [2, 3, 7]
    }

    if (highestNote[0] === 'BN' || highestNote[0] === 'EN') {
        positionsToRemoveFromEnd = [4, 3]
    }

    if (highestNote[0] === 'Bb' || highestNote[0] === 'Eb') {
        positionsToRemoveFromEnd = [2, 3, 4, 7]
    }

    if (highestNote[0] === 'Gb' || highestNote[0] === 'Ab' || highestNote[0] === 'Db') {
        positionsToRemoveFromEnd = [1, 2, 3, 6]
    }




    currentRange = removeItemsFromArrayEnd(currentRange, ...positionsToRemoveFromEnd)
    // console.log(currentRange);


    // Remove items from the array start
    function removeItemsFromArrayStart(array, ...indexes) {
        // Sort indexes in ascending order
        indexes.sort((a, b) => a - b);

        // Remove items from the array
        for (let i = indexes.length - 1; i >= 0; i--) {
            const index = indexes[i];
            array.splice(index, 1);
        }

        return array;
    }


    let positionsToRemoveFromStart = []
    if (lowestNote[0] === 'BN' || lowestNote[0] === 'EN' || lowestNote[0] === 'GN' || lowestNote[0] === 'FN' || lowestNote[0] === 'DN' || lowestNote[0] === 'AN') { positionsToRemoveFromStart = [1, 2] }

    if (lowestNote[0] === 'Gb' || lowestNote[0] === 'Bb' || lowestNote[0] === 'Db' || lowestNote[0] === 'Eb' || lowestNote[0] === 'Ab') { positionsToRemoveFromStart = [2] }

    if (lowestNote[0] === 'A#' || lowestNote[0] === 'D#' || lowestNote[0] === 'G#') { positionsToRemoveFromStart = [0, 1, 2, 5] }

    if (lowestNote[0] === 'C#' || lowestNote[0] === 'F#') { positionsToRemoveFromStart = [1, 2, 3, 6] }

    if (lowestNote[0] === 'CN') { positionsToRemoveFromStart = [2, 3] }

    currentRange = removeItemsFromArrayStart(currentRange, ...positionsToRemoveFromStart)




    //filter only notes that are in the scale



    let currentScaleSet = new Set(currentScale)

    // console.log(currentScaleSet);

    currentScaleWithRange = []
    currentRange.forEach(function (note) {

        if (currentScaleSet.has(note[0])) { currentScaleWithRange.push(note) }


    })

    // console.log(currentScaleWithRange);
}



function generate() {

    //find lowest tonic in range

    let tonic = currentScale[0]

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
    const numberOfTonicsInRange = IndexofTonics.length


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
        //step 2: reverse pattern

        const reversePattern = currentPattern.map(x => (x = x - 2 * x))
            .reverse()

        // console.log(reversePattern);



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

        // const reversePattern3 = [...currentPattern]
        // let reversePattern3Sum = reversePattern3.reduce((a, b) => a + b)
        // let Last = reversePattern3[reversePattern3.length - 1]
        // Last = Last - reversePattern3Sum - 1
        // reversePattern3[reversePattern3.length - 1] = Last

        // console.log(reversePattern3, reversePattern3Sum);
        // console.log(currentNoteIndexFromCSWR);
        // console.log(currentScaleWithRange);

        // if (document.getElementById('patternType').value == 'default') {
        //     exercise.pop()
        // }
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







    } else { alert('not enough range for pattern') }

    // exercise.push(currentScaleWithRange[(exercise.length + 2)])
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
    // console.log(abcArrWithNoteNames);
    // console.log(exercise);
    let abcArrPor

    if (!displayNoteNames) { abcArrPor = [...abcArr] } else //display note names 
    {
        abcArrPor = [...abcArrWithNoteNames];
        abcArr = [...abcArrWithNoteNames]
    }
    // console.log(meter);


    //Landcape design
    if (meter === 'M: \n L:1/4 \n') {
        //quarter notes and no time signiture
        for (var itemIndex = 24; itemIndex < abcArr.length; itemIndex += 24) {

            abcArr.splice(itemIndex, 0, '\n');
        }
    }
    if (meter === 'M:4/4 \n L:1/4 \n') {
        //quarter notes and 4/4 time signiture
        for (var itemIndex = 4; itemIndex < abcArr.length; itemIndex += 5) {

            abcArr.splice(itemIndex, 0, '|');
        }
        for (var itemIndex = 25; itemIndex < abcArr.length; itemIndex += 26) {

            abcArr.splice(itemIndex, 0, '\n');
        }

    }

    if (meter === 'M:4/4 \n L:1/8 \n') {
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
    function setDefaultMeter() {
        meter = 'M: \n L:1/4 \n'
    }
    if (meter === 'M:3/4 \n L:1/4 \n') {

        displayNAmsg()
        setDefaultMeter()
        // for (var itemIndex = 3; itemIndex < abcArr.length; itemIndex += 4) {

        //     abcArr.splice(itemIndex, 0, '|');
        // }
        // for (var itemIndex = 32; itemIndex < abcArr.length; itemIndex += 33) {

        //     abcArr.splice(itemIndex, 0, '\n');
        // }

    }

    if (meter === 'M:3/4 \n L:1/8 \n') {

        displayNAmsg()
        setDefaultMeter()
        // for (var itemIndex = 2; itemIndex < abcArr.length; itemIndex += 3) {

        //     abcArr.splice(itemIndex, 0, ' ');
        // }
        // for (var itemIndex = 9; itemIndex < abcArr.length; itemIndex += 10) {

        //     abcArr.splice(itemIndex, 0, '|');
        // }
        // for (var itemIndex = 40; itemIndex < abcArr.length; itemIndex += 41) {

        //     abcArr.splice(itemIndex, 0, '\n');
        // }

    }

    if (meter === 'M:6/8 \n L:1/8 \n') {
        displayNAmsg()
        setDefaultMeter()
        // for (var itemIndex = 3; itemIndex < abcArr.length; itemIndex += 4) {

        //     abcArr.splice(itemIndex, 0, ' ');
        // }
        // for (var itemIndex = 8; itemIndex < abcArr.length; itemIndex += 9) {

        //     abcArr.splice(itemIndex, 0, '|');
        // }
        // for (var itemIndex = 36; itemIndex < abcArr.length; itemIndex += 37) {

        //     abcArr.splice(itemIndex, 0, '\n');
        // }

    }

    // console.log(abcArr);

    abcString = abcArr.join('')


    // console.log(abcString);


    //show exercise notes for landscape
    ABCJS.renderAbc('target3', `%%staffwidth 7.7in \n${meter} [K: clef=${Clef}] \n ${abcString} |]`)
    // console.log('target3', `${meter} clef=${Clef} \n ${abcString} |]`);

    //show exercise notes for Portrait
    if (meter === 'M: \n L:1/4 \n') {
        //quarter notes and no time signiture
        for (var itemIndex = 8; itemIndex < abcArrPor.length; itemIndex += 9) {

            abcArrPor.splice(itemIndex, 0, '\n');
        }
    }
    if (meter === 'M:4/4 \n L:1/4 \n') {
        //quarter notes and 4/4 time signiture
        for (var itemIndex = 4; itemIndex < abcArrPor.length; itemIndex += 5) {

            abcArrPor.splice(itemIndex, 0, '|');
        }
        for (var itemIndex = 10; itemIndex < abcArrPor.length; itemIndex += 11) {

            abcArrPor.splice(itemIndex, 0, '\n');
        }

    }

    if (meter === 'M:4/4 \n L:1/8 \n') {
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
    ABCJS.renderAbc('target5', `%%staffwidth 3in \n${meter} [K: clef=${Clef}] \n ${abcStringPor} |]`)
    // console.log(`%%staffwidth 3in \n  ${meter} [K: clef=${Clef}] \n ${abcStringPor} |]`);
}



generateExBTN()


function changeMeter() {
    meter = meters.get(document.getElementById('timeSigId').value)
    // console.log(meter);
    generate()
        ;
    onKeyData = { ...onKeyData, meter: meter }
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

//switch from ABC to Do Re Mi ♭ ♯
function toggleDoReMiABC() {
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
    generate()
    changeAan(selectedTonic)
    // console.log(selectedTonic);
}


DoReMiSwitch.addEventListener('click', toggleDoReMiABC)

function dispNames() {
    if (displyNoteNameSwitch.checked) { displayNoteNames = true } else { displayNoteNames = false };
    onKeyData = { ...onKeyData, dispNoteNames: displyNoteNameSwitch.checked }
    updateLocalStorage();
    generate();
}

//Toggle Names on or off
displyNoteNameSwitch.addEventListener('click', dispNames);


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


//dark mode

function lightDarkFunc() {
    const body = document.body;
    const scaleDropDn = document.getElementById('scaleType');
    const patternDropDn = document.getElementById('patternType');
    const clefDropDn = document.getElementById('clef');
    // const logo = document.getElementById('logo');
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

toggleDoReMiABC()
dispNames()