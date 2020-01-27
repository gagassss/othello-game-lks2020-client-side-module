
let player

let schema = [
    ['','','','','','','',''],
    ['','','','','','','',''],
    ['','','','','','','',''],
    ['','','','1','2','','',''],
    ['','','','2','1','','',''],
    ['','','','','','','',''],
    ['','','','','','','',''],
    ['','','','','','','',''],
]

function whenStart() {
    document.getElementById('cell33').innerHTML = '<div class="disc white"></div>'
    document.getElementById('cell34').innerHTML = '<div class="disc black"></div>'
    document.getElementById('cell43').innerHTML = '<div class="disc black"></div>'
    document.getElementById('cell44').innerHTML = '<div class="disc white"></div>'
}
function checkCurrentUser() {
    if (document.getElementById('turn').innerHTML == 'white') {
        player = 1
    } else {
        player = 2
    }
} 

function updateScore() {
    document.getElementById('white-score').innerHTML = document.getElementsByClassName('white').length 
    document.getElementById('black-score').innerHTML = document.getElementsByClassName('black').length 
}

function checkThatDisc(user) {
    if (player == )
}

function selectCell(row, col) {
    checkCurrentUser()
    let disc
    
    if (document.getElementById('cell'+row+col).innerHTML == '') {
        if (player == 1) {
            disc = 'white'
            document.getElementById('turn').innerHTML = 'black'
        } else {
            disc = 'black'
            document.getElementById('turn').innerHTML = 'white'
        }
        schema[row][col] = player
        document.getElementById('cell'+row+col).innerHTML = '<div class="disc '+disc+'"></div>'
    } 
    updateScore()
}

checkThatDisc(document.getElementById('turn').innerHTML)

whenStart()
updateScore()