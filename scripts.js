/* SET THE VARIABLES NEEDED TO USE*/

let body = document.querySelector("body");
let wrapper = document.createElement("div");
let mainBtn = document.querySelector('.main-button')

let rgbValue1;
let rgbValue2;
let rgbValue3;

let rgbValue1TenPercent;
let rgbValue2TenPercent;
let rgbValue3TenPercent;

let subtitle = document.querySelector(".subtitle");
let secondSubtitleText = "It can be ugly. It will probably be."
let thirdSubtitleText = "It can be ugly. It will probably be. Surely. ;)"


/* PART TO MANIPULATE THE TITLE AND SUBTITLE */
setTimeout(()=>{
    alternateSubtitle(subtitle,secondSubtitleText);
        setTimeout(() => {
        alternateSubtitle(subtitle,thirdSubtitleText);    
        }, 2500);
},1500);

/* GENERATE FIRST CANVAS WITH 64x64 grid cells */
wrapper.classList.add("wrapper");
body.appendChild(wrapper);

for (let i = 1; i < 256; i++){
    let div = document.createElement("div");
    wrapper.appendChild(div);
    div.classList.add("grid-div");
    console.log(i);
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

mainBtn.addEventListener('click',createCustomGrid);

function alternateSubtitle(element, textToAppear){
    element.innerHTML = textToAppear;
}

// MAIN FUNCTION THAT CREATES THE GRID
function createCustomGrid(){
    
    appendColumns = "auto";
    appendRows = "auto";
    
    let latitude = parseInt(prompt("Please choose how many columns you want to have:"));
    let longitude = parseInt(prompt("Now please choose how many rows you want to have: "));
    
    console.log(latitude);
    console.log(longitude);

    if (isNaN(latitude) || isNaN(longitude)){
        alert("Only numbers are allowed!")
        latitude = 16;
        longitude = 16;
    } else {

        if (latitude > 100){
            latitude = 100;
        } else if(longitude > 100){
            longitude = 100;
        }

    }
    let numberOfCells = latitude * longitude;
    
    body.removeChild(wrapper);
    wrapper = document.createElement("div");
    wrapper.classList.add("wrapper");
    body.appendChild(wrapper);

    for (let i = 1; i < numberOfCells; i++){
        let div = document.createElement("div");
        wrapper.appendChild(div);
        div.classList.add("grid-div");
        console.log(i);
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

// THIS FUNCTION ADDS A HOOVER EVENT LISTENER TO ALL THE DIVs
function prepareCustomGenerator(){

    let gridDiv = document.querySelectorAll(".grid-div");

    function addEventListenerNodeList(list, event, fn){
        for (let i = 0; i < gridDiv.length; i++){
            gridDiv[i].addEventListener(event,fn,false);   
        }
    }

addEventListenerNodeList(gridDiv,'mouseover',addTrail);

}

// THIS FUNCTION CREATES RANDOM RGB VALUES USED FOR THE HOOVER EFFECT

function createRGBValues(){

    rgbValue1 = Math.floor(Math.random()*256);
    rgbValue1TenPercent = Math.floor((rgbValue1/10));
        
    rgbValue2 = Math.floor(Math.random()*256);
    rgbValue2TenPercent = Math.floor((rgbValue2/10))
        
    rgbValue3 = Math.floor(Math.random()*256);
    rgbValue3TenPercent = Math.floor((rgbValue3/10))
    
}

// THIS FUNCTION REDUCES THE RGB VALUES BY 10%, ADDING THE MOUSE TRAIL AND MAKING IT GET DARKER AND DARKER
function addTrail(){
    
    if (rgbValue1 > 0){
        rgbValue1 = rgbValue1 - rgbValue1TenPercent;
        rgbValue2 = rgbValue2 - rgbValue2TenPercent;
        rgbValue3 = rgbValue3 - rgbValue3TenPercent;
    }
    
    this.style.backgroundColor = "rgb(" +rgbValue1 + "," + rgbValue2 + "," + rgbValue1 + ")";
}
