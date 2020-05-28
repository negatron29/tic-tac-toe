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

    const markBoard = (sqId,thisMark) => {
        idStr = sqId.toString();
        let box = document.getElementById(idStr);
        if (box.innerHTML === "") {
            box.innerHTML = thisMark;
        }
    }
    return {render,markBoard};    
    })();//This makes an instance of itself when the command runs

const gameController = (() => {
    const clearBoard = () => {
        let sqCnt = 9;
        for (let i = 0; i < sqCnt; i++) {
            let iStr = i.toString();
            let tgtDiv = document.getElementById(iStr);
            tgtDiv.innerHTML = "";
    }
}
    const recordMark = (playerId,sqId) => {
        scoreBook[playerId].push(sqId);
    }

    const checkWinner = (playerId) => {
        let winningArrays = [
            ["0","1","2"],
            ["3","4","5"],
            ["6","7","8"],
            ["0","3","6"],
            ["1","4","7"],
            ["2","5","8"],
            ["0","4","8"],
            ["2","4","6"]
        ]
        let playerMarks = scoreBook[playerId];
        let won = 0;
        for (let i = 0; i < winningArrays.length; i++) {
            //do somethiing
            let valuesFound = 0;
            for (let j = 0; j < playerMarks.length; j++) {
                if (winningArrays[i].includes(playerMarks[j]) === true) {
                    valuesFound +=1;
                }
            }
            if (valuesFound === 3) {
                won +=1;
            }
        }
        if (won > 0) {
            return "Y";
        }
        else {
            return "N"
        }
    }

return {clearBoard,recordMark,checkWinner};
})();

const scoreBook = [
    [],[]
];

const Player = (name) => {
    let thisMark = allMarks[currentMark];
    const markSpot = (sqId) => {
        gameBoard.markBoard(sqId,thisMark);

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