let body = document.querySelector("body");
let wrapper = document.createElement("div");
let mainBtn = document.querySelector('.main-button')

let rgbValue1;
let rgbValue2;
let rgbValue3;

let rgbValue1TenPercent;
let rgbValue2TenPercent;
let rgbValue3TenPercent;


wrapper.classList.add("wrapper");
body.appendChild(wrapper);

for (let i = 1; i <256; i++){
    let div = document.createElement("div");
    wrapper.appendChild(div);
    div.classList.add("grid-div");
    
}

let appendColumns = "auto";
let appendRows = "auto";
let counterOriginalGrid = 16;
for (let i = 1; i <= counterOriginalGrid; i++){
        appendColumns = appendColumns + " auto ";           
    }

document.querySelector(".wrapper").style.display = "grid";
document.querySelector(".wrapper").style.gridTemplateColumns = appendColumns;    

prepareCustomGenerator();
createRGBValues();

function createCustomGrid(){
    
    appendColumns = "auto";
    appendRows = "auto";
    
    let latitude = prompt("Please submit the number of columns:");
    let longitude = prompt("Now please choose how many rows to have: ");
    
    let numberOfCells = latitude * longitude;
    
    body.removeChild(wrapper);
    wrapper = document.createElement("div");
    wrapper.classList.add("wrapper");
    body.appendChild(wrapper);

    for (let i = 1; i <= numberOfCells; i++){
        let div = document.createElement("div");
        wrapper.appendChild(div);
        div.classList.add("grid-div");
    
    }

    for (let i = 1; i < latitude; i++){
        appendColumns = appendColumns + " auto ";           
    }

    for (let i = 1; i < longitude; i++){
        appendRows = appendRows + " auto ";           
    }

    document.querySelector(".wrapper").style.display = "grid";
    document.querySelector(".wrapper").style.gridTemplateColumns = appendColumns;    
    document.querySelector(".wrapper").style.gridTemplateRows = appendRows;

    prepareCustomGenerator();    

    createRGBValues();
}

function prepareCustomGenerator(){

    let gridDiv = document.querySelectorAll(".grid-div");

    function addEventListenerNodeList(list, event, fn){
        for (let i = 0; i < gridDiv.length; i++){
            gridDiv[i].addEventListener(event,fn,false);   
        }
    }

addEventListenerNodeList(gridDiv,'mouseover',addTrail);

}

function createRGBValues(){

    rgbValue1 = Math.floor(Math.random()*256);
    rgbValue1TenPercent = Math.floor((rgbValue1/10));
        
    rgbValue2 = Math.floor(Math.random()*256);
    rgbValue2TenPercent = Math.floor((rgbValue2/10))
        
    rgbValue3 = Math.floor(Math.random()*256);
    rgbValue3TenPercent = Math.floor((rgbValue3/10))
    
}


function addTrail(){
    
    if (rgbValue1 > 0){
    
        rgbValue1 = rgbValue1 - rgbValue1TenPercent;
    
        rgbValue2 = rgbValue2 - rgbValue2TenPercent;
        
        rgbValue3 = rgbValue3 - rgbValue3TenPercent;
        
    }
    
    this.style.backgroundColor = "rgb(" +rgbValue1 + "," + rgbValue2 + "," + rgbValue1 + ")";

}

mainBtn.addEventListener('click',createCustomGrid);

