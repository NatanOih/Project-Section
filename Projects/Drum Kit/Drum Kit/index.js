var drums = {
    0 : 'crash.mp3',
    1 : 'kick-bass.mp3',
    2 : 'snare.mp3',
    3 : 'tom-1.mp3',
    4 : 'tom-2.mp3',
    5 : 'tom-3.mp3',
    6 : 'tom-4.mp3'
}

keys = {
    0 : 'w',
    1 : 'a',
    2 : 's',
    3 : 'd',
    4 : 'j',
    5 : 'k',
    6 : 'l',
    
}

var button_map = {
    'w' : 'crash.mp3',
    'a' : 'kick-bass.mp3',
    's' : 'snare.mp3',
    'd' : 'tom-1.mp3',
    'j' : 'tom-2.mp3',
    'k' : 'tom-3.mp3',
    'l' : 'tom-4.mp3'
}



function playDrum(index){
    var audio = new Audio('sounds/' + drums[index]);
    audio.volume = 0.1;
    audio.play();

}

function playDrumString(drum_name){
    var audio = new Audio('sounds/' + drum_name);
    audio.volume = 0.1;
    audio.play();

}

function playKeySound(event) {
    var inverted_map = _.invert(button_map)
    var button = event.key; //'w'
    var drum = button_map[button]; //'crash.mp3'
    switch (button) { // 'w'
        case inverted_map[drum]: //checks if the there is a file name attached to the button pressed
            playDrumString(drum);
            break;
    
        default: console.log('dick');
    } 
}

function playMouseSound(buttonInnerHTML, index) {
    switch (buttonInnerHTML) {
        case keys[index]:
            playDrum(index);
            break;
    
        default: console.log('dick');
    }  
}

function buttonAnimation(currentKey){
    var classSelector = document.querySelector("." + (currentKey));
    classSelector.classList.add("pressed");
    setTimeout(function() {
        classSelector.classList.remove("pressed");
    }, 100);

}


//  detects mouse clicks in the boxeses of the drums.
document.querySelectorAll(".drum").forEach((element, index) => {
    element.addEventListener("click", function() {
        var buttonInnerHTML = this.innerHTML;
        playMouseSound(buttonInnerHTML, index);
        buttonAnimation(buttonInnerHTML)
    })
})

//
document.addEventListener("keypress", function(event){
    playKeySound(event);
    if (button_map[event.key]){
        buttonAnimation(event.key);
    }
        
    });
