var allMarks = ["X","O"];
var currentMark = 0;


const gameBoard = (() => {
    //let sqCnt = 9;
    //let master = document.getElementById("board");
    function render () {
        let sqCnt = 9;
        let master = document.getElementById("board");
        for (let i = 0; i < sqCnt; i++) {
            let newDiv = document.createElement("div");
            let iStr = i.toString();
            newDiv.setAttribute("id",iStr);
            newDiv.setAttribute("class","gamespace");
            master.appendChild(newDiv);
            //console.log(newDiv);
        }
    };
    return {render};
        
    })();

const gameController = () => {

}

const Player = (name) => {
    let thisMark = allMarks[currentMark];
    const markSpot = (sqId) => {
        idStr = sqId.toString();
        let box = document.getElementById(idStr);
        if (box.innerHTML === "") {
            box.innerHTML = thisMark;
        }
    }
    currentMark +=1;
    return {name,markSpot};
    
}

//This object/function will check for a winner 
//after every "mark" is made
/*
const controller = () => {
    const checkForWinner = () => {

    }
};
*/
/*
function render () {
    let sqCnt = 9;
    console.log(sqCnt);
    let master = document.getElementById("board");
    console.log(master);
    for (let i = 1; i < sqCnt.length; i++) {
        console.log(i);
        let newDiv = document.createElement("div");
        let iStr = i.toString();
        console.log(iStr);
        newDiv.setAttribute("id",iStr);
        newDiv.setAttribute("class","gamespace");
        master.appendChild(newDiv);
        console.log(newDiv);
    }
};

render();*/

gameBoard.render();