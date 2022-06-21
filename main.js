img=""
var status=""
function preload(){
    img=loadImage("dog_cat.jpg")
}

function setup(){
    canvas=createCanvas(640,420)
    canvas.center()

    objectDetector=ml5.objectDetector("cocoSSD" , modelLoaded)
    document.getElementById("status").innerHTML="Status:Detecting Objects"
}

function modelLoaded(){
    console.log("jweggtjfp0ewfcgtwfcjegfc")
     status=true
     objectDetector.detect(img,gotResult)
}


function gotResult(error,results){
    if(error){
        console.error(error)
    }

    console.log(results)
}

function draw(){
    image(img,0,0,640,420)
    fill("#ff0000")
    text("Dog",55,75)
    noFill()
    rect(45,60,450,300)
    stroke("#FF0000")

    fill("#ff0000")
    text("Cat",320,120)
    noFill()
    rect(300,90,270,320)
    stroke("#FF0000")
    
}