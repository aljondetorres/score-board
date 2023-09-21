count = 0
let countEl = document.getElementById("count-el-1")
let countEl1 = document.getElementById("count-el-2")

function click1() {
    count += 1
    countEl.textContent = count
}
function click2() {
    count += 2
    countEl.textContent = count
}
function click3() {
    count += 3
    countEl.textContent = count
}

function clickneg1() {
    count -= 1
    countEl.textContent = count
}
function clickneg2() {
    count -= 2
    countEl.textContent = count
}
function clickneg3() {
    count -= 3
    countEl.textContent = count
}


function click11() {
    count += 1
    countEl1.textContent = count    
}
function click22() {
    count += 2
    countEl1.textContent = count    
}
function click33() {
    count += 3
    countEl1.textContent = count    
}

function click111() {
    count -= 1
    countEl1.textContent = count
}
function click222() {
    count -= 2
    countEl1.textContent = count
}
function click333() {
    count -= 3
    countEl1.textContent = count
}
