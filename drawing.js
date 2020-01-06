// intialze variable for 2d array
var arr;

function setup() {
    
}

// function to create the canvas with the given dimensions
function newCanvas(){
    var width = parseInt(document.getElementById('width').value);
    var height = parseInt(document.getElementById('height').value);
     
    createCanvas(width, height)
    arr = new Array(width)
    for(var i = 0; i < width; i ++){
        arr[i] = new Array(height);
    } 

}