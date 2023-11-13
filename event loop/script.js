function countRabbits() {
    for(let i=1; i<=3; i++){
        alert(`Rabbit count: ${i}`)
    }
}


// event listener
let btn4 = document.getElementById('btn4')
let btn5 = document.getElementById('btn5')
let btn6 = document.getElementById('btn6')

// event handler
function handler() { 
    alert('Button 4, Clicked !') 
}

// add event 
btn4.addEventListener('click', handler)

// remove event
btn4.removeEventListener('click', handler)


// Event Object
btn5.onclick = function(event) {
    alert(event.type + " at " + event.currentTarget);
    alert("Coordinates : " + event.clientX + " : " + event.clientY)
}


// ********************** TASKS **************************
// Task 1 - Hide text
let hide = document.getElementById('hide')
let text = document.getElementById('text')
hide.addEventListener('click', function(){
    text.hidden = true
})


// Task 3 - Creating sliding menu
let sweetArr = document.getElementById('arr')
let sweets = document.getElementById('sweets')
let sweetLists = document.getElementById('sweet-lists')
sweets.addEventListener('click', () => {
    if(sweetLists.hidden !== true) {
        sweetLists.hidden = true
    } else {
        sweetLists.hidden = false
    }
})


// Task 4 - Add closing button
let close1 = document.getElementById('close1')
let close2 = document.getElementById('close2')
let close3 = document.getElementById('close3')

let box1 = document.getElementById('box1')
let box2 = document.getElementById('box2')
let box3 = document.getElementById('box3')

close1.addEventListener('click', () => {
    box1.hidden = true
})

close2.addEventListener('click', () => {
    box2.hidden = true
})

close3.addEventListener('click', () => {
    box3.hidden = true
})