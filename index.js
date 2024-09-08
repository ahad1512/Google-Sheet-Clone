const header = document.querySelector(".header");
const snoContainer =document.querySelector(".sno-container");
const rowsContainer = document.querySelector(".rows-container");

columns=27, rows=50;

for(let i=0;i<columns;i++){
    const cell = document.createElement("div");
    
    i!=0 && (cell.innerText= String.fromCharCode(64 + i));
    i === 0 ? (cell.className= "first-cell") : (cell.className= "cell");
    header.appendChild(cell);
}

function createRow(rowNumber){
    const row = document.createElement("div");
    row.className="row";

    for(let i=1;i<columns;i++){
        const cell = document.createElement("div");
        cell.className="cell";
        cell.contentEditable=true;
        cell.id = `${String.fromCharCode(64 + i)}${rowNumber}`;
        cell.addEventListener("focus", onCellFocus);
    
        row.appendChild(cell);
    }
    return row;
}
for(let i=1;i<=rows;i++){
    const snoCell = document.createElement("div");
    snoCell.innerText= i;
    snoCell.className="sno";
    snoContainer.appendChild(snoCell);

    const rowElement = createRow(i);
    rowsContainer.appendChild(rowElement);
}