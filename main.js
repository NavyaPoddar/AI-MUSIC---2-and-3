nbil = "" ;
abcdefu = "" ; 
left_wrist_y = 0 ;
right_wrist_y = 0 ;


function preload(){
    nbil = loadSound("nbil.mp3");
    abcdefu = loadSound("abcdefu.mp3");
}


function setup(){
    canvas = createCanvas(600,500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    posenetmodel = ml5.poseNet(video,modelloaded);
    posenetmodel.on("pose" , getresults);
}

function draw(){

    image(video,100,300,600,500);
}

function modelloaded(){
    console.log("model has loaded");
}

function getresults(arrayresults){
    if(arrayresults.length > 0){
        console.log(arrayresults);
        right_wrist_y = arrayresults[0].pose.rightWrist.y;
        left_wrist_y = arrayresults[0].pose.leftWrist.y;
    }
}