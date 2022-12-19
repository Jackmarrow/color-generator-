const collectionOfDivs = document.getElementsByClassName('color-holder');
const listOfColors = []; 

function codeGenerater(){
    const codeCombination = 'abcdef0123456789';
    for(let i = 0; i < collectionOfDivs.length; i++){
        let color = "#";
        for(let j = 0; j < 6 ; j++){
            color += codeCombination[Math.floor(Math.random() * codeCombination.length)]
        }
        listOfColors.push(color);
    }
    return void 0;
}

codeGenerater();

function colorGenerater(listOfColors){
    listOfColors.forEach((ele, index) =>{
        collectionOfDivs[index].style.backgroundColor = ele;
        collectionOfDivs[index].innerText = ele;
    })
    return void 0;
}

colorGenerater(listOfColors);

