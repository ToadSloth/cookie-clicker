let popped = {
    numOfPopcornPopped: 0,
    numOfPassivePopping: 0,
    intervalLoopID: undefined
}

let passivePopcornPopped =document.getElementById("passive-popping")

let popCornEle = document.getElementById("popcorn-num");

let popCornElement = document.getElementById("pic");

function popCornIncrementer() {
    popped.numOfPopcornPopped = popped.numOfPopcornPopped +1;
    popCornEle.textContent = popped.numOfPopcornPopped;
};

popCornElement.addEventListener("click", popCornIncrementer)

let stoveButtnEle = document.getElementById("stove");

function stovePopperUpgrade() {
    if (popped.numOfPopcornPopped >= 10) {
        popped.numOfPopcornPopped -= 10;
        popCornEle.textContent = popped.numOfPopcornPopped;
        popped.numOfPassivePopping += 1;
        passivePopcornPopped.textContent = popped.numOfPassivePopping;
    }
};

stoveButtnEle.addEventListener('click', stovePopperUpgrade)

function passivePopper() {
    popped.numOfPopcornPopped += popped.numOfPassivePopping
    popCornEle.textContent = popped.numOfPopcornPopped;
}

function passivePopperInterval() {
    popped.intervalLoopID = setInterval(passivePopper, 1000);
}

stoveButtnEle.addEventListener("click", passivePopperInterval);

let microButtnEle = document.getElementById("micro")

function microPopperUpgrade() {
    if (popped.numOfPopcornPopped >= 50) {
        popped.numOfPopcornPopped -= 50;
        popCornEle.textContent = popped.numOfPopcornPopped;
        popped.numOfPassivePopping += 2;
        passivePopcornPopped.textContent = popped.numOfPassivePopping;
    }
};

microButtnEle.addEventListener('click', microPopperUpgrade)

microButtnEle.addEventListener("click", passivePopperInterval);

let machineButtnEle = document.getElementById("machine")

function machinePopperUpgrade() {
    if (popped.numOfPopcornPopped >= 100) {
        popped.numOfPopcornPopped -= 100;
        popCornEle.textContent = popped.numOfPopcornPopped;
        popped.numOfPassivePopping += 3;
        passivePopcornPopped.textContent = popped.numOfPassivePopping;
    }
};

machineButtnEle.addEventListener('click', machinePopperUpgrade)

machineButtnEle.addEventListener("click", passivePopperInterval);