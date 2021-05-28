function createPigs() {
    let pigs = new Array("Ниф-ниф","Наф-Наф","Нуф-нуф");
    return pigs;
}

function addPig(pigname = "Porky", pigs = createPigs()) {
    pigs.push(pigname);
    console.log("Added pig with name "+ pigname);
}

function showPigs(pigs) {
    console.log("Pig names: " + pigs);
}

function countPigs(pigs) {
    console.log(pigs.length + " pigs left");
}

function killPig(pigs) {
    console.log("Kill the pig");
    pigs.pop();
    countPigs(pigs);
    showPigs(pigs);
}

let pigs = createPigs();
showPigs(pigs);
killPig(pigs);
addPig("Нюша",pigs);
showPigs(pigs);
countPigs(pigs);

