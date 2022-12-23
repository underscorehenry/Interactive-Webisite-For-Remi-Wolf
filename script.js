function hoverColorChange(idName){
    let element = document.getElementById(idName);

    element.style.backgroundColor = "rgb(253, 251, 118)";

    element.addEventListener("mouseout", (event) => {
        element.style.backgroundColor = 'white';
    })
}

function displayWords(idName, idName2, idName3) {
    let element = document.getElementById(idName);

    let brother = document.getElementById(idName2);

    let sister = document.getElementById(idName3);

    if(element.style.display === 'inline') {
        element.style.display = 'none';
    }

    else {

    

    element.style.display = 'inline';

    brother.style.display = 'none';

    sister.style.display = 'none';
    }
    
}