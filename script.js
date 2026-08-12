let pieceNum = 1




async function addButtonClick() {
    pieceNum++;
    document.getElementById("num").innerHTML = pieceNum;
}

async function subButtonClick() {
    pieceNum--;
    document.getElementById("num").innerHTML = pieceNum;
}

async function findButtonClick() {
    const pieces = JSON.parse(await fetch("pieces.json"));
    for (let i = 0; i < pieces.length; i++) {
        if (pieces[i].piece_number == pieceNum) {
            document.getElementById("name").innerHTML = pieces[i].name
        }
    }
}